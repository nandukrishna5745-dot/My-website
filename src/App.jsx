import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import './App.css';
import Cart from './Cart';
import Login from './Login';
import Contact from './Contact';

const products = [
  { id: 1, name: "Minimal Chair", price: 3655, rating: 4.5, status: "IN STOCK", image: "https://plus.unsplash.com/premium_photo-1681558314333-fb036f1df542?q=80&w=1332&auto=format&fit=crop" },
  { id: 2, name: "Ceramic Vase", price: 990, rating: 4.8, status: "IN STOCK", image: "https://images.unsplash.com/photo-1643569556871-91ec60671ed7?w=600&auto=format&fit=crop&q=60" },
  { id: 3, name: "Desk lamp", price: 560, rating: 4.2, status: "OUT OF STOCK", image: "https://plus.unsplash.com/premium_photo-1681412205156-bb506a4ea970?q=80&w=1170&auto=format&fit=crop" },
  { id: 4, name: "Oak Desk", price: 7948, rating: 4.9, status: "IN STOCK", image: "https://images.unsplash.com/photo-1723258343001-df08746b15de?q=80&w=687&auto=format&fit=crop" },
  { id: 5, name: "Wall Decor", price: 2360, rating: 4.0, status: "IN STOCK", image: "https://plus.unsplash.com/premium_photo-1681810782651-e5baca274a6a?q=80&w=703&auto=format&fit=crop" },
  { id: 6, name: "Stripped Pillows [Set of 5]", price: 880, rating: 4.3, status: "OUT OF STOCK", image: "https://plus.unsplash.com/premium_photo-1763466939994-be797ca6126c?q=80&w=687&auto=format&fit=crop" },
  { id: 7, name: "Minimal flower pot", price: 700, rating: 3.9, status: "IN STOCK", image: "https://plus.unsplash.com/premium_photo-1677178628367-9469dff27f20?q=80&w=687&auto=format&fit=crop" },
  { id: 8, name: "Wall Mirror", price: 3000, rating: 4.7, status: "IN STOCK", image: "https://images.unsplash.com/photo-1675807526240-fb2e22e39048?q=80&w=687&auto=format&fit=crop" },
  { id: 9, name: "Pot", price: 460, rating: 3.1, status: "IN STOCK", image: "https://plus.unsplash.com/premium_photo-1764254017283-aaa56ffd7e67?q=80&w=687&auto=format&fit=crop" },
  { id: 10, name: "Mug [Set of 3]", price: 300, rating: 5.0, status: "IN STOCK", image: "https://plus.unsplash.com/premium_photo-1719609141098-44dc2d2ae2de?q=80&w=1106&auto=format&fit=crop" },
  { id: 11, name: "Wall Decor", price: 2200, rating: 4.2, status: "IN STOCK", image: "https://plus.unsplash.com/premium_photo-1705262413411-5e623427f90a?q=80&w=1041&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, name: "Mushroom Lamps", price: 1100, rating: 4.0, status: "IN STOCK", image: "https://images.unsplash.com/photo-1759199112433-524fbd7a4fa4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 13, name: "Weighted Cotton Throws", price: 4600, rating: 3.8, status: "IN STOCK", image: "https://images.unsplash.com/photo-1721738854083-ae5d99630566?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { 
  id: 13, 
  name: "Checkered Rug", 
  price: 870 , 
  rating: 3.9, 
  status: "IN STOCK", 
  image: "https://images.unsplash.com/photo-1663588772844-060a84940028?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
}
];

