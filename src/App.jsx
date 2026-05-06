import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import './App.css';
import Cart from './Cart';
import Login from './Login';
import Contact from './Contact';
import Signup from './Signup'; 
import myLogo from './assets/logo.png'; 

const products = [
  {
    id: 1,
    name: "Minimal Chair",
    price: 3655,
    rating: 4.5,
    status: "IN STOCK",
    image: "https://plus.unsplash.com/premium_photo-1681558314333-fb036f1df542?q=80&w=1332&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ceramic Vase",
    price: 990,
    rating: 4.8,
    status: "IN STOCK",
    image: "https://images.unsplash.com/photo-1643569556871-91ec60671ed7?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Desk lamp",
    price: 560,
    rating: 4.2,
    status: "OUT OF STOCK",
    image: "https://plus.unsplash.com/premium_photo-1681412205156-bb506a4ea970?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Oak Desk",
    price: 7948,
    rating: 4.9,
    status: "IN STOCK",
    image: "https://images.unsplash.com/photo-1723258343001-df08746b15de?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Wall Decor",
    price: 2360,
    rating: 4.0,
    status: "IN STOCK",
    image: "https://plus.unsplash.com/premium_photo-1681810782651-e5baca274a6a?q=80&w=703&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Stripped Pillows [Set of 5]",
    price: 880,
    rating: 4.3,
    status: "OUT OF STOCK",
    image: "https://plus.unsplash.com/premium_photo-1763466939994-be797ca6126c?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Minimal flower pot",
    price: 700,
    rating: 3.9,
    status: "IN STOCK",
    image: "https://plus.unsplash.com/premium_photo-1677178628367-9469dff27f20?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Wall Mirror",
    price: 3000,
    rating: 4.7,
    status: "IN STOCK",
    image: "https://images.unsplash.com/photo-1675807526240-fb2e22e39048?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Pot",
    price: 460,
    rating: 3.1,
    status: "IN STOCK",
    image: "https://plus.unsplash.com/premium_photo-1764254017283-aaa56ffd7e67?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Mug [Set of 3]",
    price: 300,
    rating: 5.0,
    status: "IN STOCK",
    image: "https://plus.unsplash.com/premium_photo-1719609141098-44dc2d2ae2de?q=80&w=1106&auto=format&fit=crop"
  },
  {
    id: 11,
    name: "Wall Decor Premium",
    price: 2200,
    rating: 4.2,
    status: "IN STOCK",
    image: "https://plus.unsplash.com/premium_photo-1705262413411-5e623427f90a?q=80&w=1041&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Mushroom Lamps",
    price: 1100,
    rating: 4.0,
    status: "IN STOCK",
    image: "https://images.unsplash.com/photo-1759199112433-524fbd7a4fa4?q=80&w=1074&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "Weighted Cotton Throws",
    price: 4600,
    rating: 3.8,
    status: "IN STOCK",
    image: "https://images.unsplash.com/photo-1721738854083-ae5d99630566?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "Checkered Rug",
    price: 870,
    rating: 3.9,
    status: "IN STOCK",
    image: "https://images.unsplash.com/photo-1663588772844-060a84940028?q=80&w=1073&auto=format&fit=crop"
  }
];

