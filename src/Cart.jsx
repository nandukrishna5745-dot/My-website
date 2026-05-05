import React from "react";

function Cart({ cartItems, removeItem, addToCart, decreaseQty, setPage }) {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px 40px 140px 40px", maxWidth: "900px", margin: "0 auto" }}>
      
      <style>{`
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
          background: #fff;
          border-radius: 15px;
          margin-bottom: 15px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          animation: slideIn 0.4s ease forwards;
        }

        .continue-shopping-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: rgba(0, 0, 0, 0.05);
          color: #000;
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

        .continue-shopping-btn:hover .arrow-icon {
          animation: arrowMove 0.8s infinite;
        }

        .checkout-footer {
          position: fixed;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 650px;
          height: 90px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          z-index: 2000;
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
        }

        .checkout-btn {
          background: #000;
          color: #fff;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .checkout-btn:hover {
          transform: scale(1.03);
          background: #333;
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* Only show if cart is NOT empty */}
      {cartItems.length > 0 && (
        <div className="continue-shopping-btn" onClick={() => setPage("home")}>
          <span className="arrow-icon">←</span> Continue Shopping
        </div>
      )}
      
      <h2 style={{ marginBottom: "30px", fontWeight: "700", fontSize: "2rem" }}>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "100px 0" }}>
          <p style={{ color: "#888", fontSize: "1.2rem", marginBottom: "30px" }}>Your cart is looking empty.</p>
          <button 
            onClick={() => setPage("home")} 
            className="checkout-btn" 
            style={{ padding: "18px 45px", fontSize: "1.1rem" }}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="cart-container">
          {cartItems.map((item, index) => (
            <div className="cart-list-item" key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
              
              <div style={{ width: "130px", height: "130px", flexShrink: 0 }}>
                <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 5px 0", fontSize: "1.2rem" }}>{item.name}</h3>
                <div style={{ fontSize: "1.3rem", fontWeight: "700" }}>₹{item.price}</div>
                <div style={{ color: "#27ae60", fontSize: "0.85rem", marginTop: "5px", fontWeight: "600" }}>✓ In Stock</div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "15px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", background: "#f8f8f8", padding: "8px 18px", borderRadius: "50px", border: "1px solid #eee" }}>
                  <button onClick={() => decreaseQty(item.id)} style={{ border: "none", background: "none", cursor: "pointer", fontSize: "1.2rem", fontWeight: "bold" }}>−</button>
                  <span style={{ fontWeight: "700", minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
                  <button onClick={() => addToCart(item)} style={{ border: "none", background: "none", cursor: "pointer", fontSize: "1.2rem", fontWeight: "bold" }}>+</button>
                </div>
                
                <button 
                  onClick={() => removeItem(item.id)}
                  style={{ border: "none", background: "none", color: "#888", cursor: "pointer", fontSize: "0.8rem", textDecoration: "underline" }}
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {}
      {cartItems.length > 0 && (
        <div className="checkout-footer">
          <div>
            <div style={{ fontSize: "0.75rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>Subtotal</div>
            <div style={{ fontSize: "1.6rem", fontWeight: "900", letterSpacing: "-0.5px" }}>₹{total}</div>
          </div>
          
          <button className="checkout-btn">
            Checkout Now —
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;