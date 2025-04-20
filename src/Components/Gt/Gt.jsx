import React from "react";
import "./Gt.css";
import { Link } from "react-router-dom";

// Import Images
import logoImg from "../Images/ipl1.jpg";
import gtBanner from "../Images/gtbanner.jpg";

// Player Images
import shubmanImg from "../Images/shubmangill.jpg";
import buttlerImg from "../Images/josbuttler.jpg";
import kushagraImg from "../Images/kushagra.jpg";
import rawatImg from "../Images/rawat.jpg";
import rutherfordImg from "../Images/rutherford.jpg";
import phillipsImg from "../Images/phillips.jpg";
import sindhuImg from "../Images/sindhu.jpg";
import lomrorImg from "../Images/lomror.jpg";
import sundarImg from "../Images/sundar.jpg";
import arshadImg from "../Images/arshad.jpg";
import kishoreImg from "../Images/kishore.jpg";
import jayantImg from "../Images/jayant.jpg";
import janatImg from "../Images/janat.jpg";
import sudharsanImg from "../Images/saisudharsan.jpeg";
import shahrukhImg from "../Images/shahrukhkhan.jpeg";
import rabadaImg from "../Images/kagisorabada.jpeg";
import sirajImg from "../Images/mohammadsiraj.jpeg";
import prasidhImg from "../Images/prasidhkrishna.jpeg";
import sutharImg from "../Images/suthar.jpg";
import coetzeeImg from "../Images/coetzee.jpg";
import gurnoorImg from "../Images/gurnoor.jpg";
import ishantImg from "../Images/ishantsharma.jpeg";
import kulwantImg from "../Images/kulwant.jpg";
import tewatiaImg from "../Images/rahultewatia.jpeg";
import rashidImg from "../Images/rashidkhan.jpeg";

// Categorized Players
const batsmen = [
  { name: "Shubman Gill", role: "Batter", image: shubmanImg },
  { name: "Jos Buttler", role: "WK-Batter", image: buttlerImg },
  { name: "Kumar Kushagra", role: "WK-Batter", image: kushagraImg },
  { name: "Anuj Rawat", role: "WK-Batter", image: rawatImg },
  { name: "Sherfane Rutherford", role: "Batter", image: rutherfordImg },
  { name: "Glenn Phillips", role: "Batter", image: phillipsImg },
];

const allRounders = [
  { name: "Nishant Sindhu", role: "All-Rounder", image: sindhuImg },
  { name: "Mahipal Lomror", role: "All-Rounder", image: lomrorImg },
  { name: "Washington Sundar", role: "All-Rounder", image: sundarImg },
  { name: "Mohd. Arshad Khan", role: "All-Rounder", image: arshadImg },
  { name: "Sai Kishore", role: "All-Rounder", image: kishoreImg },
  { name: "Jayant Yadav", role: "All-Rounder", image: jayantImg },
  { name: "Karim Janat", role: "All-Rounder", image: janatImg },
  { name: "B. Sai Sudharsan", role: "All-Rounder", image: sudharsanImg },
  { name: "Shahrukh Khan", role: "All-Rounder", image: shahrukhImg },
];

const bowlers = [
  { name: "Kagiso Rabada", role: "Bowler", image: rabadaImg },
  { name: "Mohammed Siraj", role: "Bowler", image: sirajImg },
  { name: "Prasidh Krishna", role: "Bowler", image: prasidhImg },
  { name: "Manav Suthar", role: "Bowler", image: sutharImg },
  { name: "Gerald Coetzee", role: "Bowler", image: coetzeeImg },
  { name: "Gurnoor Singh Brar", role: "Bowler", image: gurnoorImg },
  { name: "Ishant Sharma", role: "Bowler", image: ishantImg },
  { name: "Kulwant Khejroliya", role: "Bowler", image: kulwantImg },
  { name: "Rahul Tewatia", role: "Bowler", image: tewatiaImg },
  { name: "Rashid Khan", role: "Bowler", image: rashidImg },
];

const GujaratTitans = () => {
  return (
    <div className="gt-container">
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

      <div className="gt-banner">
        <img src={gtBanner} alt="GT Banner" className="banner-image" />
      </div>

      <div className="gt-info">
        <h1>Gujarat Titans</h1>
        <table className="gt-table">
          <tbody>
            <tr>
              <td><strong>Captain:</strong></td>
              <td>Shubman Gill</td>
            </tr>
            <tr>
              <td><strong>Home Ground:</strong></td>
              <td>Narendra Modi Stadium</td>
            </tr>
            <tr>
              <td><strong>Coach:</strong></td>
              <td>Ashish Nehra</td>
            </tr>
            <tr>
              <td><strong>Owner:</strong></td>
              <td>Irelia Sports India Private Limited</td>
            </tr>
          </tbody>
        </table>
        <div className="gt-trophies">
          <strong>Trophies Won:</strong> 2022
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
    </div>
  );
};

export default GujaratTitans;
