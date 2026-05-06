import React, { useState } from 'react';
import './App.css';

const Login = ({ onLoginSuccess, switchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // New state for custom popup

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true); // Show custom popup instead of alert
      
      // Delay the actual login success callback to let the user see the success message
      setTimeout(() => {
        setShowSuccess(false);
        if (onLoginSuccess) onLoginSuccess({ email });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="login-container">
      {/* --- CUSTOM POPUP OVERLAY --- */}
      {(loading || showSuccess) && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '40px',
            borderRadius: '2.5rem', // Match your vibe
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            minWidth: '280px',
            textAlign: 'center'
          }}>
            {loading ? (
              <>
                {/* Minimalist Spinner */}
                <div className="spinner" style={{
                  width: '40px',
                  height: '40px',
                  border: '3px solid #f3f3f3',
                  borderTop: '3px solid #000',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                <p style={{ fontWeight: '500', color: '#444' }}>Verifying details...</p>
              </>
            ) : (
              <>
                {/* Success State */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#f0fff4',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000000',
                  fontSize: '1.5rem'
                }}>
                  ✓
                </div>
                <div>
                  <h3 style={{ margin: 0, fontWeight: '700', fontSize: '1.2rem' }}>Login Successful</h3>
                  <p style={{ margin: '5px 0 0', color: '#666' }}>Welcome to Ezeiiy Store.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

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

      {/* Inline styles for the spinner animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Login;