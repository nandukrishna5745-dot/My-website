import React from 'react';
import './App.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt...");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <p>Please enter your details to continue.</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="e.g. name@example.com" required />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          
          {}
          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>
          
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        
        <div className="login-footer">
          <p>New here? <a href="#">Sign up for free</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;