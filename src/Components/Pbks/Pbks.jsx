import React from "react";
import "./Pbks.css";
import { Link } from "react-router-dom";

// Import Images
import logoImg from "../Images/ipl1.jpg";
import pbksBanner from "../Images/pbksbanner.jpg";

// Player Images
import shreyasIyerImg from "../Images/shreyasiyer.jpg";
import nehalWadheraImg from "../Images/nehalwadhera.jpg";
import vishnuVinodImg from "../Images/vishnuvinod.jpg";
import joshInglisImg from "../Images/joshinglis.jpg";
import harnoorPannuImg from "../Images/harnoorpannu.jpg";
import pylaAvinashImg from "../Images/pylaavinash.jpg";
import prabhsimranSinghImg from "../Images/prabhsimransingh.jpg";
import shashankSinghImg from "../Images/shashanksingh.jpg";
import marcusStoinisImg from "../Images/marcusstoinis.jpeg";
import glennMaxwellImg from "../Images/glennmaxwell.jpg";
import harpreetBrarImg from "../Images/harpreetbrar.jpeg";
import marcoJansenImg from "../Images/marcojansen.jpeg";
import azmatullahOmarzaiImg from "../Images/azmatullahomarzai.jpg";
import priyanshAryaImg from "../Images/priyansharya.jpg";
import aaronHardieImg from "../Images/aaronhardie.jpeg";
import musheerKhanImg from "../Images/musheerkhan.jpg";
import suryanshShedgeImg from "../Images/suryanshshedge.jpeg";
import arshdeepSinghImg from "../Images/arshdeepsingh.jpeg";
import yuzvendraChahalImg from "../Images/yuzvendrachahal.jpeg";
import vyshakVijayImg from "../Images/vyshakvijay.jpg";
import yashThakurImg from "../Images/yashthakur.jpeg";
import lockieFergusonImg from "../Images/lockieferguson.jpeg";
import kuldeepSenImg from "../Images/kuldeepsen.jpeg";
import xavierBartlettImg from "../Images/xavierbartlett.jpeg";
import pravinDubeyImg from "../Images/pravindubey.jpeg";

// Categorized Players
const batsmen = [
  { name: "Shreyas Iyer", role: "Batter", image: shreyasIyerImg },
  { name: "Nehal Wadhera", role: "Batter", image: nehalWadheraImg },
  { name: "Vishnu Vinod", role: "WK-Batter", image: vishnuVinodImg },
  { name: "Josh Inglis", role: "WK-Batter", image: joshInglisImg },
  { name: "Harnoor Pannu", role: "Batter", image: harnoorPannuImg },
  { name: "Pyla Avinash", role: "Batter", image: pylaAvinashImg },
  { name: "Prabhsimran Singh", role: "WK-Batter", image: prabhsimranSinghImg },
  { name: "Shashank Singh", role: "Batter", image: shashankSinghImg },
];

const allRounders = [
  { name: "Marcus Stoinis", role: "All-Rounder", image: marcusStoinisImg },
  { name: "Glenn Maxwell", role: "All-Rounder", image: glennMaxwellImg },
  { name: "Harpreet Brar", role: "All-Rounder", image: harpreetBrarImg },
  { name: "Marco Jansen", role: "All-Rounder", image: marcoJansenImg },
  { name: "Azmatullah Omarzai", role: "All-Rounder", image: azmatullahOmarzaiImg },
  { name: "Priyansh Arya", role: "All-Rounder", image: priyanshAryaImg },
  { name: "Aaron Hardie", role: "All-Rounder", image: aaronHardieImg },
  { name: "Musheer Khan", role: "All-Rounder", image: musheerKhanImg },
  { name: "Suryansh Shedge", role: "All-Rounder", image: suryanshShedgeImg },
];

const bowlers = [
  { name: "Arshdeep Singh", role: "Bowler", image: arshdeepSinghImg },
  { name: "Yuzvendra Chahal", role: "Bowler", image: yuzvendraChahalImg },
  { name: "Vyshak Vijay Kumar", role: "Bowler", image: vyshakVijayImg },
  { name: "Yash Thakur", role: "Bowler", image: yashThakurImg },
  { name: "Lockie Ferguson", role: "Bowler", image: lockieFergusonImg },
  { name: "Kuldeep Sen", role: "Bowler", image: kuldeepSenImg },
  { name: "Xavier Bartlett", role: "Bowler", image: xavierBartlettImg },
  { name: "Pravin Dubey", role: "Bowler", image: pravinDubeyImg },
];

const PunjabKings = () => {
  return (
    <div className="pbks-container">
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

      <div className="pbks-banner">
        <img src={pbksBanner} alt="PBKS Banner" className="banner-image" />
      </div>

      <div className="pbks-info">
        <h1>Punjab Kings</h1>
        <table className="pbks-table">
          <tbody>
            <tr><td><strong>Captain:</strong></td><td>Shreyas Iyer</td></tr>
            <tr><td><strong>Home Ground:</strong></td><td>PCA New Stadium, Mullanpur</td></tr>
            <tr><td><strong>Coach:</strong></td><td>Ricky Ponting</td></tr>
            <tr><td><strong>Owner:</strong></td><td>K.P.H. Dream Cricket Pvt Ltd</td></tr>
          </tbody>
        </table>
        <div className="pbks-trophies">
                  <strong>Trophies Won:</strong> None
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

export default PunjabKings;
