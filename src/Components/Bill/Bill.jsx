import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Bill.css";

const Bill = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  // ✅ Define state to store purchased items
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // ✅ Fetch logged-in user from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    setLoggedInUser(user);
  }, []);

  // ✅ Fetch purchase data
  useEffect(() => {
    if (!loggedInUser || !loggedInUser.id) {
      console.error("User is not logged in");
      return;
    }

    const fetchPurchases = async () => {
      try {
        const response = await fetch(`/api/purchases/${loggedInUser.id}`);
        if (!response.ok) throw new Error("Failed to fetch purchases");
        const data = await response.json();
        setPurchasedItems(data);
      } catch (error) {
        console.error("Error fetching purchases", error);
        setPurchasedItems([]); // Prevent infinite loading
      }
    };

    fetchPurchases();
  }, [loggedInUser]); // ✅ Runs when loggedInUser is updated

  return (
    <div className="bill-container">
      <h2>Final Bill</h2>
      {cartItems.length === 0 ? (
        <p className="empty-bill">No items in the bill.</p>
      ) : (
        <div className="bill-details">
          {cartItems.map((item) => (
            <div key={item.id} className="bill-item">
              <img src={item.img} alt={item.name} className="bill-item-img" />
              <div className="bill-item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price} x {item.quantity}</p>
                <p className="bill-item-total">₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <h3 className="total-bill">Grand Total: ₹{totalPrice}</h3>
          <button 
  className="confirm-btn" 
  onClick={() => navigate("/payment", { state: { totalAmount: totalPrice, cartItems } })} // ✅ Pass cartItems
>
  Proceed to Payment
</button>

        </div>
      )}
      <button className="back-btn" onClick={() => navigate("/")}>← Back to Home</button>
    </div>
  );
};

export default Bill;
