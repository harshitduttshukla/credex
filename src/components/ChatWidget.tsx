import React, { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow-lg w-72">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold">Live Chat</h4>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
            >
              <FaTimes />
            </button>
          </div>
          <p className="text-sm">Hi! How can we help you today?</p>
          <input
            type="text"
            placeholder="Type your message..."
            className="mt-2 p-2 w-full border rounded text-black dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="mt-2 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600">
            Send
          </button>
        </div>
      )}
      {!isOpen && (
        <button
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
          onClick={() => setIsOpen(true)}
          aria-label="Open Chat"
        >
          <FaCommentDots />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
