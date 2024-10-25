// Page3/ChatScreen.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './Chatscreen.css'; // Import the CSS file for styles

const ChatScreen = () => {
  const { sender, receiver } = useParams();

  // Sample messages data
  const messages = [
    { id: 1, sender: 'user1', text: 'Hello!', timestamp: '10:00 AM' },
    { id: 2, sender: 'user2', text: 'Hi there!', timestamp: '10:01 AM' },
    { id: 3, sender: 'user1', text: 'How are you?', timestamp: '10:02 AM' },
  ];

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat between {sender} and {receiver}</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`chat-message ${message.sender === sender ? 'sent' : 'received'}`}>
            <span>{message.text}</span>
            <span className="timestamp">{message.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input type="text" placeholder="Type a message..." className="chat-input" />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default ChatScreen;
