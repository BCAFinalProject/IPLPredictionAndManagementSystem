import React, { useEffect, useState } from "react";
import "./Leaderboard.css";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    let storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    // Remove empty rows and sort by highest score
    storedLeaderboard = storedLeaderboard.filter(entry => entry.name && entry.points).sort((a, b) => b.points - a.points);

    setLeaderboard(storedLeaderboard);
  }, []);

  return (
    <div className="leaderboard-container">
      <h1>🏆 LEADERBOARD 🏆</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Leaderboard;