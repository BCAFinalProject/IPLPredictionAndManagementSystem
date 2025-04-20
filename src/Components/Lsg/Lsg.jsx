import React from "react";
import "./Lsg.css";
import { Link } from "react-router-dom";

// Import Images
import logoImg from "../Images/ipl1.jpg";
import lsgBanner from "../Images/lsgbanner.jpg";

// Player Images
import pantImg from "../Images/rishabhpant.jpg";
import millerImg from "../Images/davidmiller.jpg";
import markramImg from "../Images/aidenmarkram.jpg";
import aryanImg from "../Images/aryanjuyal.jpg";
import himmatImg from "../Images/himmatsingh.jpg";
import breetzkeImg from "../Images/matthewbreetzke.jpg";
import pooranImg from "../Images/nicholaspooran.jpg";
import marshImg from "../Images/mitchellmarsh.jpeg";
import samadImg from "../Images/abdulsamad.jpeg";
import shahbazImg from "../Images/shahbazahamad.jpg";
import yuvrajImg from "../Images/yuvrajchaudhary.jpeg";
import rajvardhanImg from "../Images/rajvardhan.jpg";
import arshinImg from "../Images/arshinkulkarni.jpeg";
import badoniImg from "../Images/ayushbadoni.jpeg";
import aveshImg from "../Images/aveshkhan.jpeg";
import akashDeepImg from "../Images/akashdeep.jpeg";
import siddharthImg from "../Images/msiddharth.jpeg";
import digveshImg from "../Images/digveshsingh.jpeg";
import akashSinghImg from "../Images/akashsingh.jpeg";
import shamarImg from "../Images/shamarjoseph.jpeg";
import princeImg from "../Images/princeyadav.jpeg";
import mayankImg from "../Images/mayankyadav.jpeg";
import mohsinImg from "../Images/mohsinkhan.jpeg";
import bishnoiImg from "../Images/ravibishnoi.jpeg";

// Categorized Players
const batsmen = [
  { name: "Rishabh Pant", role: "WK-Batter", image: pantImg },
  { name: "David Miller", role: "Batter", image: millerImg },
  { name: "Aiden Markram", role: "Batter", image: markramImg },
  { name: "Aryan Juyal", role: "WK-Batter", image: aryanImg },
  { name: "Himmat Singh", role: "Batter", image: himmatImg },
  { name: "Matthew Breetzke", role: "Batter", image: breetzkeImg },
  { name: "Nicholas Pooran", role: "WK-Batter", image: pooranImg },
];

const allRounders = [
  { name: "Mitchell Marsh", role: "All-Rounder", image: marshImg },
  { name: "Abdul Samad", role: "All-Rounder", image: samadImg },
  { name: "Shahbaz Ahamad", role: "All-Rounder", image: shahbazImg },
  { name: "Yuvraj Chaudhary", role: "All-Rounder", image: yuvrajImg },
  { name: "Rajvardhan Hangargekar", role: "All-Rounder", image: rajvardhanImg },
  { name: "Arshin Kulkarni", role: "All-Rounder", image: arshinImg },
  { name: "Ayush Badoni", role: "All-Rounder", image: badoniImg },
];

const bowlers = [
  { name: "Avesh Khan", role: "Bowler", image: aveshImg },
  { name: "Akash Deep", role: "Bowler", image: akashDeepImg },
  { name: "M Siddharth", role: "Bowler", image: siddharthImg },
  { name: "Digvesh Singh", role: "Bowler", image: digveshImg },
  { name: "Akash Singh", role: "Bowler", image: akashSinghImg },
  { name: "Shamar Joseph", role: "Bowler", image: shamarImg },
  { name: "Prince Yadav", role: "Bowler", image: princeImg },
  { name: "Mayank Yadav", role: "Bowler", image: mayankImg },
  { name: "Mohsin Khan", role: "Bowler", image: mohsinImg },
  { name: "Ravi Bishnoi", role: "Bowler", image: bishnoiImg },
];

const LucknowSuperGiants = () => {
  return (
    <div className="lsg-container">
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

      <div className="lsg-banner">
        <img src={lsgBanner} alt="LSG Banner" className="banner-image" />
      </div>

      <div className="lsg-info">
        <h1>Lucknow Super Giants</h1>
        <table className="lsg-table">
          <tbody>
            <tr><td><strong>Captain:</strong></td><td>Rishabh Pant</td></tr>
            <tr><td><strong>Home Ground:</strong></td><td>BRSABV Ekana Cricket Stadium</td></tr>
            <tr><td><strong>Coach:</strong></td><td>Justin Langer</td></tr>
            <tr><td><strong>Owner:</strong></td><td>RPSG Sports Private Limited</td></tr>
          </tbody>
        </table>
        
      <div className="lsg-trophies">
          <strong>Trophies Won:</strong> None
        </div>
      </div>


      <div className="players-section">
        <h2>Squad</h2>
        <h3 className="section-title">Batters</h3>
        <div className="players-grid">{batsmen.map((player, index) => (
          <div key={index} className="player-card">
            <img src={player.image} alt={player.name} className="player-image" />
            <h3>{player.name}</h3>
            <p>{player.role}</p>
          </div>
        ))}</div>

        <h3 className="section-title">All-Rounders</h3>
        <div className="players-grid">{allRounders.map((player, index) => (
          <div key={index} className="player-card">
            <img src={player.image} alt={player.name} className="player-image" />
            <h3>{player.name}</h3>
            <p>{player.role}</p>
          </div>
        ))}</div>

<h3 className="section-title">Bowlers</h3>
        <div className="players-grid">
          {bowlers.map((player, index) => (
            <div key={index} className="player-card">
              <img src={player.image} alt={player.name} className="player-image" />
              <h3>{player.name}</h3>
              <p>{player.role}</p>
            </div>
  )
)};</div>
 </div>
    </div>
  );
};
export default LucknowSuperGiants;
