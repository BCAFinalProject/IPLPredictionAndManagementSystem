import React from "react";
import "./Mi.css";
import { Link } from "react-router-dom";

// Import Images
import logoImg from "../Images/ipl1.jpg";
import miBanner from "../Images/mibanner.jpg";

// Player Images
import rohitImg from "../Images/rohitsharma.jpg";
import suryakumarImg from "../Images/suryakumaryadav.jpg";
import robinImg from "../Images/robinminz.jpg";
import ryanImg from "../Images/ryanrickelton.jpg";
import shrijithImg from "../Images/shrijithkrishnan.jpg";
import bevonImg from "../Images/bevanjohnjacobs.jpg";
import tilakImg from "../Images/tilakvarma.jpg";
import namanImg from "../Images/namandhir.jpeg";
import willImg from "../Images/willjacks.jpeg";
import santnerImg from "../Images/mitchellsantner.jpeg";
import rajImg from "../Images/rajangadbawa.jpeg";
import vigneshImg from "../Images/vigneshputhur.jpeg";
import hardikImg from "../Images/hardikpandya.jpeg";
import trentboultImg from "../Images/trentboult.jpeg";
import karnsharmaImg from "../Images/karnsharma.jpeg";
import deepakchaharImg from "../Images/deepakchahar.jpeg";
import allahghazanfarImg from "../Images/allahghazanfar.jpeg";
import ashwanikumarImg from "../Images/ashwanikumar.jpeg";
import reecetopleyImg from "../Images/reecetopley.jpeg";
import venkatasatyanarayanapenmetsaImg from "../Images/venkatasatyanarayanapenmetsa.jpeg";
import arjuntendulkarImg from "../Images/arjuntendulkar.jpeg";
import lizaadwilliamsImg from "../Images/lizaadwilliams.jpeg";
import jaspritbumrahImg from "../Images/jaspritbumrah.jpeg";

// Categorized Players
const batsmen = [
  { name: "Rohit Sharma", role: "Batter", image: rohitImg },
  { name: "Suryakumar Yadav", role: "Batter", image: suryakumarImg },
  { name: "Robin Minz", role: "WK-Batter", image: robinImg },
  { name: "Ryan Rickelton", role: "WK-Batter", image: ryanImg },
  { name: "Shrijith Krishnan", role: "WK-Batter", image: shrijithImg },
  { name: "Bevon-John Jacobs", role: "Batter", image: bevonImg },
  { name: "N. Tilak Varma", role: "Batter", image: tilakImg },
];

const allRounders = [
  { name: "Naman Dhir", role: "All-Rounder", image: namanImg },
  { name: "Will Jacks", role: "All-Rounder", image: willImg },
  { name: "Mitchell Santner", role: "All-Rounder", image: santnerImg },
  { name: "Raj Angad Bawa", role: "All-Rounder", image: rajImg },
  { name: "Vignesh Puthur", role: "All-Rounder", image: vigneshImg },
  { name: "Hardik Pandya", role: "All-Rounder", image: hardikImg },
];

const bowlers = [
  { name: "Trent boult", role: "Bowler", image: trentboultImg },
  { name: "Karnsharma.jpeg", role: "Bowler", image: karnsharmaImg },
  { name: "Deepakchahar", role: "Bowler", image: deepakchaharImg },
  { name: "Allahghazanfar.jpeg", role: "Bowler", image: allahghazanfarImg },
  { name: "Ashwani kumar", role: "Bowler", image: ashwanikumarImg },
  { name: "Reece topley", role: "Bowler", image: reecetopleyImg },
  { name: "Venkata satyanarayana penmetsa", role: "Bowler", image: venkatasatyanarayanapenmetsaImg },
  { name: "Arjun tendulkar", role: "Bowler", image: arjuntendulkarImg },
  { name: "Lizaad williams", role: "Bowler", image: lizaadwilliamsImg },
  { name: "Jasprit bumra", role: "Bowler", image: jaspritbumrahImg },
];

const Mi = () => {
  return (
    <div className="mi-container">
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

      <div className="mi-banner">
        <img src={miBanner} alt="MI Banner" className="banner-image" />
      </div>

      <div className="mi-info">
        <h1>Mumbai Indians</h1>
        <table className="mi-table">
          <tbody>
            <tr>
              <td><strong>Captain:</strong></td>
              <td>Hardik Pandya</td>
            </tr>
            <tr>
              <td><strong>Home Ground:</strong></td>
              <td>Wankhede Stadium, Mumbai</td>
            </tr>
            <tr>
              <td><strong>Coach:</strong></td>
              <td>Mark Boucher</td>
            </tr>
            <tr>
              <td><strong>Owner:</strong></td>
              <td>Reliance Industries</td>
            </tr>
          </tbody>
        </table>

        <div className="mi-trophies">
          <strong>Trophies Won:</strong> 2013, 2015, 2017, 2019, 2020
        </div>
      </div>

      <div className="players-section">
        <h2>Squad</h2>

        <h3 className="section-title">Batsmen</h3>
        <div className="players-grid">
          {batsmen.map((player, index) => (
            <div key={index} className="player-card">
              <img src={player.image} alt={player.name} className="player-image" />
              <h3>{player.name}</h3>
              <p>{player.role}</p>
            </div>
          ))}
        </div>

        <h3 className="section-title">All-rounders</h3>
        <div className="players-grid">
          {allRounders.map((player, index) => (
            <div key={index} className="player-card">
              <img src={player.image} alt={player.name} className="player-image" />
              <h3>{player.name}</h3>
              <p>{player.role}</p>
            </div>
          ))}
        </div>
      </div>

          {/* Bowlers Section */}
        <h3 className="section-title">Bowlers</h3>
        <div className="players-grid">
          {bowlers.map((player, index) => (
            <div key={index} className="player-card">
              <img src={player.image} alt={player.name} className="player-image" />
              <h3>{player.name}</h3>
              <p>{player.role}</p>
            </div>
          ))}
        </div>
        
      <div className="nav-links">
        <Link to="/teams">Back to Teams</Link>
      </div>
    </div>
  );
};

export default Mi;
