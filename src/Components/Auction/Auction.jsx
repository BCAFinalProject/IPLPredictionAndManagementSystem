import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./Auction.css";

import { Link } from "react-router-dom";


import logoImg from "../Images/ipl1.jpg"; // Update the path accordingly


const Auction = () => {
  const [auctionData, setAuctionData] = useState([]);
  const [teams, setTeams] = useState({});

  useEffect(() => {
    fetch("/ipl_2025_auction_players.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setAuctionData(result.data);

            // Group players by their team
            const groupedTeams = {};
            result.data.forEach((player) => {
              const team = player["Team"] || "Unsold";
              if (!groupedTeams[team]) {
                groupedTeams[team] = [];
              }
              groupedTeams[team].push(player);
            });

            setTeams(groupedTeams);
          },
        });
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, []);

  return (
    <div className="auction-container">
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

      <h1>IPL 2025 Auction Players</h1>
      {Object.keys(teams).length === 0 ? (
        <p>Loading auction data...</p>
      ) : (
        Object.keys(teams).map((team, index) => (
          <div key={index} className="team-section">
            <h2 className="team-name">{team}</h2>
            <table>
              <thead>
                <tr>
                  <th>Player Name</th>
                  <th>Team Name</th>
                  <th>Player Role</th>
                  <th>Base Price</th>
                  <th>Sold Price</th>
                </tr>
              </thead>
              <tbody>
                {teams[team].map((player, idx) => (
                  <tr key={idx}>
                    <td>{player["Players"] || "N/A"}</td>
                    <td>{player["Team"] || "N/A"}</td>
                    <td>{player["Type"] || "N/A"}</td>
                    <td>{player["Base"] ? `${player["Base"]} Cr` : "N/A"}</td>
                    <td>{player["Sold"] ? `${player["Sold"]} Cr` : "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
};

export default Auction;
