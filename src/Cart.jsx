import React from "react";

function Cart({ cartItems, removeItem, addToCart, decreaseQty, setPage }) {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page-wrapper">
      
      <style>{`
        .cart-page-wrapper {
          padding: 40px 40px 140px 40px;
          max-width: 900px;
          margin: 0 auto;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes arrowMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-5px); }
        }

        .cart-list-item {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 20px;
          background: var(--card-bg, #fff);
          border-radius: 15px;
          margin-bottom: 15px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          animation: slideIn 0.4s ease forwards;
          border: 1px solid rgba(0,0,0,0.02);
        }

        .continue-shopping-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: rgba(128, 128, 128, 0.1);
          color: inherit;
          border-radius: 30px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          margin-bottom: 30px;
          font-size: 0.9rem;
        }

        .continue-shopping-btn:hover {
          background: #000;
          color: #fff;
          transform: translateX(-5px);
        }

        .dark-mode .continue-shopping-btn:hover {
          background: #fff;
          color: #000;
        }

        .continue-shopping-btn:hover .arrow-icon {
          animation: arrowMove 0.8s infinite;
        }

        .checkout-footer {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 650px;
          height: 100px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 45px;
          z-index: 2000;
          box-shadow: 0 15px 45px rgba(0,0,0,0.15);
          transition: all 0.4s ease;
        }

        .dark-mode .checkout-footer {
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 45px rgba(0,0,0,0.4);
        }

        .checkout-btn {
          background: var(--btn-bg, #000);
          color: var(--btn-text, #fff);
          padding: 16px 38px;
          border-radius: 50px;
          border: none;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .dark-mode .checkout-btn {
          background: #fff;
          color: #000;
        }

        .qty-picker {
          display: flex; 
          align-items: center; 
          gap: 15px; 
          background: rgba(128, 128, 128, 0.08); 
          padding: 8px 18px; 
          border-radius: 50px; 
          border: 1px solid rgba(128, 128, 128, 0.1);
        }

        .dark-mode .cart-list-item {
          background: #161616;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 600px) {
          .cart-page-wrapper {
            padding: 20px 15px 180px 15px;
          }
          .cart-list-item {
            gap: 15px;
            padding: 15px;
          }
          .cart-item-image-container {
            width: 80px !important;
            height: 80px !important;
          }
          .checkout-footer {
            height: 85px;
            padding: 0 25px;
            border-radius: 35px;
            bottom: 110px;
            width: 92%;
          }
          .checkout-btn {
            padding: 12px 24px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {cartItems.length > 0 && (
        <div className="continue-shopping-btn" onClick={() => setPage("home")}>
          <span className="arrow-icon">←</span> Continue Shopping ?
        </div>
      )}
      
      <h2 style={{ marginBottom: "30px", fontWeight: "700", fontSize: "2rem" }}>Your Cart :</h2>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "100px 0" }}>
          <p style={{ opacity: 0.5, fontSize: "1.2rem", marginBottom: "30px" }}>Nothin in here, its kinda dry as hell...</p>
          <button 
            onClick={() => setPage("home")} 
            className="checkout-btn" 
            style={{ padding: "18px 45px", fontSize: "1.1rem" }}
          >
            Start Shopping!
          </button>
        </div>
      ) : (
        <div className="cart-container">
          {cartItems.map((item, index) => (
            <div className="cart-list-item" key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
              
              <div className="cart-item-image-container" style={{ width: "130px", height: "130px", flexShrink: 0 }}>
                <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 5px 0", fontSize: "0.95rem", fontWeight: "600" }}>{item.name}</h3>
                <div className="subtotal-amount" style={{ fontSize: "1.2rem", fontWeight: "700" }}>₹{item.price}</div>
                <div style={{ color: "#27ae60", fontSize: "0.7rem", marginTop: "5px", fontWeight: "600" }}>✓ In Stock</div>
              </div>

              <div className="cart-controls-container" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "15px" }}>
                <div className="qty-picker">
                  <button onClick={() => decreaseQty(item.id)} style={{ border: "none", background: "none", cursor: "pointer", fontSize: "1.2rem", fontWeight: "bold", color: "inherit" }}>−</button>
                  <span style={{ fontWeight: "700", minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
                  <button onClick={() => addToCart(item)} style={{ border: "none", background: "none", cursor: "pointer", fontSize: "1.2rem", fontWeight: "bold", color: "inherit" }}>+</button>
                </div>
                
                <button 
                  onClick={() => removeItem(item.id)}
                  style={{ border: "none", background: "none", color: "inherit", opacity: 0.5, cursor: "pointer", fontSize: "0.7rem", textDecoration: "underline" }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="checkout-footer">
          <div>
            <div style={{ fontSize: "0.65rem", opacity: 0.6, textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700" }}>Subtotal</div>
            <div className="subtotal-amount" style={{ fontSize: "1.4rem", fontWeight: "900", letterSpacing: "-0.5px" }}>₹{total}</div>
          </div>
          
          <button className="checkout-btn">
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;