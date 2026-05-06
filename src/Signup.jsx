import React, { useState } from 'react';

const Signup = ({ onSignupSuccess, switchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Logic for account creation goes here
    onSignupSuccess({ name: formData.firstName });
  };

  return (
    <div className="signup-container fade-in-up">
      <style>{`
        .signup-container {
          max-width: 480px;
          margin: 40px auto;
          padding: 40px;
          background: #fff;
          border-radius: 28px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.03);
        }

        .signup-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .signup-header h2 {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.8px;
          margin-bottom: 8px;
          color: #000;
        }

        .signup-header p {
          color: #777;
          font-size: 0.9rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .full-width { grid-column: span 2; }

        .input-group {
          margin-bottom: 18px;
        }

        .input-group label {
          display: block;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 8px;
          margin-left: 4px;
          letter-spacing: 1px;
          color: #999;
        }

        .input-group input {
          width: 100%;
          padding: 15px 20px;
          border: 1.5px solid #f0f0f0;
          border-radius: 14px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          background: #fafafa;
          box-sizing: border-box;
        }

        .input-group input:focus {
          outline: none;
          border-color: #000;
          background: #fff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.04);
        }

        .remember-me-section {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 20px 0 30px 0;
          cursor: pointer;
        }

        .remember-me-section input {
          width: 20px;
          height: 20px;
          accent-color: #000;
          cursor: pointer;
        }

        .remember-me-section span {
          font-size: 0.85rem;
          font-weight: 500;
          color: #555;
        }

        .create-acc-btn {
          width: 100%;
          padding: 18px;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 1, 0.2, 1);
        }

        .create-acc-btn:hover {
          background: #222;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .login-redirect {
          text-align: center;
          margin-top: 25px;
          font-size: 0.9rem;
          color: #666;
        }

        .login-redirect span {
          color: #000;
          font-weight: 800;
          cursor: pointer;
          text-decoration: underline;
          margin-left: 5px;
        }

        @media (max-width: 500px) {
          .signup-container { margin: 15px; padding: 30px 20px; }
          .form-grid { grid-template-columns: 1fr; }
          .full-width { grid-column: span 1; }
        }
      `}</style>

      <div className="signup-header">
        <h2>Create Account</h2>
        <p>Join our community today</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="input-group">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="Nandu" required onChange={handleInputChange} />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Krishna" required onChange={handleInputChange} />
          </div>
          
          <div className="input-group full-width">
            <label>Age</label>
            <input type="number" name="age" placeholder="e.g. 25" required onChange={handleInputChange} />
          </div>

          <div className="input-group full-width">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="nandu@example.com" required onChange={handleInputChange} />
          </div>

          <div className="input-group full-width">
            <label>Create New Password</label>
            <input type="password" name="password" placeholder="••••••••" required onChange={handleInputChange} />
          </div>

          <div className="input-group full-width">
            <label>Re-enter New Password</label>
            <input type="password" name="confirmPassword" placeholder="••••••••" required onChange={handleInputChange} />
          </div>
        </div>

        <label className="remember-me-section">
          <input 
            type="checkbox" 
            name="rememberMe" 
            checked={formData.rememberMe} 
            onChange={handleInputChange} 
          />
          <span>Remember me in the future</span>
        </label>

        <button type="submit" className="create-acc-btn">
          Create Account
        </button>
      </form>

      <div className="login-redirect">
        Already a member? <span onClick={switchToLogin}>Log in here</span>
      </div>
    </div>
  );
};

export default Signup;