const ProductCard = ({ product, addToCart, cartItems, index }) => {
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div 
      className="product-card fade-in-up" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <h3 className="product-title">{product.name}</h3>
      <div className="rating">★ {product.rating}</div>
      <div className="price">₹{product.price}</div>
      <div className={`status ${product.status === "OUT OF STOCK" ? "out-of-stock" : "in-stock"}`}>
        {product.status === "OUT OF STOCK" ? "○ OUT OF STOCK" : "● IN STOCK"}
      </div>
      
      <button
        className={`add-to-cart-btn ${isInCart ? "in-cart-active" : ""}`}
        disabled={product.status === "OUT OF STOCK"}
        onClick={() => addToCart(product)}
      >
        {isInCart ? (
          <span className="btn-content">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><polyline points="20 6 9 17 4 12"></polyline></svg>
            In Cart
          </span>
        ) : "Add to Cart"}
      </button>
    </div>
  );
};

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null); 
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChangingPage, setIsChangingPage] = useState(false);

  const handlePageChange = (newPage) => {
    setIsLoading(true);
    setIsChangingPage(true);
    
    setTimeout(() => {
      setPage(newPage);
      setTimeout(() => {
        setIsLoading(false);
        setIsChangingPage(false);
      }, 600);
    }, 400); 
  };

  const addToCart = (product) => {
    setIsLoading(true);
    setTimeout(() => {
      const exists = cartItems.find(item => item.id === product.id);
      if (exists) {
        setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
      setIsLoading(false);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 1500);
    }, 400);
  };

  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="app-container" style={{ width: "100%", backgroundColor: "#fffbf4", minHeight: "100vh" }}>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pageReveal {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .page-content {
          transition: opacity 0.5s ease, transform 0.5s ease;
          opacity: 1;
        }
        .page-hidden {
          opacity: 0;
          transform: translateY(10px);
        }
        .page-reveal {
          animation: pageReveal 0.8s cubic-bezier(0.2, 1, 0.2, 1) forwards;
        }

        .product-card {
          transition: transform 0.5s cubic-bezier(0.2, 1, 0.2, 1), box-shadow 0.5s ease;
        }
        .product-card:hover {
          transform: translateY(-8px);
        }
        
        .add-to-cart-btn {
          width: 100%;
          padding: 14px;
          background: #000;
          color: #fff;
          border: 1.5px solid #000;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 15px;
        }

        .add-to-cart-btn:hover {
          background: #333;
          border-color: #333;
        }

        .add-to-cart-btn.in-cart-active {
          background: transparent;
          color: #7a7a7a;
          border: 1.5px solid #d1d1d1;
          cursor: default;
        }

        .btn-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-container {
          overflow: hidden;
          border-radius: 12px;
        }
        .image-container img {
          transition: transform 0.8s cubic-bezier(0.2, 1, 0.2, 1);
        }
        .product-card:hover .image-container img {
          transform: scale(1.05);
        }
        
        .loading-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(255, 251, 244, 0.6);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
        }

        .spinner {
          width: 35px;
          height: 35px;
          border: 2px solid rgba(0, 0, 0, 0.05);
          border-top: 2px solid #000;
          border-radius: 50%;
          animation: spin 0.9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          transition: all 0.4s ease;
          letter-spacing: 0.5px;
          position: relative;
        }
        .nav-item:hover {
          opacity: 0.5;
        }

        .cart-badge-desktop {
          background: #000;
          color: #fff;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 10px;
          margin-left: -4px;
        }

        .mobile-bottom-nav { 
          display: none; 
        }

        @media (max-width: 768px) {
          .mobile-bottom-nav { 
            display: flex; 
            position: fixed; 
            bottom: 20px; 
            left: 50%;
            transform: translateX(-50%);
            width: 90%; 
            max-width: 420px;
            background: rgba(255, 255, 255, 0.75); 
            backdrop-filter: blur(18px); 
            -webkit-backdrop-filter: blur(18px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            padding: 12px 0; 
            justify-content: space-around; 
            border-radius: 28px; 
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
            z-index: 9999; 
          }
          .mobile-nav-item { 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            font-size: 0.65rem; 
            cursor: pointer; 
            color: #444;
            transition: all 0.3s ease;
            gap: 4px;
          }
          .mobile-nav-item.active { color: #000; font-weight: 700; }
          .cart-badge-mobile { 
            position: absolute; 
            top: -4px; 
            right: -6px; 
            background: #000; 
            color: #fff; 
            font-size: 9px; 
            padding: 2px 6px; 
            border-radius: 12px;
          }
        }
      `}</style>

      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      {showPopup && <div className="toast-popup">Added to Cart ✔</div>}

      <header className="header">
        <div className="header-left">
           <span className="nav-item" onClick={() => handlePageChange("home")}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </span>
        </div>
        
        <h1 className="logo" style={{cursor: 'pointer', pointerEvents: 'auto'}} onClick={() => handlePageChange("home")}>
          Ezeiiy Store
        </h1>

        <div className="header-right">
          {/* LOGIN ICON FOR DESKTOP */}
          {user ? (
            <span className="nav-item" onClick={() => { setUser(null); handlePageChange("home"); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>Logout</span>
            </span>
          ) : (
            <span className={`nav-item ${page === "login" ? "active" : ""}`} onClick={() => handlePageChange("login")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Login</span>
            </span>
          )}

          {/* CONTACT LINK */}
          <span className="nav-item" onClick={() => handlePageChange("contact")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Contact</span>
          </span>

          {/* CART ICON FOR DESKTOP */}
          <span className={`nav-item ${page === "cart" ? "active" : ""}`} onClick={() => handlePageChange("cart")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span>Cart</span>
            {cartItems.length > 0 && <span className="cart-badge-desktop">{cartItems.length}</span>}
          </span>
        </div>
      </header>

      <div className={`page-content ${isChangingPage ? 'page-hidden' : 'page-reveal'}`}>
        {page === "home" && (
          <main className="product-grid">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                cartItems={cartItems}
                index={index}
              />
            ))}
          </main>
        )}

        {page === "cart" && <Cart cartItems={cartItems} removeItem={removeItem} addToCart={addToCart} decreaseQty={decreaseQty} setPage={handlePageChange} />}
        {page === "login" && <Login onLoginSuccess={(u) => { setUser(u); handlePageChange("home"); }} />}
        {page === "contact" && <Contact />}
      </div>

      <Analytics />

      <nav className="mobile-bottom-nav">
        <div className={`mobile-nav-item ${page === "home" ? "active" : ""}`} onClick={() => handlePageChange("home")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          <span>Home</span>
        </div>

        {user ? (
          <div className="mobile-nav-item" onClick={() => { setUser(null); handlePageChange("home"); }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            <span>Logout</span>
          </div>
        ) : (
          <div className={`mobile-nav-item ${page === "login" ? "active" : ""}`} onClick={() => handlePageChange("login")}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>Login</span>
          </div>
        )}

        <div className={`mobile-nav-item ${page === "cart" ? "active" : ""}`} onClick={() => handlePageChange("cart")} style={{ position: "relative" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          {cartItems.length > 0 && <span className="cart-badge-mobile">{cartItems.length}</span>}
          <span>Cart</span>
        </div>
      </nav>
    </div>
  );
}

export default App;