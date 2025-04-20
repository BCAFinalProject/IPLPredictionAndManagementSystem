import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, products } = location.state || { cart: {}, products: [] };

  // Get product details based on cart items
  const cartItems = Object.keys(cart).map((id) => {
    const product = products.find((p) => p.id === id);
    return { ...product, quantity: cart[id] };
  });

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle quantity change
  const updateQuantity = (product, amount) => {
    const newCart = { ...cart };
    if (newCart[product.id] + amount > 0 && product.stock >= amount) {
      newCart[product.id] += amount;
    } else {
      delete newCart[product.id]; // Remove item if quantity becomes zero
    }
    navigate("/cart", { state: { cart: newCart, products } });
  };

  // Navigate to Bill page with cart data
  const handleCheckout = () => {
    navigate("/bill", { state: { cartItems, totalPrice } });
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div className="cart-quantity-controls">
                    <button onClick={() => updateQuantity(item, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item, 1)} disabled={item.stock === 0}>+</button>
                  </div>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <h3>Total Price: ${totalPrice}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </>
      )}
      <button className="back-btn" onClick={() => navigate(-1)}>← Continue Shopping</button>
    </div>
  );
};

export default Cart;
