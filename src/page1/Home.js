import React from 'react';
import './Home.css';  // Correct import

const Home = () => {
  return (
    <div className="home-container">
      <h1>Teams Clone Home</h1>
      <div className="nav">
        <button>Chat</button>
        <button>Teams</button>
        <button>Calendar</button>
      </div>
      <div className="content">
        <h2>Recent Chats</h2>
        {/* You can map over chat data here */}
      </div>
    </div>
  );
};

export default Home;
