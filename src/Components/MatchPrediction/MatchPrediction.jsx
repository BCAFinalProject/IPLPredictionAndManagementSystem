import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // <-- Add this import
import axios from "axios";
import "./MatchPrediction.css";



const PointsTable = () => {
  // State to store points table data
  const [pointsTable, setPointsTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch IPL Points Table from API
  const fetchPointsTable = async () => {
    try {
      const response = await axios.get(
        "https://api.cricapi.com/v1/series_points",
        {
          params: {
            apikey: "a88f9a17-24d2-43d0-bcae-0519b74377b4",
            id: "d5a498c8-7596-4b93-8ab0-e0efc3345312",
          },
        }
      );
  
      console.log("API Response:", response.data); // Debugging
  
      if (response.data && response.data.data) {
        setPointsTable(response.data.data); // Corrected to access `data` array
      } else {
        setError("Invalid API response format");
      }
  
      setLoading(false);
    } catch (error) {
      console.error("Error fetching points table:", error);
      setError("Failed to fetch points table");
      setLoading(false);
    }
  };
  

  // UseEffect hook to fetch data when component mounts
  useEffect(() => {
    fetchPointsTable();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="points-table">
      <h1 className="points-table-title">IPL 2025 Points Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
  {pointsTable.map((team, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{team.teamname}</td> {/* ✅ Fixed Team Name */}
      <td>{team.matches}</td> {/* ✅ Fixed Matches */}
      <td>{team.w || team.wins || 0}</td> {/* ✅ Tries different keys */}
      <td>{team.loss || 0}</td>
      <td>{(team.w || team.wins || 0) * 2}</td> {/* ✅ Prevents NaN */}
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default PointsTable;