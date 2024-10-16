"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, ChevronDown } from 'lucide-react';

// eslint-disable-next-line no-undef
//const backendUrl = process.env.REACT_APP_BACKEND_URL;
//console.log(backendUrl);

const apiRoute = 'http://localhost:5000/chat/message';

const contexts = [
  { value: 'general', label: 'General' },
  { value: 'education', label: 'Education' },
  { value: 'environment', label: 'Environment' },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [userId, setUserId] = useState('');
  const [context, setContext] = useState('general');
  const [isLoading, setIsLoading] = useState(false);
  const [messageIndex, setMessageIndex] = useState(-1);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setUserId(`66b860359db02cb2854a01b2`);
  }, [userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInput('');
      setIsLoading(true);
      setMessageIndex(-1);

      try {
        const response = await fetch(apiRoute, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input, userId, context }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const botMessage = { text: data.response, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error:', error);
        const errorMessage = { text: 'Sorry, there was an error processing your request.', sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    const userMessages = messages.filter(msg => msg.sender === 'user');
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (messageIndex < userMessages.length - 1) {
        const newIndex = messageIndex + 1;
        setMessageIndex(newIndex);
        setInput(userMessages[userMessages.length - 1 - newIndex].text);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (messageIndex > 0) {
        const newIndex = messageIndex - 1;
        setMessageIndex(newIndex);
        setInput(userMessages[userMessages.length - 1 - newIndex].text);
      } else if (messageIndex === 0) {
        setMessageIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <MessageCircle size={28} />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-96 h-[32rem] flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold text-lg">AI Assistant</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center mb-3">
              <select
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className="flex-1 text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              >
                {contexts.map((ctx) => (
                  <option key={ctx.value} value={ctx.value}>
                    {ctx.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={20} className="ml-2 text-gray-500" />
            </div>
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                placeholder="Type a message..."
                className="flex-1 text-gray-700 border border-gray-300 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-r-lg p-3 hover:bg-blue-600 transition-all duration-300 ease-in-out"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;