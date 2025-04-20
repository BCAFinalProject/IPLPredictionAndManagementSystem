import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Receipt.css";

const Receipt = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalAmount = 0, cartItems = [], paymentId = "" } = location.state || {};

  

  // Get logged-in user from local storage
  const loggedInUser = JSON.parse(localStorage.getItem("user")) || { username: "Guest" };

  return (
    <div className="receipt-container">
      <h2>Payment Receipt</h2>
      <div className="receipt-details">
        <h3>Thank you, {loggedInUser.username}!</h3>
        <p>Your payment was successful.</p>
        <p><strong>Payment ID:</strong> {paymentId || "N/A"}</p>

        <h4>Purchased Items:</h4>
        {cartItems.length > 0 ? (
          <ul className="receipt-items">
            {cartItems.map((item) => (
              <li key={item.id} className="receipt-item">
                <span>{item.name}</span> - <span>{item.quantity} x ₹{item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items purchased.</p>
        )}

        <h3 className="receipt-total">Total Paid: ₹{totalAmount}</h3>
      </div>

      <button className="home-btn" onClick={() => navigate("/home")}>
        Return to Home
      </button>
    </div>
  );
};

export default Receipt;
