// src/components/AIChatbot.js
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AIChatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { from: 'bot', message: 'How can I help you today?' },
  ]);

  const handleSendMessage = () => {
    const newChatHistory = [
      ...chatHistory,
      { from: 'user', message: userInput },
      { from: 'bot', message: getBotResponse(userInput) },
    ];
    setChatHistory(newChatHistory);
    setUserInput('');
  };

  const getBotResponse = (input) => {
    // Simple example responses. You can extend this to use AI or predefined responses.
    if (input.toLowerCase().includes('protein')) {
      return 'Try Grilled Chicken Salad. It has 30g of protein and is perfect for muscle gain.';
    } else if (input.toLowerCase().includes('vegetarian')) {
      return 'Here are some options: Lentil Soup, Chickpea Salad, and Veggie Stir-fry.';
    } else {
      return 'I can help with meal suggestions based on your preferences. Try asking for a high-protein meal!';
    }
  };

  return (
    <div className="container">
      <h2>Smart Diet Assistant (Chatbot)</h2>
      <div className="chatbox">
        {chatHistory.map((chat, index) => (
          <div key={index} className={chat.from === 'bot' ? 'bot-message' : 'user-message'}>
            <p>{chat.message}</p>
          </div>
        ))}
      </div>
      <Form.Control
        type="text"
        placeholder="Ask me something..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button variant="primary" onClick={handleSendMessage} className="mt-2">Send</Button>
    </div>
  );
};

export default AIChatbot;
