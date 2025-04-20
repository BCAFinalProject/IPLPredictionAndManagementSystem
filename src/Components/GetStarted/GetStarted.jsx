import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";

// Importing images
import image1 from "../Images/get1.jpg";
import image2 from "../Images/get2.jpg";
import image3 from "../Images/get3.jpg";

const GetStarted = () => {
  const navigate = useNavigate();

  const [imageIndex, setImageIndex] = useState(0);
  const [buttonColor, setButtonColor] = useState({
    signup: "#650c0c",
    login: "#958220",
  });

  const images = [image1, image2, image3, image1, image2, image3, image1, image2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images

      // Dynamically change button colors based on image index
      if (imageIndex % 2 === 0) {
        setButtonColor({
          signup: "#958220",  // Default color for even index
          login: "#650c0c",   // Default color for even index
        });
      } else {
        setButtonColor({
          signup: "#650c0c",  // Change color for odd index
          login: "#958220",   // Change color for odd index
        });
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [imageIndex]);

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="get-started-container">
      {/* Dynamic Background */}
      <div className="background-cards">
        <div className="getcard">
          <img src={images[(imageIndex + 0) % images.length]} alt="Card 1" />
        </div>
        <div className="getcard">
          <img src={images[(imageIndex + 1) % images.length]} alt="Card 2" />
        </div>
        <div className="getcard">
          <img src={images[(imageIndex + 2) % images.length]} alt="Card 3" />
        </div>
        <div className="getcard">
          <img src={images[(imageIndex + 3) % images.length]} alt="Card 4" />
        </div>
        <div className="getcard">
          <img src={images[(imageIndex + 4) % images.length]} alt="Card 5" />
        </div>
        <div className="getcard">
          <img src={images[(imageIndex + 5) % images.length]} alt="Card 6" />
        </div>
        <div className="getcard">
          <img src={images[(imageIndex + 6) % images.length]} alt="Card 7" />
        </div>
        <div className="getcard">
          <img src={images[(imageIndex + 7) % images.length]} alt="Card 8" />
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1 className="headline">Welcome to IPL Analytics!</h1>
        <p className="subheadline">Track stats, follow players, and explore the world of cricket.</p>
        <div className="cta-buttons">
          <button
            className="signup-btn"
            style={{ backgroundColor: buttonColor.signup }}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button
            className="login-btn"
            style={{ backgroundColor: buttonColor.login }}
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
