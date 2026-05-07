import React, { useState } from 'react';
import './App.css';

const Signup = ({ onSignupSuccess, switchToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        if (onSignupSuccess) onSignupSuccess({ email, fullName });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="login-container">
      {}
      {(loading || showSuccess) && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}>
          <div className="login-card" style={{
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
                <p style={{ fontWeight: '600', opacity: 0.8 }}>Creating account...</p>
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
                  <h3 style={{ margin: 0, fontWeight: '700', fontSize: '1.2rem' }}>Account Created!</h3>
                  <p style={{ margin: '5px 0 0', opacity: 0.7 }}>Welcome to Ezeiiy Store!</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="login-card">
        <div className="login-header">
          <h2 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '8px', letterSpacing: '-0.5px' }}>
            CREATE AN ACCOUNT
          </h2>
          <p style={{ opacity: 0.6 }}>Ezeiiy Store.</p>
        </div>
        
        <form className="login-form" onSubmit={handleSignup}>
          <div className="input-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="fullName"
              placeholder="e.g. Nandu" 
              value={formData.fullName}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email"
              placeholder="e.g. nandu@example.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password"
              placeholder="••••••••" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="••••••••" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div style={{ marginBottom: '25px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <input type="checkbox" id="terms" required style={{ cursor: 'pointer', marginTop: '4px' }} />
              <label htmlFor="terms" style={{ cursor: 'pointer', fontSize: '0.85rem', opacity: 0.7, lineHeight: '1.4' }}>
                I agree to the Terms of Service and Privacy Policy.
              </label>
            </div>
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>
        
        <div className="login-footer" style={{ marginTop: '25px', textAlign: 'center' }}>
          <p style={{ opacity: 0.8 }}>
            Already have an account?{' '}
            <span 
              onClick={switchToLogin} 
              style={{ 
                color: "inherit", 
                fontWeight: "700", 
                cursor: "pointer", 
                textDecoration: "underline",
                marginLeft: "5px" 
              }}
            >
              Log in instead
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
        .dark-mode label {
          color: #fff !important;
        }
        .dark-mode .login-header p,
        .dark-mode .login-footer p {
          color: #aaa !important;
        }
      `}</style>
    </div>
  );
};

export default Signup;