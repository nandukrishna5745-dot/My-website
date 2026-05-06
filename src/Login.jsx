import React, { useState } from 'react';
import './App.css';

const Login = ({ onLoginSuccess, switchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
      setShowSuccess(true);
      
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
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Slightly darker for better contrast
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}>
          <div className="login-card" style={{ // Reusing login-card class for dark mode compatibility
            padding: '40px',
            borderRadius: '2.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            minWidth: '280px',
            textAlign: 'center',
            maxWidth: '350px'
          }}>
            {loading ? (
              <>
                <div className="spinner" style={{
                  width: '40px',
                  height: '40px',
                  border: '3px solid rgba(128, 128, 128, 0.2)',
                  borderTop: '3px solid var(--text-color, #000)',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                <p style={{ fontWeight: '600', opacity: 0.8 }}>Verifying details...</p>
              </>
            ) : (
              <>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'rgba(46, 204, 113, 0.15)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2ecc71',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  ✓
                </div>
                <div>
                  <h3 style={{ margin: 0, fontWeight: '700', fontSize: '1.2rem' }}>Login Successful</h3>
                  <p style={{ margin: '5px 0 0', opacity: 0.7 }}>Welcome to Ezeiiy Store.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="login-card">
        <div className="login-header">
          <h2 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '8px', letterSpacing: '-0.5px' }}>
            LOGIN TO YOUR ACCOUNT
          </h2>
          <p style={{ opacity: 0.6 }}>Please enter your details to continue.</p>
        </div>
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="e.g. nandu@example.com" 
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
              <label htmlFor="remember" style={{ cursor: 'pointer', fontSize: '0.9rem', opacity: 0.8 }}>
                Remember me
              </label>
            </div>
            
            <a 
              href="#" 
              className="forgot-link" 
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: '0.9rem', color: 'inherit', opacity: 0.6, textDecoration: 'none' }}
            >
              Forgot password?
            </a>
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Processing..." : "Sign In"}
          </button>
        </form>
        
        <div className="login-footer" style={{ marginTop: '25px', textAlign: 'center' }}>
          <p style={{ opacity: 0.8 }}>
            New here?{' '}
            <span 
              onClick={switchToSignup} 
              style={{ 
                color: "inherit", 
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

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .dark-mode .login-header h2, 
        .dark-mode .login-footer span,
        .dark-mode .remember-me label {
          color: #fff !important;
        }
        .dark-mode .forgot-link,
        .dark-mode .login-header p {
          color: #aaa !important;
        }
      `}</style>
    </div>
  );
};

export default Login;