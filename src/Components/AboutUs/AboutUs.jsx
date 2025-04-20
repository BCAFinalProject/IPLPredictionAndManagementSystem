import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          Welcome to the <strong>IPL Prediction Management System</strong>! Our platform is designed to provide an engaging experience for 
          cricket enthusiasts, offering tools to predict match outcomes, track player performance, and build your dream IPL team.
        </p>
        <p>
          With a user-friendly interface and advanced analytics, we aim to bring you closer to the action and help you enjoy the IPL season like never before. 
          Whether you're a casual fan or a cricket expert, this system has something for everyone.
        </p>
      </div>

      <div className="about-team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>Merline</h3>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Magdalene</h3>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Hephzibah</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;