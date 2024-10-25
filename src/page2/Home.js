import React from 'react';
import './Home.css'; // Ensure this path is correct
import { FaUsers, FaBell, FaRegUser } from 'react-icons/fa'; // Importing icons
import { AiOutlinePhone, AiOutlineVideoCamera } from 'react-icons/ai';

const Home = () => {
  const users = [
    { id: 1, name: 'John Doe', status: 'online', profilePic: '' },
    { id: 2, name: 'Jane Smith', status: 'offline', profilePic: '' },
    // Add more users as needed
  ];

  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="sidebar-section">
          <h3>Tabs</h3>
          <div className="sidebar-button" title="All Users">
            <FaUsers className="icon" />
          </div>
          <div className="sidebar-button" title="Notifications">
            <FaBell className="icon" />
          </div>
          <div className="sidebar-button" title="Groups">
            <FaRegUser className="icon" />
          </div>
        </div>
      </div>

      <div className="main-content">
        <input type="text" className="search-bar" placeholder="Search..." />

        <div className="user-list">
          {users.map(user => (
            <div key={user.id} className="user-card">
              {user.profilePic ? (
                <img src={user.profilePic} alt={`${user.name}'s profile`} className="profile-pic" />
              ) : (
                <div className="default-profile-pic" />
              )}
              <div className="user-info">
                <h3>{user.name}</h3>
                <p className={user.status}>{user.status}</p>
              </div>
              <div className="user-actions">
                <div className="action-icon" title="Voice Call">
                  <AiOutlinePhone />
                </div>
                <div className="action-icon" title="Video Call">
                  <AiOutlineVideoCamera />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
