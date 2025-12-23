import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, User, X } from "lucide-react";

const Message = ({ role, content }) => {
  const isUser = role === "user";
  const [modalImage, setModalImage] = useState(null);

  return (
    <div
      className={`flex w-full mb-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex max-w-[85%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        } gap-2.5`}
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
          className={`p-3 rounded-2xl ${
            isUser
              ? "bg-blue-600 text-white rounded-tr-none"
              : "bg-white border border-gray-200 shadow-sm rounded-tl-none"
          }`}
        >
          <div
            className={`prose ${
              isUser ? "prose-invert" : "prose-slate"
            } max-w-none prose-sm text-[0.9rem]`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Headings
                h1: (props) => (
                  <h1
                    {...props}
                    className={`text-xl font-bold mb-2 mt-3 ${
                      isUser ? "text-white" : "text-gray-900"
                    }`}
                  />
                ),
                h2: (props) => (
                  <h2
                    {...props}
                    className={`text-lg font-bold mb-1.5 mt-2.5 ${
                      isUser ? "text-white" : "text-gray-800"
                    }`}
                  />
                ),
                h3: (props) => (
                  <h3
                    {...props}
                    className={`text-base font-semibold mb-1.5 mt-2 ${
                      isUser ? "text-white" : "text-gray-800"
                    }`}
                  />
                ),
                // Paragraphs
                p: (props) => (
                  <p
                    {...props}
                    className={`mb-2 leading-normal ${
                      isUser ? "text-white" : "text-gray-700"
                    }`}
                  />
                ),
                // Lists
                ul: (props) => (
                  <ul
                    {...props}
                    className={`list-disc list-outside ml-4 mb-2 space-y-0.5 ${
                      isUser ? "text-white" : "text-gray-700"
                    }`}
                  />
                ),
                ol: (props) => (
                  <ol
                    {...props}
                    className={`list-decimal list-outside ml-4 mb-2 space-y-0.5 ${
                      isUser ? "text-white" : "text-gray-700"
                    }`}
                  />
                ),
                li: (props) => (
                  <li {...props} className="leading-normal" />
                ),
                // Code blocks
                code: ({ inline, ...props }) =>
                  inline ? (
                    <code
                      {...props}
                      className={`px-1 py-0.5 rounded font-mono text-[0.85rem] ${
                        isUser
                          ? "bg-blue-700 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    />
                  ) : (
                    <code
                      {...props}
                      className={`block p-2.5 rounded-lg font-mono text-[0.85rem] overflow-x-auto ${
                        isUser
                          ? "bg-blue-700 text-white"
                          : "bg-gray-50 text-gray-800 border border-gray-200"
                      }`}
                    />
                  ),
                // Tables
                table: (props) => (
                  <div className="overflow-x-auto my-2">
                    <table
                      {...props}
                      className={`min-w-full border-collapse ${
                        isUser ? "border-white/20" : "border-gray-200"
                      }`}
                    />
                  </div>
                ),
                thead: (props) => (
                  <thead
                    {...props}
                    className={`${
                      isUser ? "bg-blue-700" : "bg-gray-50"
                    }`}
                  />
                ),
                th: (props) => (
                  <th
                    {...props}
                    className={`px-3 py-1.5 text-left font-semibold border ${
                      isUser
                        ? "border-white/20 text-white"
                        : "border-gray-200 text-gray-900"
                    }`}
                  />
                ),
                td: (props) => (
                  <td
                    {...props}
                    className={`px-3 py-1.5 border ${
                      isUser
                        ? "border-white/20 text-white"
                        : "border-gray-200 text-gray-700"
                    }`}
                  />
                ),
                // Blockquotes
                blockquote: (props) => (
                  <blockquote
                    {...props}
                    className={`border-l-4 pl-3 py-0.5 my-2 italic ${
                      isUser
                        ? "border-white/40 text-white/90"
                        : "border-gray-300 text-gray-600"
                    }`}
                  />
                ),
                // Strong/Bold
                strong: (props) => (
                  <strong
                    {...props}
                    className={`font-bold ${
                      isUser ? "text-white" : "text-gray-900"
                    }`}
                  />
                ),
                // Images
                img: (props) => (
                  <img
                    {...props}
                    className="rounded-lg max-h-64 object-contain my-1.5 border border-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
                    alt={props.alt || "Image"}
                    onClick={() => setModalImage(props.src)}
                  />
                ),
                // Links
                a: (props) => (
                  <a
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`underline font-medium ${
                      isUser
                        ? "text-white hover:text-blue-100"
                        : "text-blue-600 hover:text-blue-800"
                    }`}
                  />
                ),
                // Horizontal rule
                hr: (props) => (
                  <hr
                    {...props}
                    className={`my-3 ${
                      isUser ? "border-white/20" : "border-gray-200"
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

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setModalImage(null)}
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={modalImage}
            alt="Zoomed view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Message;
