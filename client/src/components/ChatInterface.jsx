import React, { useState, useRef, useEffect } from "react";
import { sendMessage, UnauthorizedError } from "../services/api";
import Message from "./Message";
import { Send, LogOut } from "lucide-react";

const SUGGESTED_QUESTIONS = [
  "What is the checklist for 1099 processing?",
  "How to start 1099 processing?",
  "Create calender reminder for 1099 processes thought the year",
];

const ChatInterface = ({ token, onLogout }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // Convert messages to history format for API
      // Note: In a real app, we might want to limit history size
      const history = messages.map((m) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      }));

      const data = await sendMessage(text, history, token);

      const aiMsg = { role: "model", content: data.response };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);

      // Handle 401 Unauthorized - logout user without showing error in chat
      if (error instanceof UnauthorizedError) {
        onLogout();
        return;
      }

      // For other errors, show in chat
      const errorMsg = {
        role: "model",
        content: `**Error:** ${error.message}`,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center z-10">
        <h1 className="text-xl font-bold text-gray-800">
          1099 Processing Assistant
        </h1>
        <button
          onClick={onLogout}
          className="text-gray-500 hover:text-red-600 transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                Welcome!
              </h2>
              <p className="text-gray-500 mb-8">
                I can help you with 1099 withholding processing tasks.
              </p>

              <div className="grid gap-3 w-full max-w-md">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="p-3 bg-white border border-gray-200 rounded-lg text-left hover:bg-blue-50 hover:border-blue-200 transition-all text-sm text-gray-700 shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg, index) => (
                <Message key={index} role={msg.role} content={msg.content} />
              ))}
              {loading && (
                <div className="flex justify-start mb-6">
                  <div className="flex flex-row gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl rounded-tl-none shadow-sm">
                      <span className="text-gray-500 text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-3xl mx-auto relative">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="relative"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about 1099 processing..."
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-center mt-2">
            <p className="text-xs text-gray-400">
              AI can make mistakes. Please verify important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
