import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./HeadtoHead.css";

// Import images from the 'src' folder
import viratImage from '../Images/virat.jpg'; // Adjust path based on where the image is located
import rutuImage from '../Images/rutu.jpg'; // Adjust path based on where the image is located
import logoImg from '../Images/bg1.jpg';


const statsData = {
  players: [
    { name: "Virat Kohli", image: viratImage, stats: { runs: 741, matches: 15, innings: 15, hs: "113*", avg: 61.75, strikeRate: 154.69 } },
    { name: "Ruturaj Gaikwad", image: rutuImage, stats: { runs: 583, matches: 14, innings: 14, hs: "108*", avg: 53.00, strikeRate: 141.16 } },
    { name: "David Warner", image: viratImage, stats: { runs: 450, matches: 12, innings: 12, hs: "88*", avg: 45.00, strikeRate: 136.36 } },
    { name: "Rohit Sharma", image: viratImage, stats: { runs: 569, matches: 15, innings: 15, hs: "85", avg: 47.00, strikeRate: 145.90 } },
    { name: "Shubman Gill", image: viratImage, stats: { runs: 421, matches: 13, innings: 13, hs: "89", avg: 38.30, strikeRate: 134.56 } }
  ],
  teams: [
    { name: "Mumbai Indians", image: viratImage, stats: { matches: 121, wins: 62, losses: 58, draws: 1 } },
    { name: "Chennai Super Kings", image: viratImage, stats: { matches: 156, wins: 80, losses: 75, draws: 1 } },
    { name: "Delhi Capitals",  image: viratImage, stats: { matches: 120, wins: 60, losses: 59, draws: 1 } },
    { name: "Kolkata Knight Riders", image: viratImage, stats: { matches: 115, wins: 55, losses: 60, draws: 0 } },
    { name: "Royal Challengers Bangalore", image: viratImage, stats: { matches: 141, wins: 69, losses: 71, draws: 1 } }
  ]
};

const HeadtoHead = () => {
  const [selectionType, setSelectionType] = useState("players");
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownData, setDropdownData] = useState([]);
  const [dropdownSlot, setDropdownSlot] = useState(null);

  const handleDropdownToggle = (slot) => {
    setDropdownSlot(slot);
    setDropdownData(statsData[selectionType]); // Populate dropdown with the current selection type
    setDropdownVisible(!dropdownVisible);
  };

  const handleSelect = (option) => {
    if (dropdownSlot === 1) {
      setSelectedOption1(option);
    } else {
      setSelectedOption2(option);
    }
    setDropdownVisible(false); // Close dropdown after selection
  };

  const renderCard = (slot) => (
    <div className="selection-card">
      <div className="card-content">
        <div className="card-image-container">
          <img
            src={slot === 1 ? (selectedOption1 ? selectedOption1.image : '') : (selectedOption2 ? selectedOption2.image : '')}
            alt={slot === 1 ? (selectedOption1 ? selectedOption1.name : 'Select') : (selectedOption2 ? selectedOption2.name : 'Select')}
            className="card-image"
          />
        </div>
        <div className="card-name">
          {slot === 1 ? (selectedOption1 ? selectedOption1.name : "Select Player/Team") : (selectedOption2 ? selectedOption2.name : "Select Player/Team")}
        </div>
        <div className="card-icon" onClick={() => handleDropdownToggle(slot)}>
          <span className="plus-icon">+</span>
        </div>
      </div>
    </div>
  );

  const renderStatsTable = () => (
    <table className="head-stats-table">
      <thead>
        <tr>
          <th>Stat</th>
          <th>{selectedOption1 ? selectedOption1.name : "Option 1"}</th>
          <th>{selectedOption2 ? selectedOption2.name : "Option 2"}</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(statsData[selectionType][0].stats).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{selectedOption1 ? selectedOption1.stats[key] : "-"}</td>
            <td>{selectedOption2 ? selectedOption2.stats[key] : "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="head-to-head-container">
      {/* Header Section */}

      <header className="home-header">
        <div className="home-logo">
          <img src={logoImg} alt="Logo" className="home-logo-img" />
        </div>
        <nav className="home-nav">
          <Link to="/" className="home-nav-link">Home</Link>
          {/* Stats Dropdown */}
          <div className="home-nav-link dropdown">
            <span className="dropbtn">Stats</span>
            <div className="dropdown-content">
              <Link to="/overallStats">Overall</Link>
              <Link to="/headtohead">Head to Head</Link>
            </div>
          </div>
          <Link to="/merchandise" className="home-nav-link">Merchandise</Link>
          <Link to="/achievements" className="home-nav-link">Achievements</Link>
          <Link to="/team" className="home-nav-link">Team Page</Link>
        </nav>
        <div className="type-toggle">
          <button
            className={`toggle-button ${selectionType === "players" ? "active" : ""}`}
            onClick={() => setSelectionType("players")}
          >
            Players
          </button>
          <button
            className={`toggle-button ${selectionType === "teams" ? "active" : ""}`}
            onClick={() => setSelectionType("teams")}
          >
            Teams
          </button>
        </div>
      </header>



      {/* Selection Section */}
      <div className="selection-section">
        <h2 id="sel">Select {selectionType === "players" ? "Players" : "Teams"}</h2>
        <div className="card-container">
  <div className="card-wrapper">
    {renderCard(1)}
  </div>
  <div className="vs-sign">VS</div>
  <div className="card-wrapper">
    {renderCard(2)}
  </div>
</div>
      </div>

      {/* Stats Table */}
      <div className="comparison-section">
        {selectedOption1 && selectedOption2 ? renderStatsTable() : <p>Select two options to compare.</p>}
      </div>

      {/* Dropdown for selecting players/teams */}
      {dropdownVisible && (
        <div className="head-dropdown">
          <ul>
            {dropdownData.map((option) => (
              <li key={option.name} onClick={() => handleSelect(option)}>
                <img src={option.image} alt={option.name} className="dropdown-image" />
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeadtoHead;
