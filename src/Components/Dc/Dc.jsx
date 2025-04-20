import React from "react";
import "./Dc.css";
import { Link } from "react-router-dom";

// Import Images
import logoImg from "../Images/ipl1.jpg";
import dcBanner from "../Images/dcbanner.jpg";

// Player Images
import klRahulImg from "../Images/klrahul.jpg";
import harryBrookImg from "../Images/harrybrook.jpg";
import jakeImg from "../Images/jake.jpg";
import karunNairImg from "../Images/karunnair.jpg";
import fafImg from "../Images/faf.jpg";
import donovanImg from "../Images/donovan.jpg";
import abishekImg from "../Images/abishek.jpg";
import tristanImg from "../Images/tristan.jpg";
import sameerImg from "../Images/sameer.jpg";
import ashutoshImg from "../Images/ashutosh.jpg";
import darshanImg from "../Images/darshan.jpg";
import viprajImg from "../Images/vipraj.jpg";
import ajayImg from "../Images/ajay.jpg";
import manvanthImg from "../Images/manvanth.jpg";
import starcImg from "../Images/starc.jpg";
import natarajanImg from "../Images/natarajan.jpg";
import mohitImg from "../Images/mohit.jpg";
import mukeshImg from "../Images/mukesh.jpg";
import chameeraImg from "../Images/chameera.jpg";
import kuldeepImg from "../Images/kuldeepsen.jpeg";

// Categorized Players
const batsmen = [
  { name: "KL Rahul", role: "WK-Batter", image: klRahulImg },
  { name: "Harry Brook", role: "Batter", image: harryBrookImg },
  { name: "Jake Fraser-McGurk", role: "Batter", image: jakeImg },
  { name: "Karun Nair", role: "Batter", image: karunNairImg },
  { name: "Faf du Plessis", role: "Batter", image: fafImg },
  { name: "Donovan Ferreira", role: "WK-Batter", image: donovanImg },
  { name: "Abishek Porel", role: "WK-Batter", image: abishekImg },
  { name: "Tristan Stubbs", role: "WK-Batter", image: tristanImg },
];

const allRounders = [
  { name: "Sameer Rizvi", role: "All-Rounder", image: sameerImg },
  { name: "Ashutosh Sharma", role: "All-Rounder", image: ashutoshImg },
  { name: "Darshan Nalkande", role: "All-Rounder", image: darshanImg },
  { name: "Vipraj Nigam", role: "All-Rounder", image: viprajImg },
  { name: "Ajay Mandal", role: "All-Rounder", image: ajayImg },
  { name: "Manvanth Kumar L", role: "All-Rounder", image: manvanthImg },
];

const bowlers = [
  { name: "Mitchell Starc", role: "Bowler", image: starcImg },
  { name: "T Natarajan", role: "Bowler", image: natarajanImg },
  { name: "Mohit Sharma", role: "Bowler", image: mohitImg },
  { name: "Mukesh Kumar", role: "Bowler", image: mukeshImg },
  { name: "Dushmantha Chameera", role: "Bowler", image: chameeraImg },
  { name: "Kuldeep Yadav", role: "Bowler", image: kuldeepImg },
];

const DelhiCapitals = () => {
  return (
    <div className="dc-container">
      {/* Header Section */}
      <header className="home-header">
        <div className="home-logo">
          <img src={logoImg} alt="Logo" className="home-logo-img" />
        </div>
        <nav className="home-nav">
          <Link to="/home" className="home-nav-link">Home</Link>
          <Link to="/stats" className="home-nav-link">Stats</Link>
          <Link to="/merchandise" className="home-nav-link">Merchandise</Link>
          <Link to="/achievements" className="home-nav-link">Achievements</Link>
          <Link to="/team" className="home-nav-link">Teams</Link>
        </nav>
      </header>

      {/* Banner Section */}
      <div className="dc-banner">
        <img src={dcBanner} alt="DC Banner" className="banner-image" />
      </div>

      {/* Team Info Section */}
      <div className="dc-info">
        <h1>Delhi Capitals</h1>
        <table className="dc-table">
          <tbody>
            <tr>
              <td><strong>Captain:</strong></td>
              <td>KL Rahul</td>
            </tr>
            <tr>
              <td><strong>Home Ground:</strong></td>
              <td>Arun Jaitley Stadium, Delhi</td>
            </tr>
            <tr>
              <td><strong>Coach:</strong></td>
              <td>Ricky Ponting</td>
            </tr>
            <tr>
              <td><strong>Owner:</strong></td>
              <td>JSW-GMR Cricket Pvt Ltd</td>
            </tr>
          </tbody>
        </table>

        {/* Trophies Section */}
        <div className="dc-trophies">
          <strong>None</strong> 
        </div>
      </div>

      {/* Squad Section */}
      <div className="players-section">
        <h2>Squad</h2>

        {/* Batsmen Section */}
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

        {/* All-Rounders Section */}
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
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/teams">Back to Teams</Link>
      </div>
    </div>
  );
};

export default DelhiCapitals;
