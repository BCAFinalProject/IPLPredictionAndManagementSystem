import React, { useState, useEffect } from "react";
import "./MyTeam.css";

const MyTeam = () => {
  const [selectedBatsmen, setSelectedBatsmen] = useState([]);
  const [selectedBowlers, setSelectedBowlers] = useState([]);
  const [selectedAllRounders, setSelectedAllRounders] = useState([]);
  const [captain, setCaptain] = useState(null);
  const [viceCaptain, setViceCaptain] = useState(null);
  const [wicketKeeper, setWicketKeeper] = useState(null);
  const [finalTeam, setFinalTeam] = useState([]);

  // Fetch selected players from localStorage
  useEffect(() => {
    const batsmen = JSON.parse(localStorage.getItem("selectedBatsmen")) || [];
    const bowlers = JSON.parse(localStorage.getItem("selectedBowlers")) || [];
    const allRounders = JSON.parse(localStorage.getItem("selectedAllRounders")) || [];

    setSelectedBatsmen(batsmen);
    setSelectedBowlers(bowlers);
    setSelectedAllRounders(allRounders);
  }, []);

  // Remove player from the respective list and update localStorage
  const handleRemove = (player, category) => {
    let updatedPlayers;

    if (category === "Batsmen") {
      updatedPlayers = selectedBatsmen.filter((p) => p.name !== player.name);
      setSelectedBatsmen(updatedPlayers);
      localStorage.setItem("selectedBatsmen", JSON.stringify(updatedPlayers));
    } else if (category === "Bowlers") {
      updatedPlayers = selectedBowlers.filter((p) => p.name !== player.name);
      setSelectedBowlers(updatedPlayers);
      localStorage.setItem("selectedBowlers", JSON.stringify(updatedPlayers));
    } else if (category === "AllRounders") {
      updatedPlayers = selectedAllRounders.filter((p) => p.name !== player.name);
      setSelectedAllRounders(updatedPlayers);
      localStorage.setItem("selectedAllRounders", JSON.stringify(updatedPlayers));
    }
  };

  const generateTeam = () => {
    if (!captain || !viceCaptain || !wicketKeeper) {
      alert("Please select Captain, Vice-Captain, and Wicketkeeper.");
      return;
    }
  
    // Ensure Captain and Vice-Captain are not the same
    if (captain === viceCaptain) {
      alert("Captain and Vice-Captain cannot be the same.");
      return;
    }
  
    const allPlayers = [...selectedBatsmen, ...selectedBowlers, ...selectedAllRounders];
  
    const findPlayer = (name) => allPlayers.find((player) => player.name === name);
  
    const selectedPlayers = [
      { ...findPlayer(captain), role: "Captain" },
      { ...findPlayer(viceCaptain), role: "Vice-Captain" },
      { ...findPlayer(wicketKeeper), role: "Wicketkeeper" },
      ...allPlayers.filter(
        (player) =>
          player.name !== captain &&
          player.name !== viceCaptain &&
          player.name !== wicketKeeper
      ),
    ];
  
    setFinalTeam(selectedPlayers);
  };

  // Helper function to group players in rows
  const getRowedPlayers = (players) => {
    const rows = [];
    const rowSize = 3; // Number of players per row
    for (let i = 0; i < players.length; i += rowSize) {
      rows.push(players.slice(i, i + rowSize));
    }
    return rows;
  };

  return (
    <div className="myteam-page">
      <h1>My Team</h1>

      {/* Display selected batsmen */}
      <h2>Batsmen</h2>
      <div className="myteam-player-container">
        {selectedBatsmen.length > 0 ? (
          selectedBatsmen.map((player, index) => (
            <div key={index} className={`myteam-player-card ${player.name === captain ? "captain" : player.name === viceCaptain ? "vice-captain" : player.name === wicketKeeper ? "wicket-keeper" : ""}`}>              <div className="myteam-player-img-container">
                <img
                  src={player.img || "https://via.placeholder.com/200"}
                  alt={player.name}
                  className="myteam-player-img"
                />
              </div>
              <div className="myteam-player-info">
                <h3>{player.name}</h3>
              </div>
              <div className="myteam-player-details">
                <p>{player.achievements}</p>
              </div>
              {/* Remove button */}
              <button
                className="myteam-remove-btn"
                onClick={() => handleRemove(player, "Batsmen")}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No batsmen selected.</p>
        )}
      </div>

      {/* Display selected bowlers */}
      <h2>Bowlers</h2>
      <div className="myteam-player-container">
        {selectedBowlers.length > 0 ? (
          selectedBowlers.map((player, index) => (
            <div key={index} className={`myteam-player-card ${player.name === captain ? "captain" : player.name === viceCaptain ? "vice-captain" : player.name === wicketKeeper ? "wicket-keeper" : ""}`}>
              <div className="myteam-player-img-container">
                <img
                  src={player.img || "https://via.placeholder.com/200"}
                  alt={player.name}
                  className="myteam-player-img"
                />
              </div>
              <div className="myteam-player-info">
                <h3>{player.name}</h3>
              </div>
              <div className="myteam-player-details">
                <p>{player.achievements}</p>
              </div>
              {/* Remove button */}
              <button
                className="myteam-remove-btn"
                onClick={() => handleRemove(player, "Bowlers")}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No bowlers selected.</p>
        )}
      </div>

      {/* Display selected all-rounders */}
      <h2>All-Rounders</h2>
      <div className="myteam-player-container">
        {selectedAllRounders.length > 0 ? (
          selectedAllRounders.map((player, index) => (
            <div key={index} className={`myteam-player-card ${player.name === captain ? "captain" : player.name === viceCaptain ? "vice-captain" : player.name === wicketKeeper ? "wicket-keeper" : ""}`}>
              <div className="myteam-player-img-container">
                <img
                  src={player.img || "https://via.placeholder.com/200"}
                  alt={player.name}
                  className="myteam-player-img"
                />
              </div>
              <div className="myteam-player-info">
                <h3>{player.name}</h3>
              </div>
              <div className="myteam-player-details">
                <p>{player.achievements}</p>
              </div>
              {/* Remove button */}
              <button
                className="myteam-remove-btn"
                onClick={() => handleRemove(player, "AllRounders")}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No all-rounders selected.</p>
        )}
      </div>

      {/* Dropdowns to select captain, vice-captain, and wicketkeeper */}
      <div className="myteam-role-selection">
        <label>Captain</label>
        <select onChange={(e) => setCaptain(e.target.value)}>
          <option value="">Select Captain</option>
          {[...selectedBatsmen, ...selectedBowlers, ...selectedAllRounders].map((player, index) => (
            <option key={index} value={player.name}>
              {player.name}
            </option>
          ))}
        </select>

        <label>Vice-Captain</label>
        <select onChange={(e) => setViceCaptain(e.target.value)}>
          <option value="">Select Vice-Captain</option>
          {[...selectedBatsmen, ...selectedBowlers, ...selectedAllRounders].map((player, index) => (
            <option key={index} value={player.name}>
              {player.name}
            </option>
          ))}
        </select>

        <label>Wicketkeeper</label>
        <select onChange={(e) => setWicketKeeper(e.target.value)}>
          <option value="">Select Wicketkeeper</option>
          {[...selectedBatsmen, ...selectedBowlers, ...selectedAllRounders].map((player, index) => (
            <option key={index} value={player.name}>
              {player.name}
            </option>
          ))}
        </select>
      </div>

      {/* Generate button */}
      <button className="myteambutton" onClick={generateTeam}>Generate Team</button>

      {/* Display generated team */}
      <div className="myteam-final-team">
        <h2>Final Team</h2>
        {finalTeam.length > 0 ? (
          <div className="myteam-player-container">
            {/* Display Captain, Vice-Captain, and Wicketkeeper in the first row */}
            <div className="myteam-player-row">
              <div className="myteam-player-card captain">
                <h3>Captain</h3>
                <div className="myteam-player-img-container">
                  <img
                    src={finalTeam[0].img || "https://via.placeholder.com/200"}
                    alt={finalTeam[0].name}
                    className="myteam-player-img"
                  />
                </div>
                <div className="myteam-player-info">
                  <h3>{finalTeam[0].name}</h3>
                </div>
              </div>
              <div className="myteam-player-card vice-captain">
                <h3>Vice-Captain</h3>
                <div className="myteam-player-img-container">
                  <img
                    src={finalTeam[1].img || "https://via.placeholder.com/200"}
                    alt={finalTeam[1].name}
                    className="myteam-player-img"
                  />
                </div>
                <div className="myteam-player-info">
                  <h3>{finalTeam[1].name}</h3>
                </div>
              </div>
              <div className="myteam-player-card wicket-keeper">
                <h3>Wicketkeeper</h3>
                <div className="myteam-player-img-container">
                  <img
                    src={finalTeam[2].img || "https://via.placeholder.com/200"}
                    alt={finalTeam[2].name}
                    className="myteam-player-img"
                  />
                </div>
                <div className="myteam-player-info">
                  <h3>{finalTeam[2].name}</h3>
                </div>
              </div>
            </div>
            {/* Display remaining players in rows */}
            {getRowedPlayers(finalTeam.slice(3)).map((row, index) => (
              <div key={index} className="myteam-player-row">
                {row.map((player, index) => (
                  <div key={index} className="myteam-player-card">
                    <div className="myteam-player-img-container">
                      <img
                        src={player.img || "https://via.placeholder.com/200"}
                        alt={player.name}
                        className="myteam-player-img"
                      />
                    </div>
                    <div className="myteam-player-info">
                      <h3>{player.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p>No team generated yet.</p>
        )}
      </div>
    </div>
  );
}


export default MyTeam;