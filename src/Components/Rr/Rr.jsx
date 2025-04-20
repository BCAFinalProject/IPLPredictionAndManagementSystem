import React from "react";
import "./Rr.css";
import { Link } from "react-router-dom";

// Import Images
import logoImg from "../Images/ipl1.jpg";
import rrBanner from "../Images/rrbanner.jpg";

// Player Images
import sanjuSamsonImg from "../Images/sanjusamson.jpg";
import shubhamDubeyImg from "../Images/shubhamdubey.jpg";
import vaibhavImg from "../Images/vaibhav.jpg";
import kunalImg from "../Images/kunal.jpg";
import hetmyerImg from "../Images/hetmyer.jpg";
import yashasviImg from "../Images/yashaswijaiswal.jpg";
import dhruvImg from "../Images/dhruv.jpg";
import riyanImg from "../Images/riyan.jpg";
import nitishImg from "../Images/nitish.jpg";
import yudhvirImg from "../Images/yudhvir.jpg";
import archerImg from "../Images/archer.jpg";
import theekshanaImg from "../Images/theekshana.jpg";
import hasarangaImg from "../Images/hasaranga.jpg";
import akashImg from "../Images/akash.jpg";
import kartikeyaImg from "../Images/kartikeya.jpg";
import tusharImg from "../Images/tushar.jpg";
import fazalhaqImg from "../Images/fazalhaq.jpg";
import kwenaImg from "../Images/kwena.jpg";
import ashokImg from "../Images/ashok.jpg";
import sandeepImg from "../Images/sandeep.jpg";

// Categorized Players
const batsmen = [
  { name: "Sanju Samson", role: "WK-Batter", image: sanjuSamsonImg },
  { name: "Shubham Dubey", role: "Batter", image: shubhamDubeyImg },
  { name: "Vaibhav Suryavanshi", role: "Batter", image: vaibhavImg },
  { name: "Kunal Rathore", role: "WK-Batter", image: kunalImg },
  { name: "Shimron Hetmyer", role: "Batter", image: hetmyerImg },
  { name: "Yashasvi Jaiswal", role: "Batter", image: yashasviImg },
  { name: "Dhruv Jurel", role: "WK-Batter", image: dhruvImg },
  { name: "Riyan Parag", role: "Batter", image: riyanImg },
];

const allRounders = [
  { name: "Nitish Rana", role: "All-Rounder", image: nitishImg },
  { name: "Yudhvir Singh", role: "All-Rounder", image: yudhvirImg },
];

const bowlers = [
  { name: "Jofra Archer", role: "Bowler", image: archerImg },
  { name: "Maheesh Theekshana", role: "Bowler", image: theekshanaImg },
  { name: "Wanindu Hasaranga", role: "Bowler", image: hasarangaImg },
  { name: "Akash Madhwal", role: "Bowler", image: akashImg },
  { name: "Kumar Kartikeya Singh", role: "Bowler", image: kartikeyaImg },
  { name: "Tushar Deshpande", role: "Bowler", image: tusharImg },
  { name: "Fazalhaq Farooqi", role: "Bowler", image: fazalhaqImg },
  { name: "Kwena Maphaka", role: "Bowler", image: kwenaImg },
  { name: "Ashok Sharma", role: "Bowler", image: ashokImg },
  { name: "Sandeep Sharma", role: "Bowler", image: sandeepImg },
];

const RajasthanRoyals = () => {
  return (
    <div className="rr-container">
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
      <div className="rr-banner">
        <img src={rrBanner} alt="RR Banner" className="banner-image" />
      </div>

      {/* Team Info Section */}
      <div className="rr-info">
        <h1>Rajasthan Royals</h1>
        <table className="rr-table">
          <tbody>
            <tr><td><strong>Captain:</strong></td><td>Sanju Samson</td></tr>
            <tr><td><strong>Home Ground:</strong></td><td>Sawai Mansingh Stadium</td></tr>
            <tr><td><strong>Coach:</strong></td><td>Rahul Dravid</td></tr>
            <tr><td><strong>Owner:</strong></td><td>Royal Multisport Private Limited</td></tr>
          </tbody>
        </table>

        {/* Trophies Section */}
        <div className="rr-trophies">
          <strong>Champions:</strong> 2008
        </div>
      </div>

      {/* Squad Section */}
      <div className="players-section">
        <h2>Squad</h2>

        <h3 className="section-title">Batters</h3>
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
    </div>
  );
};

export default RajasthanRoyals;
