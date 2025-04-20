import React from "react";
import "./Srh.css";
import { Link } from "react-router-dom";

// Import Images
import logoImg from "../Images/ipl1.jpg";
import srhBanner from "../Images/srhbanner.jpg";

// Player Images
import ishanKishanImg from "../Images/ishankishan.jpg";
import atharvaTaideImg from "../Images/atharvataide.jpg";
import abhinavManoharImg from "../Images/abhinavmanohar.jpg";
import aniketVermaImg from "../Images/aniketverma.jpg";
import sachinBabyImg from "../Images/sachinbaby.jpg";
import klaasenImg from "../Images/klaasen.jpg";
import travisHeadImg from "../Images/travishead.jpg";
import harshalPatelImg from "../Images/harshalpatel.jpg";
import brydonCarseImg from "../Images/brydoncarse.jpg";
import kaminduMendisImg from "../Images/kamindumendis.jpg";
import abhishekSharmaImg from "../Images/abhisheksharma.jpg";
import nitishKumarImg from "../Images/nitishkumar.jpg";
import shamiImg from "../Images/shami.jpg";
import rahulChaharImg from "../Images/rahulchahar.jpg";
import zampaImg from "../Images/zampa.jpg";
import simarjeetImg from "../Images/simarjeet.jpg";
import zeeshanImg from "../Images/zeeshan.jpg";
import unadkatImg from "../Images/unadkat.jpg";
import malingaImg from "../Images/mallinga.jpg";
import cumminsImg from "../Images/cummins.jpg";

// Categorized Players
const batsmen = [
  { name: "Ishan Kishan", role: "WK-Batter", image: ishanKishanImg },
  { name: "Atharva Taide", role: "Batter", image: atharvaTaideImg },
  { name: "Abhinav Manohar", role: "Batter", image: abhinavManoharImg },
  { name: "Aniket Verma", role: "Batter", image: aniketVermaImg },
  { name: "Sachin Baby", role: "Batter", image: sachinBabyImg },
  { name: "Heinrich Klaasen", role: "WK-Batter", image: klaasenImg },
  { name: "Travis Head", role: "Batter", image: travisHeadImg },
];

const allRounders = [
  { name: "Harshal Patel", role: "All-Rounder", image: harshalPatelImg },
  { name: "Brydon Carse", role: "All-Rounder", image: brydonCarseImg },
  { name: "Kamindu Mendis", role: "All-Rounder", image: kaminduMendisImg },
  { name: "Abhishek Sharma", role: "All-Rounder", image: abhishekSharmaImg },
  { name: "Nitish Kumar Reddy", role: "All-Rounder", image: nitishKumarImg },
];

const bowlers = [
  { name: "Mohammad Shami", role: "Bowler", image: shamiImg },
  { name: "Rahul Chahar", role: "Bowler", image: rahulChaharImg },
  { name: "Adam Zampa", role: "Bowler", image: zampaImg },
  { name: "Simarjeet Singh", role: "Bowler", image: simarjeetImg },
  { name: "Zeeshan Ansari", role: "Bowler", image: zeeshanImg },
  { name: "Jaydev Unadkat", role: "Bowler", image: unadkatImg },
  { name: "Eshan Malinga", role: "Bowler", image: malingaImg },
  { name: "Pat Cummins", role: "Bowler", image: cumminsImg },
];

const SunrisersHyderabad = () => {
  return (
    <div className="srh-container">
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
      <div className="srh-banner">
        <img src={srhBanner} alt="SRH Banner" className="banner-image" />
      </div>

      {/* Team Info Section */}
      <div className="srh-info">
        <h1>Sunrisers Hyderabad</h1>
        <table className="srh-table">
          <tbody>
            <tr>
              <td><strong>Captain:</strong></td>
              <td>Pat Cummins</td>
            </tr>
            <tr>
              <td><strong>Home Ground:</strong></td>
              <td>Rajiv Gandhi Intl. Cricket Stadium</td>
            </tr>
            <tr>
              <td><strong>Coach:</strong></td>
              <td>Daniel Vettori</td>
            </tr>
            <tr>
              <td><strong>Owner:</strong></td>
              <td>Sun TV Network Limited</td>
            </tr>
          </tbody>
        </table>

        {/* Trophies Section */}
        <div className="srh-trophies">
          <strong>Champions:</strong> 2016
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
    </div>
  );
};

export default SunrisersHyderabad;
