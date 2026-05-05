import React, { useState } from 'react';

export default function Navbar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eee'
      }}>
        <div
          onClick={() => setIsOpen(true)}
          style={{ cursor: 'pointer', fontSize: '1.5rem' }}
        >
          ☰
        </div>

        <h2 style={{ marginLeft: '2rem', letterSpacing: '2px' }}>
          Ezeiiy Store
        </h2>
      </nav>

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

          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>

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