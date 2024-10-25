// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatScreen from './Page3/Chatscreen'; // Import the ChatScreen component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Chat screen route */}
        <Route path="/chat/:sender/:receiver" element={<ChatScreen />} />

        {/* Other routes can be uncommented and used later */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
