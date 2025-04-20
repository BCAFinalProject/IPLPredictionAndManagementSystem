import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";

import "./Merchandise.css";

import logoImg from "../Images/ipl1.jpg"; // Update the path accordingly


const teams = [
  { id: 1, name: "Chennai Super Kings", short: "CSK", color: "#FFD700" },
  { id: 2, name: "Mumbai Indians", short: "MI", color: "#004BA0" },
  { id: 3, name: "Royal Challengers Bangalore", short: "RCB", color: "#DA291C" },
  { id: 4, name: "Rajasthan Royals", short: "RR", color: "#FF007F" },
  { id: 5, name: "Kolkata Knight Riders", short: "KKR", color: "#3A225D" },
  { id: 6, name: "Delhi Capitals", short: "DC", color: "#17449B" },
  { id: 7, name: "Punjab Kings", short: "PBKS", color: "#D71920" },
  { id: 8, name: "Sunrisers Hyderabad", short: "SRH", color: "#FB6404" },
  { id: 9, name: "Gujarat Titans", short: "GT", color: "#0A1D56" },
  { id: 10, name: "Lucknow Super Giants", short: "LSG", color: "#2C5F2D" },
];

const generateProducts = () => {
  const productNames = ["Jersey", "Cap", "Mug", "Scarf", "Bag", "Towel", "Wristband", "Poster", "Bottle", "Shoes"];
  let products = [];

  teams.forEach((team) => {
    for (let i = 1; i <= 20; i++) {
      let randomIndex = Math.floor(Math.random() * productNames.length);
      let imageIndex = Math.floor(Math.random() * 5); // Adjust based on available images per team

      const imagePath = `/images/${team.short.toLowerCase()}-${imageIndex}.jpg`;

      products.push({
        id: `${team.short}-${i}`,
        team: team.short,
        name: `${team.short} ${productNames[randomIndex]}`,
        price: Math.floor(Math.random() * 1000) + 300,
        stock: Math.floor(Math.random() * 20) + 1,
        img: imagePath,
      });
    }
  });
  return products;
};


const Merchandise = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(generateProducts());
  const [cart, setCart] = useState({});
  const [favorites, setFavorites] = useState(new Set());

  const addToCart = (product) => {
    if (product.stock > 0) {
      setCart((prevCart) => ({
        ...prevCart,
        [product.id]: (prevCart[product.id] || 0) + 1,
      }));

      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, stock: p.stock - 1 } : p
        )
      );
    }
  };

  const removeFromCart = (product) => {
    if (cart[product.id] > 0) {
      setCart((prevCart) => {
        const newCart = { ...prevCart };
        newCart[product.id] -= 1;
        if (newCart[product.id] === 0) delete newCart[product.id];
        return newCart;
      });

      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, stock: p.stock + 1 } : p
        )
      );
    }
  };

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      newFavorites.has(productId) ? newFavorites.delete(productId) : newFavorites.add(productId);
      return newFavorites;
    });
  };

  const buyNow = (product) => {
    const quantity = cart[product.id] || 1;
    navigate("/bill", { state: { product, quantity } });
  };

  const scrollToTeam = (teamShort) => {
    const section = document.getElementById(teamShort);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="merchandise-container">
       {/* Header Section */}
       <header className="home-header">
        <div className="home-logo">
          <img src={logoImg} alt="Logo" className="home-logo-img" />
        </div>
        <nav className="home-nav">
          <Link to="/home" className="home-nav-link">Home</Link>
          <div className="home-nav-link dropdown">
            <span className="dropbtn">Stats</span>
            <div className="dropdown-content">
              <Link to="/overallStats">Overall</Link>
              <Link to="/headtohead">Head to Head</Link>
            </div>
          </div>
          <Link to="/merchandise" className="home-nav-link">Merchandise</Link>
          <Link to="/achievements" className="home-nav-link">Achievements</Link>
          <Link to="/team" className="home-nav-link">Teams</Link>
        </nav>
      </header>

      {/* View Cart Button - Fixed at the top */}
      <div className="merch-cart-header">
        <button
          className="view-cart-btn"
          onClick={() => navigate("/cart", { state: { cart, products } })}
        >
          🛒 View Cart ({Object.keys(cart).length} items)
        </button>
      </div>

      {/* Horizontal Team Navigation */}
      <div className="merch-team-buttons">
        {teams.map((team) => (
          <button
            key={team.id}
            onClick={() => scrollToTeam(team.short)}
            style={{ backgroundColor: team.color }}
          >
            {team.short}
          </button>
        ))}
      </div>

      {/* Team Merchandise Sections */}
      {teams.map((team) => (
        <div key={team.id} id={team.short} className="merch-team-section">
          <h2 style={{ color: team.color }}>{team.name} Merchandise</h2>
          <div className="merch-product-list">
            {products
              .filter((p) => p.team === team.short)
              .map((product) => (
                <div key={product.id} className="merch-product-card">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="merch-product-img"
                  />
                  <h3>{product.name}</h3>
                  <p>Price: ₹{product.price}</p>
                  <p className="merch-stock">Stock: {product.stock}</p>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`merch-fav-btn ${favorites.has(product.id) ? "active" : ""}`}
                  >
                    {favorites.has(product.id) ? "❤️ Favorited" : "🤍 Favorite"}
                  </button>

                  {/* Quantity Control & Add to Cart */}
                  {cart[product.id] ? (
                    <div className="merch-quantity-controls">
                      <button onClick={() => removeFromCart(product)}>-</button>
                      <span>{cart[product.id]}</span>
                      <button onClick={() => addToCart(product)} disabled={product.stock === 0}>
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      disabled={product.stock === 0}
                      className="merch-cart-btn"
                    >
                      {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                    </button>
                  )}

                  {/* Buy Now Button */}
                  <button className="merch-buy-btn" onClick={() => buyNow(product)}>
                    Buy Now
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Merchandise;
