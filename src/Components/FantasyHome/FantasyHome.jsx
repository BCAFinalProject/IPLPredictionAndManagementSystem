import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./FantasyHome.css";

import viratimage from "../Images/virat.jpg"; // Update the path accordingly


const FantasyHome = () => {
  return (
    <>
     <header className="home-header">
                <div className="home-logo">
                  <img src={viratimage} alt="Logo" className="home-logo-img" />
                </div>
                <nav className="home-nav">
                  <Link to="/home" className="home-nav-link">Home</Link>
                  {/* Stats Dropdown */}
                  <div className="home-nav-link dropdown">
                    <span className="dropbtn">Stats</span>
                    <div className="dropdown-content">
                      <Link to="/overallStats">Overall</Link>
                      <Link to="/headtohead">Head to Head</Link>
                    </div>
                  </div>
                  <Link to="/merchandise" className="home-nav-link">Merchandise</Link>
                  <Link to="/achievements" className="home-nav-link">Achievements</Link>
                  <Link to="/myteam" className="home-nav-link">Team Page</Link>
                </nav>
               
              </header>

    <div className="fantasy-home-container">
      {/* Quote section */}
      <div className="quote-container">
        <h1 className="quote">
          DON'T JUST <br />
          WATCH IPL, <br />
          PLAY IT!
        </h1>
        <p className="quote-description">
          Create your IPL Fantasy team to earn points based on player <br />
          performance and stand a chance to win prizes.
        </p>
      </div>

      {/* Menu section for navigation */}
      <div className="menu-container">
        <Link to="/batsmen" className="menu-link">
          <button className="menu-btn">Batsmen</button>
        </Link>
        <Link to="/bowlers" className="menu-link">
          <button className="menu-btn">Bowlers</button>
        </Link>
        <Link to="/allrounders" className="menu-link">
          <button className="menu-btn">All-Rounders</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default FantasyHome;