import React from 'react';

export default function ProductCard({ item, addToCart }) {
  return (
    <div className="card">
      <div style={{ height: '200px', background: '#f9f9f9', marginBottom: '1rem' }} />

      <h3>{item.name}</h3>
      <div className="rating">★ {item.rating}</div>
      <p className="price">{item.price}</p>

      <p className={`status ${item.available ? '' : 'dim'}`}>
        {item.available ? "● In Stock" : "○ Out of Stock"}
      </p>

      <button
        onClick={() => addToCart(item)}
        disabled={!item.available}
        style={{
          width: '100%',
          marginTop: '1rem',
          padding: '0.5rem',
          background: '#1a1a1a',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Add to Cart ●
      </button>
    </div>
  );
}