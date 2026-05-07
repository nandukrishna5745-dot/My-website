import React, { useState } from 'react';

export default function Navbar({ setPage, cartItemsCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {}
      <header className="header">
        <div className="header-left">
          <div 
            className="menu-icon" 
            onClick={() => setIsOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            ☰
          </div>
        </div>

        {}
        <div className="logo">
          Ezeiiy Store
        </div>

        <div className="header-right">
          {}
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            Home
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('login'); }}>Login</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('contact'); }}>Contact</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('cart'); }}>
            Cart {cartItemsCount > 0 && `(${cartItemsCount})`}
          </a>
        </div>
      </header>

      {}
      <nav className="bottom-nav">
        <div className="bottom-nav-item" onClick={() => setPage('home')}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          <span>Home</span>
        </div>
        
        <div className="bottom-nav-item" onClick={() => setPage('login')}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Account</span>
        </div>

        <div className="bottom-nav-item" onClick={() => setPage('cart')} style={{ position: 'relative' }}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          {cartItemsCount > 0 && <span className="cart-badge-bottom">{cartItemsCount}</span>}
          <span>Cart</span>
        </div>

        <div className="bottom-nav-item" onClick={() => setPage('contact')}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>Contact</span>
        </div>
      </nav>

      {}
      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer'
          }}
          className="close-btn"
        >
          ×
        </button>

        <ul style={{
          listStyle: 'none',
          marginTop: '3rem',
          lineHeight: '3'
        }}>
          <li>
            <a href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage("home");
                setIsOpen(false);
              }}>
              Home
            </a>
          </li>

          <li><a href="#" onClick={(e) => { e.preventDefault(); setPage('login'); setIsOpen(false); }}>Login</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(false); }}>Register</a></li>

          <li>
            <a href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage("cart");
                setIsOpen(false);
              }}>
              Cart Items
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}