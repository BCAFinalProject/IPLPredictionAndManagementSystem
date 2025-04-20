import React from "react";
import "./Csk.css";
import { Link } from "react-router-dom";

// Import Images
import logoImg from "../Images/ipl1.jpg"; // Update the path accordingly
import cskBanner from "../Images/cskbanner.jpg";

// Player Images
import dhoniImg from "../Images/msdhoni.jpg";
import jadejaImg from "../Images/ruturaj.jpg";
import gaikwadImg from "../Images/ruturaj.jpg";
import deepakImg from "../Images/deepakchahar.jpeg";
import moeenImg from "../Images/moeenali.jpeg";
import dubeImg from "../Images/shivamdube.jpeg";
import noorImg from "../Images/noorahmad.jpeg";
import rahulImg from "../Images/rahultripathi.jpg";
import devonImg from "../Images/devon.jpg";
import andreImg from "../Images/andresiddarth.jpg";
import bediImg from "../Images/bedi.jpg";
import khaleelImg from "../Images/khaleel.jpg";
import shaeekImg from "../Images/shaeek.jpeg";
import mukeshImg from "../Images/mukeshchoudhary.jpeg";
import GurjapneetImg from "../Images/gurjapneetsingh.jpeg";
import nathanImg from "../Images/gurjapneetsingh.jpeg";
import shreyasgopalImg from "../Images/shreyasgopal.jpeg";
import matheesapathiranaImg from "../Images/matheesapathirana.jpeg";
import rachinravindraImg from "../Images/rachinravindra.jpeg";
import ravichandranashwinImg from "../Images/ravichandranashwin.jpeg";
import vijayshankarImg from "../Images/vijayshankar.jpeg";
import samcurranImg from "../Images/samcurran.jpeg";
import anshulkambojImg from "../Images/anshulkamboj.jpeg";
import deepakhoodaImg from "../Images/deepakhooda.jpeg";
import jamieovertonImg from "../Images/jamieoverton.jpeg";
import kamleshnagarkotiImg from "../Images/kamleshnagarkoti.jpeg";
import ramakrishnaghoshImg from "../Images/ramakrishnaghosh.jpeg";

// Categorized Players
const batsmen = [
  { name: "MS Dhoni (C)", role: "Wicketkeeper Batsman", image: dhoniImg },
  { name: "Ruturaj Gaikwad", role: "Batsman", image: gaikwadImg },
  { name: "devon convey", role: "Batsman", image: devonImg },
  { name: "Rahul Tripathi", role: "Batsman", image: rahulImg },
  { name: "Shaeek Rashid", role: "Batsman", image: shaeekImg },
  { name: "Vansh Bedi", role: "Batsman", image: bediImg },
  { name: "Andre Siddharth", role: "Batsman", image: andreImg },
];

const bowlers = [
  { name: "Khaleel Ahmed", role: "Bowler", image: khaleelImg },
  { name: "Noor Ahmed", role: "Bowler", image: noorImg },
  { name: "Mukesh Chaudehry", role: "Bowler", image: mukeshImg },
  { name: "Gurjapneet Singh", role: "Bowler", image: GurjapneetImg },
  { name: "Nathan Ellis", role: "Bowler", image: nathanImg },
  { name: "Shreyas gopal", role: "Bowler", image: shreyasgopalImg },
  { name: "Matheesa pathirana.jpeg", role: "Bowler", image: matheesapathiranaImg },
];

const allRounders = [
  { name: "Ravindra Jadeja", role: "All-rounder", image: jadejaImg },
  { name: "Rachin Ravindra", role: "All-rounder", image: rachinravindraImg },
  { name: "Ravichandran ashwin", role: "All-rounder", image: ravichandranashwinImg },
  { name: "Vijayshankar", role: "All-rounder", image: vijayshankarImg },
  { name: "Sam curran.jpeg", role: "All-rounder", image: samcurranImg },
  { name: "Anshul kamboj", role: "All-rounder", image: anshulkambojImg },
  { name: "Deepak hooda.jpeg", role: "All-rounder", image: deepakhoodaImg },
  { name: "Jamie overton", role: "All-rounder", image: jamieovertonImg },
  { name: "Kamlesh nagarkoti", role: "All-rounder", image: kamleshnagarkotiImg },
  { name: "Ramakrishna ghosh", role: "All-rounder", image: ramakrishnaghoshImg },
  { name: "Shivam Dube", role: "All-rounder", image: dubeImg },
];

const Csk = () => {
  return (
    <div className="csk-container">
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
      <div className="csk-banner">
        <img src={cskBanner} alt="CSK Banner" className="banner-image" />
      </div>

      {/* Team Info Section */}
      <div className="csk-info">
        <h1>Chennai Super Kings</h1>
        <table className="csk-table">
          <tbody>
            <tr>
              <td><strong>Captain:</strong></td>
              <td>Ruturaj Gaikwad</td>
            </tr>
            <tr>
              <td><strong>Home Ground:</strong></td>
              <td>MA Chidambaram Stadium, Chennai</td>
            </tr>
            <tr>
              <td><strong>Coach:</strong></td>
              <td>Stephen Fleming</td>
            </tr>
            <tr>
              <td><strong>Owner:</strong></td>
              <td>Chennai Super Kings Cricket Limited</td>
            </tr>
          </tbody>
        </table>

        {/* Trophies Section */}
        <div className="csk-trophies">
          <strong>Trophies Won:</strong> 2010, 2011, 2018, 2021, 2023
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
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/teams">Back to Teams</Link>
      </div>
    </div>
  );
};

export default Csk;
