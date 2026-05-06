import React, { useState } from 'react';
import './App.css';

const Login = ({ onLoginSuccess, switchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      alert("Success! Welcome back to Ezeiiy Store.");
      if (onLoginSuccess) onLoginSuccess({ email }); 
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <p style={{ fontWeight: '700', fontSize: '1.4rem', color: '#000', marginBottom: '5px' }}>
            LOGIN TO YOUR ACCOUNT
          </p>
          <p>Please enter your details to continue.</p>
        </div>
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="e.g. name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          {/* Fix: Added display:flex and justify-content:space-between 
              to separate the checkbox and the link. 
              Added marginBottom: '25px' to push the button further down.
          */}
          <div className="form-options" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '25px', 
            marginTop: '10px' 
          }}>
            <div className="remember-me" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" id="remember" style={{ cursor: 'pointer' }} />
              <label htmlFor="remember" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>Remember me</label>
            </div>
            
            <a 
              href="#" 
              className="forgot-link" 
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: '0.9rem', color: '#666', textDecoration: 'none' }}
            >
              Forgot password?
            </a>
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Processing..." : "Sign In"}
          </button>
        </form>
        
        <div className="login-footer" style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>
            New here?{' '}
            <span 
              onClick={switchToSignup} 
              style={{ 
                color: "#000", 
                fontWeight: "700", 
                cursor: "pointer", 
                textDecoration: "underline",
                marginLeft: "5px" 
              }}
            >
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;