const ProductCard = ({ product, addToCart, cartItems, index }) => {
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div 
      className="product-card fade-in-up" 
      style={{ 
        animationDelay: `${(index % 12) * 0.05}s`,
        transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.2, 1), box-shadow 0.5s ease'
      }}
    >
      <div className="image-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      <h3 className="product-title" style={{ marginTop: '15px', fontSize: '1.1rem', fontWeight: '600' }}>
        {product.name}
      </h3>
      <div className="rating" style={{ color: '#ffb400', margin: '5px 0' }}>
        ★ {product.rating}
      </div>
      <div className="price" style={{ fontWeight: '700', fontSize: '1.2rem' }}>
        ₹{product.price}
      </div>
      <div className={`status ${product.status === "OUT OF STOCK" ? "out-of-stock" : "in-stock"}`}
           style={{ fontSize: '0.8rem', margin: '10px 0', color: product.status === "OUT OF STOCK" ? '#ff4d4d' : '#2ecc71' }}>
        {product.status === "OUT OF STOCK" ? "○ OUT OF STOCK" : "● IN STOCK"}
      </div>
    
      <button
        className={`add-to-cart-btn ${isInCart ? "in-cart-active" : ""}`}
        disabled={product.status === "OUT OF STOCK"}
        onClick={() => addToCart(product)}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          cursor: product.status === "OUT OF STOCK" ? 'not-allowed' : 'pointer',
          border: 'none',
          marginTop: '10px'
        }}
      >
        {isInCart ? (
          <span className="btn-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
  
  const [darkMode, setDarkMode] = useState(false);
  
  const [visibleProducts, setVisibleProducts] = useState(12); 
  const [isScrollingLoading, setIsScrollingLoading] = useState(false);

  // FIX FOR WHITE BACKGROUND ON MOBILE SCROLL/OVERSCROLL
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (page !== "home" || isScrollingLoading || visibleProducts >= products.length) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const currentScroll = window.innerHeight + document.documentElement.scrollTop;
      
      if (currentScroll >= scrollHeight - 250) {
        setIsScrollingLoading(true);
        
        setTimeout(() => {
          setVisibleProducts(prev => Math.min(prev + 12, products.length));
          setIsScrollingLoading(false);
        }, 1200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, isScrollingLoading, visibleProducts]);

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

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`} style={{ width: "100%", minHeight: "100vh", position: 'relative' }}>

      <style>{`
        /* ORIGINAL STYLES RESTORED */
        .app-container {
          font-family: 'Inter', -apple-system, sans-serif;
          transition: background-color 0.4s ease;
        }

        .light-mode {
          background-color: #fffbf4;
          color: #000000;
        }

        .dark-mode {
          background-color: #0a0a0a;
          color: #ffffff;
        }

        /* Ensure body background matches in dark mode to fix white bar issue */
        body.dark-mode {
          background-color: #0a0a0a !important;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5%;
          height: 90px;
          position: sticky;
          top: 0;
          z-index: 10000;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .light-mode .header {
          background-color: rgba(255, 251, 244, 0.8);
        }

        .dark-mode .header {
          background-color: rgba(10, 10, 10, 0.8);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          padding: 40px 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .product-card {
          border-radius: 16px;
          padding: 20px;
        }

        .light-mode .product-card {
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .dark-mode .product-card {
          background: #161616;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .light-mode .add-to-cart-btn {
          background: #000;
          color: #fff;
        }

        .dark-mode .add-to-cart-btn {
          background: #fff;
          color: #000;
        }

        .logo {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: -1px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          transition: opacity 0.3s ease;
        }

        .nav-item:hover {
          opacity: 0.6;
        }

        .cart-badge-desktop {
          background: #ff3e3e;
          color: white;
          border-radius: 50%;
          padding: 2px 6px;
          font-size: 10px;
          margin-left: 4px;
        }

        .mobile-bottom-nav {
          display: none;
        }

        /* LOADING ANIMATIONS */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes toastSlideUp {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }

        .loading-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 20000;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
        }

        .dark-mode .loading-overlay {
          background: rgba(0,0,0,0.8);
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(0,0,0,0.1);
          border-top-color: #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .dark-mode .spinner {
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: #fff;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .toast-popup {
          position: fixed;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%); /* Fix: Center alignment for PC */
          background: #000;
          color: #fff;
          padding: 12px 24px;
          border-radius: 30px;
          z-index: 15000;
          font-weight: 600;
          animation: toastSlideUp 0.4s ease forwards;
        }

        .dark-mode .toast-popup {
          background: #fff;
          color: #000;
        }

        @media (max-width: 768px) {
          .header-right { display: none; }
          
          /* Force 2 Columns on Phone */
          .product-grid {
            grid-template-columns: 1fr 1fr !important;
            padding: 20px 3%;
            gap: 15px;
          }

          .mobile-bottom-nav {
            display: flex;
            position: fixed;
            bottom: 25px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            height: 70px;
            border-radius: 35px;
            justify-content: space-around;
            align-items: center;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          .light-mode .mobile-bottom-nav {
            background: #ffffff;
            border: 1px solid rgba(0,0,0,0.05);
          }
          .dark-mode .mobile-bottom-nav {
            background: #1a1a1a;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .mobile-nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.7rem;
            gap: 4px;
          }
        }
      `}</style>

      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      {showPopup && (
        <div className="toast-popup">
          Successfully added to cart!
        </div>
      )}

      <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div className="header-logo-wrapper" style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
            <img src={myLogo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h1 className="logo" onClick={() => handlePageChange("home")} style={{ cursor: 'pointer' }}>
            Ezeiiy Store
          </h1>
        </div>

        <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          
          <div className="nav-item" onClick={toggleTheme}>
            {darkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
            <span>{darkMode ? "Light" : "Dark"}</span>
          </div>

          {user ? (
            <div className="nav-item" onClick={() => { setUser(null); handlePageChange("home"); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>Logout</span>
            </div>
          ) : (
            <div className="nav-item" onClick={() => handlePageChange("login")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Login</span>
            </div>
          )}

          <div className="nav-item" onClick={() => handlePageChange("contact")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Contact</span>
          </div>

          <div className="nav-item" onClick={() => handlePageChange("cart")} style={{ position: 'relative' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span>Cart</span>
            {cartItems.length > 0 && <span className="cart-badge-desktop">{cartItems.length}</span>}
          </div>
        </div>
      </header>

      <main className={`page-content ${isChangingPage ? 'fade-out' : 'fade-in'}`}>
        {page === "home" && (
          <div className="home-container">
            <div className="product-grid">
              {products.slice(0, visibleProducts).map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  cartItems={cartItems}
                  index={index}
                />
              ))}
            </div>
            
            {isScrollingLoading && visibleProducts < products.length && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px' }}>
                <div className="spinner"></div>
                <p style={{ marginTop: '15px', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.7rem' }}>Loading Products...</p>
              </div>
            )}
          </div>
        )}

        {page === "cart" && (
          <Cart 
            cartItems={cartItems} 
            removeItem={removeItem} 
            addToCart={addToCart} 
            decreaseQty={decreaseQty} 
            setPage={handlePageChange} 
          />
        )}

        {page === "login" && (
          <Login 
            onLoginSuccess={(u) => { setUser(u); handlePageChange("home"); }} 
            switchToSignup={() => handlePageChange("signup")} 
          />
        )}

        {page === "signup" && (
          <Signup 
            onSignupSuccess={(u) => { setUser(u); handlePageChange("home"); }} 
            switchToLogin={() => handlePageChange("login")} 
          />
        )}

        {page === "contact" && <Contact />}
      </main>

      <nav className="mobile-bottom-nav">
        <div className="mobile-nav-item" onClick={() => handlePageChange("home")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          <span>Home</span>
        </div>

        <div className="mobile-nav-item" onClick={toggleTheme}>
          {darkMode ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
          <span>Theme</span>
        </div>

        <div className="mobile-nav-item" onClick={() => handlePageChange("cart")} style={{ position: 'relative' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span>Cart</span>
          {cartItems.length > 0 && (
            <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: '#ff3e3e', color: '#fff', borderRadius: '50%', padding: '2px 6px', fontSize: '9px' }}>
              {cartItems.length}
            </span>
          )}
        </div>

        {user ? (
          <div className="mobile-nav-item" onClick={() => { setUser(null); handlePageChange("home"); }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            <span>Logout</span>
          </div>
        ) : (
          <div className="mobile-nav-item" onClick={() => handlePageChange("login")}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>User</span>
          </div>
        )}
      </nav>

      <Analytics />
    </div>
  );
}

export default App;