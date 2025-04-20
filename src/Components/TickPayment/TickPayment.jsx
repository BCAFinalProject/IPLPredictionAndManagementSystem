import React, { useState } from "react";
import "./TickPayment.css";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TickPayment= () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get match details from the location state
  const state = location.state || {};
  const match = state.match || {};
  const ticketType = state.ticketType || "";
  const selectedSeats = state.selectedSeats || [];
  const numberOfTickets = state.numberOfTickets || 0;
  const totalPrice = state.totalPrice || 0;

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [isPaid, setIsPaid] = useState(false);
  const [bill, setBill] = useState(null); // Store the generated bill

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Cardholder name is required.";
    }

    if (!/^[0-9]{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format.";
    }

    if (!/^[0-9]{3}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV must be 3 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTickPayment= async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    Swal.fire({
      title: "Confirm Payment",
      text: "Are you sure you want to proceed with the payment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Pay Now!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch("http://localhost:3000/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              match: `${match.team1} vs ${match.team2}`,
              date: match.date || "N/A",
              time: match.time || "N/A",
              venue: match.venue || "N/A",
              ticketType,
              numberOfTickets,
              selectedSeats,
              totalPrice,
              name: formData.name,
              lastFourDigits: formData.cardNumber.slice(-4), // Store only last 4 digits for security
            }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          if (data.success) {
            setIsPaid(true);
            setBill(data.data); // Store the generated bill from the response
            Swal.fire("Payment Successful!", "Your tickets have been booked.", "success");
          } else {
            throw new Error("Payment processing failed.");
          }
        } catch (error) {
          console.error("Payment error:", error);
          Swal.fire("Payment Failed", "Something went wrong! Please try again.", "error");
        }
      }
    });
  };

  return (
    <div className="tickpayment-page">
      <header className="tickpayment-header">
        <h1>Ticket Payment</h1>
      </header>

      <div className="tickpayment-container">
        {!isPaid ? (
          <>
            <div className="ticket-summary">
              <h2>Booking Details 🎟️</h2>
              <p><strong>Match:</strong> {match.team1} vs {match.team2}</p>
              <p><strong>Date:</strong> {match.date || "N/A"}</p>
              <p><strong>Time:</strong> {match.time || "N/A"}</p>
              <p><strong>Venue:</strong> {match.venue || "N/A"}</p>
              <p><strong>Ticket Type:</strong> {ticketType}</p>
              <p><strong>Number of Tickets:</strong> {numberOfTickets}</p>
              <p><strong>Selected Seats:</strong> {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
              <h2>Total Price: ₹{totalPrice}</h2>
            </div>

            <form className="tickpayment-form" onSubmit={handleTickPayment}>
              <div className={`form-field ${errors.name ? "error-border" : ""}`}>
                <label>Cardholder Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>

              <div className={`form-field ${errors.cardNumber ? "error-border" : ""}`}>
                <label>Card Number</label>
                <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} maxLength="16" />
                {errors.cardNumber && <p className="error-text">{errors.cardNumber}</p>}
              </div>

              <div className="form-row">
                <div className={`form-field ${errors.expiryDate ? "error-border" : ""}`}>
                  <label>Expiry Date (MM/YY)</label>
                  <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} placeholder="MM/YY" />
                  {errors.expiryDate && <p className="error-text">{errors.expiryDate}</p>}
                </div>

                <div className={`form-field ${errors.cvv ? "error-border" : ""}`}>
                  <label>CVV</label>
                  <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} maxLength="3" />
                  {errors.cvv && <p className="error-text">{errors.cvv}</p>}
                </div>
              </div>

              <button className="confirm-tickpayment-btn" type="submit">
                Pay ₹{totalPrice}
              </button>
            </form>
          </>
        ) : (
          <div className="confirmation">
            <h2>🎉 Payment Successful!</h2>
            <h3>Match: {bill?.match}</h3>
            <h3>Venue: {bill?.venue}</h3>
            <h3>Ticket Type: {bill?.ticket_type}</h3>
            <h3>Seats: {bill?.selected_seats}</h3>
            <h3>Number of Tickets: {bill?.number_of_tickets}</h3>
            <h2>Total Amount Paid: ₹{bill?.total_price}</h2>
            <p><strong>Paid Using:</strong> **** **** **** {bill?.last_four_digits}</p>

            <button className="back-btn" onClick={() => navigate("/home")}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TickPayment;

