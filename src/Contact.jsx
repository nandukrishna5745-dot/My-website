import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page" style={{ padding: "80px 20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ 
        fontFamily: "'Space Grotesk', sans-serif", 
        fontSize: "2.5rem", 
        fontWeight: "700", 
        marginBottom: "20px", 
        textTransform: "uppercase", 
        letterSpacing: "2px" 
      }}>
        Get in touch with me! 👋
      </h2>
      
      <p style={{ 
        fontFamily: "'Inter', sans-serif", 
        color: "#666", 
        marginBottom: "50px", 
        fontSize: "1.1rem",
        lineHeight: "1.6"
      }}>
        Have questions about our collection or need help with an order?<br />
        I'd love to hear from you.
      </p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "30px" 
      }}>
        
        {}
        <a 
          href="https://www.instagram.com/ezeiiy/?__d=1%2F%3Fhidemenu%3Dtrue" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card-link" 
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="contact-card-container">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "15px" }}>
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", margin: "10px 0", fontSize: "1.3rem" }}>Instagram</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#888", fontSize: "0.95rem" }}>
              Just DM me personally for any help.
            </p>
          </div>
        </a>

        {}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nandukrishna5745@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card-link" 
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="contact-card-container">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "15px" }}>
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", margin: "10px 0", fontSize: "1.3rem" }}>Email Us</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#888", fontSize: "0.95rem" }}>
              Drop a mail<br/>
              We'll get back to you as soon as possible.
            </p>
          </div>
        </a>
        
      </div>

      <div style={{ marginTop: "60px", borderTop: "1px solid #eee", paddingTop: "40px" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#bbb", textTransform: "uppercase", letterSpacing: "1px" }}>
          Ezeiiy Store &copy; 2026
        </p>
      </div>
    </div>
  );
};

export default Contact;