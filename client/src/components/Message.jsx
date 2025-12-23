import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, User } from "lucide-react";

const Message = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full mb-6 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex max-w-[80%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        } gap-3`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            isUser ? "bg-blue-600" : "bg-green-600"
          }`}
        >
          {isUser ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-5 h-5 text-white" />
          )}
        </div>

        {/* Message Content */}
        <div
          className={`p-4 rounded-2xl ${
            isUser
              ? "bg-blue-600 text-white rounded-tr-none"
              : "bg-white border border-gray-200 shadow-sm rounded-tl-none"
          }`}
        >
          <div
            className={`prose ${
              isUser ? "prose-invert" : "prose-slate"
            } max-w-none text-sm`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    className="rounded-lg max-h-64 object-contain my-2 border border-gray-200"
                    alt={props.alt || "Image"}
                  />
                ),
                a: ({ node, ...props }) => (
                  <a
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`underline ${
                      isUser
                        ? "text-white"
                        : "text-blue-600 hover:text-blue-800"
                    }`}
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
