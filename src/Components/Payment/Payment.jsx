import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalAmount, cartItems } = location.state || { totalAmount: 0, cartItems: [] };

  // Get logged-in user from local storage
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Cardholder name is required.";
    if (!/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = "Card number must be 16 digits.";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) newErrors.expiryDate = "Format: MM/YY.";
    if (!/^\d{3}$/.test(formData.cvv)) newErrors.cvv = "CVV must be 3 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const paymentId = `PAY-${Math.random().toString(36).substring(7)}`;
        const status = "Success";
        const username = loggedInUser?.username || "Guest"; // ✅ Ensure username is included
  
        const response = await fetch("http://localhost:3000/store-receipt", { 
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: loggedInUser?.id,
            username,
            payment_id: paymentId,
            amount: totalAmount,
            status,
            cartItems,
          }),
        });
  
        const data = await response.json();
        if (response.ok) {
          alert("Payment successful! Receipt stored.");
          console.log("Cart Items from localStorage:", JSON.parse(localStorage.getItem("cartItems") || "[]"));

          navigate("/receipt", { state: { totalAmount, cartItems, paymentId, username } }); // ✅ Pass `username`
        } else {
          alert("Error processing payment: " + data.error);
        }
      } catch (err) {
        console.error(err);
        alert("Server error!");
      }
    }
  };
  

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <label>Cardholder Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter cardholder name" />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Card Number</label>
        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Enter 16-digit card number" maxLength="16" />
        {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}

        <label>Expiry Date (MM/YY)</label>
        <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="MM/YY" maxLength="5" />
        {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}

        <label>CVV</label>
        <input type="password" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="CVV" maxLength="3" />
        {errors.cvv && <span className="error">{errors.cvv}</span>}

        <button type="submit" className="pay-btn">Pay ₹{totalAmount}</button>
      </form>
    </div>
  );
};

export default Payment;
