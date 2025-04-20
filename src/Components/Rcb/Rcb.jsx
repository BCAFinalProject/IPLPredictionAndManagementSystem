import React from "react";
import "./Rcb.css";
import { Link } from "react-router-dom";

// Import Images
import logoImg from "../Images/ipl1.jpg"; // Update the path accordingly
import rcbBanner from "../Images/rcbbanner.jpg";

// Player Images
import viratImg from "../Images/viratkohli.jpg";
import patidarImg from "../Images/rajatpatidar.jpg";
import saltImg from "../Images/philsalt.jpg";
import jiteshImg from "../Images/jiteshsharma.jpg";
import padikkalImg from "../Images/devduttpadikkal.jpg";
import chhikaraImg from "../Images/swastikchhikara.jpg";
import livingstoneImg from "../Images/liamlivingstone.jpg";
import krunalImg from "../Images/krunalpandya.jpg";
import swapnilImg from "../Images/swapnilsingh.jpg";
import timImg from "../Images/timdavid.jpg";
import romarioImg from "../Images/romarioshepherd.jpg";
import manojImg from "../Images/manojbhandage.jpg";
import jacobImg from "../Images/jacobbethell.jpeg";
import hazlewoodImg from "../Images/joshhazlewood.jpg";

// Categorized Players
const batsmen = [
  { name: "Rajat Patidar", role: "Batter", image: patidarImg },
  { name: "Virat Kohli", role: "Batter", image: viratImg },
  { name: "Phil Salt", role: "WK-Batter", image: saltImg },
  { name: "Jitesh Sharma", role: "WK-Batter", image: jiteshImg },
  { name: "Devdutt Padikkal", role: "Batter", image: padikkalImg },
  { name: "Swastik Chhikara", role: "Batter", image: chhikaraImg },
];

const allRounders = [
  { name: "Liam Livingstone", role: "All-rounder", image: livingstoneImg },
  { name: "Krunal Pandya", role: "All-rounder", image: krunalImg },
  { name: "Swapnil Singh", role: "All-rounder", image: swapnilImg },
  { name: "Tim David", role: "All-rounder", image: timImg },
  { name: "Romario Shepherd", role: "All-rounder", image: romarioImg },
  { name: "Manoj Bhandage", role: "All-rounder", image: manojImg },
  { name: "Jacob Bethell", role: "All-rounder", image: jacobImg },
];

const  bowlers= [
    { "name": "Josh Hazlewood", "role": "Bowler" },
    { "name": "Rasikh Dar", "role": "Bowler" },
    { "name": "Suyash Sharma", "role": "Bowler" },
    { "name": "Bhuvneshwar Kumar", "role": "Bowler" },
    { "name": "Nuwan Thushara", "role": "Bowler" },
    { "name": "Lungi Ngidi", "role": "Bowler" },
    { "name": "Abhinandan Singh", "role": "Bowler" },
    { "name": "Mohit Rathee", "role": "Bowler" },
    { "name": "Yash Dayal", "role": "Bowler" }
  ];


const Rcb = () => {
  return (
    <div className="rcb-container">
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

      {/* Banner Section */}
      <div className="rcb-banner">
        <img src={rcbBanner} alt="RCB Banner" className="banner-image" />
      </div>

      {/* Team Info Section */}
      <div className="rcb-info">
        <h1>Royal Challengers Bangalore</h1>
        <table className="rcb-table">
          <tbody>
            <tr>
              <td><strong>Captain:</strong></td>
              <td>"Rajat Patidar"</td>
            </tr>
            <tr>
              <td><strong>Home Ground:</strong></td>
              <td>M. Chinnaswamy Stadium, Bangalore</td>
            </tr>
            <tr>
              <td><strong>Coach:</strong></td>
              <td>Sanjay Bangar</td>
            </tr>
            <tr>
              <td><strong>Owner:</strong></td>
              <td>United Spirits</td>
            </tr>
          </tbody>
        </table>

        {/* Trophies Section */}
        <div className="rcb-trophies">
          <strong>Trophies Won:</strong> None
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

export default Rcb;
