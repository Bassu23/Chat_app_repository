import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Welcome to Teams Clone</h1>
      <form className="login-form">
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
