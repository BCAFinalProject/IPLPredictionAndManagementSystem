import React from "react";
import "./Kkr.css";
import { Link } from "react-router-dom";

// Import Images
import logoImg from "../Images/ipl1.jpg";
import kkrBanner from "../Images/kkrbanner.jpg";

// Player Images
import rinkuImg from "../Images/rinkusingh.jpg";
import quintonImg from "../Images/quintondekock.jpg";
import gurbazImg from "../Images/gurbaz.jpg";
import angkrishImg from "../Images/angkrish.jpg";
import powellImg from "../Images/rovmanpowell.jpg";
import pandeyImg from "../Images/manishpandey.jpg";
import sisodiaImg from "../Images/sisodia.jpg";
import rahaneImg from "../Images/ajinkyarahane.jpg";
import iyerImg from "../Images/venkatasatyanarayanapenmetsa.jpeg";
import anukulImg from "../Images/anukulroy.jpeg";
import moeenImg from "../Images/moeenali.jpeg";
import ramandeepImg from "../Images/ramandeepsingh.jpeg";
import russellImg from "../Images/andrerussell.jpeg";
import nortjeImg from "../Images/anrichnortje.jpeg";
import vaibhavImg from "../Images/vaibhav.jpg";
import markandeImg from "../Images/mayankmarkande.jpeg";
import spencerImg from "../Images/spencer.jpg";
import umranImg from "../Images/umranmalik.jpeg";
import harshitImg from "../Images/harshitrana.jpeg";
import narineImg from "../Images/sunilnarine.jpeg";
import varunImg from "../Images/varunchakaravarthy.jpeg";

// Categorized Players
const batsmen = [
  { name: "Rinku Singh", role: "Batter", image: rinkuImg },
  { name: "Quinton de Kock", role: "WK-Batter", image: quintonImg },
  { name: "Rahmanullah Gurbaz", role: "WK-Batter", image: gurbazImg },
  { name: "Angkrish Raghuvanshi", role: "Batter", image: angkrishImg },
  { name: "Rovman Powell", role: "Batter", image: powellImg },
  { name: "Manish Pandey", role: "Batter", image: pandeyImg },
  { name: "Luvnith Sisodia", role: "WK-Batter", image: sisodiaImg },
  { name: "Ajinkya Rahane", role: "Batter", image: rahaneImg },
];

const allRounders = [
  { name: "Venkatesh Iyer", role: "All-Rounder", image: iyerImg },
  { name: "Anukul Roy", role: "All-Rounder", image: anukulImg },
  { name: "Moeen Ali", role: "All-Rounder", image: moeenImg },
  { name: "Ramandeep Singh", role: "All-Rounder", image: ramandeepImg },
  { name: "Andre Russell", role: "All-Rounder", image: russellImg },
];

const bowlers = [
  { name: "Anrich Nortje", role: "Bowler", image: nortjeImg },
  { name: "Vaibhav Arora", role: "Bowler", image: vaibhavImg },
  { name: "Mayank Markande", role: "Bowler", image: markandeImg },
  { name: "Spencer Johnson", role: "Bowler", image: spencerImg },
  { name: "Umran Malik", role: "Bowler", image: umranImg },
  { name: "Harshit Rana", role: "Bowler", image: harshitImg },
  { name: "Sunil Narine", role: "Bowler", image: narineImg },
  { name: "Varun Chakaravarthy", role: "Bowler", image: varunImg },
];

const KolkataKnightRiders = () => {
  return (
    <div className="kkr-container">
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

      <div className="kkr-banner">
        <img src={kkrBanner} alt="KKR Banner" className="banner-image" />
      </div>

      <div className="kkr-info">
        <h1>Kolkata Knight Riders</h1>
        <table className="kkr-table">
          <tbody>
            <tr><td><strong>Captain:</strong></td><td>Shreyas Iyer</td></tr>
            <tr><td><strong>Home Ground:</strong></td><td>Eden Gardens, Kolkata</td></tr>
            <tr><td><strong>Coach:</strong></td><td>Chandrakant Pandit</td></tr>
            <tr><td><strong>Owner:</strong></td><td>Knight Riders Sports Private Limited</td></tr>
          </tbody>
        </table>
        <div className="kkr-trophies">
          <strong>Trophies Won:</strong> 2012,2014,2024
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

export default KolkataKnightRiders;
