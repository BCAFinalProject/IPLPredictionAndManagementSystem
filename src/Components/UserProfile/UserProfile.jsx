import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import "../Images/ipl1.jpg"

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [favoriteTeam, setFavoriteTeam] = useState("");
  const [favoritePlayer, setFavoritePlayer] = useState("");
  const [playingStyle, setPlayingStyle] = useState("");
  const [battingPosition, setBattingPosition] = useState("");
  const [bowlingType, setBowlingType] = useState("");
  const [themeColor, setThemeColor] = useState("#1e1e1e");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setFavoriteTeam(userData.favoriteTeam || "");
      setFavoritePlayer(userData.favoritePlayer || "");
      setPlayingStyle(userData.playingStyle || "");
      setBattingPosition(userData.battingPosition || "");
      setBowlingType(userData.bowlingType || "");

      // IPL Team Colors
      const teamColors = {
        CSK: "#f7c948",  // Yellow
        MI: "#045093",   // Blue
        RCB: "#d71920",  // Red
        KKR: "#3c0f66",  // Purple
        DC: "#17449b",   // Dark Blue
        SRH: "#fa8e19",  // Orange
        RR: "#ea1a82",   // Pink
        PBKS: "#d71920", // Red
        LSG: "#004f97",  // Navy Blue
        GT: "#1c273c",   // Dark Gray
      };

      if (userData.favoriteTeam && teamColors[userData.favoriteTeam]) {
        setThemeColor(teamColors[userData.favoriteTeam]);
      }
    }
  }, []);

  const handleSave = () => {
    if (user) {
      const updatedUser = {
        ...user,
        favoriteTeam,
        favoritePlayer,
        playingStyle,
        battingPosition,
        bowlingType,
      };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      alert("Profile updated successfully! ");
    }
  };

  return (
    <div className="user-profile" style={{ background: `linear-gradient(135deg, ${themeColor}, #292929)` }}>
      <div className="user-profile-card">
        <h2 className="user-profile-title"> IPL Fan Profile</h2>
        {user ? (
          <>
            <img src={user.profilePicture || "/userimgcsk.jpg"} alt="Profile" className="profile-pic" />
            <p className="user-profile-name"><strong>Username:</strong> {user.username} </p>
            <p className="user-profile-email"><strong>Email:</strong> {user.email}</p>
            <p className="user-profile-id"><strong>User ID:</strong> {user.id}</p>

            {/* Editable Favorite Team */}
            <div className="edit-field">
              <label><strong>Favorite IPL Team:</strong> </label>
              <input
                type="text"
                value={favoriteTeam}
                onChange={(e) => setFavoriteTeam(e.target.value)}
                placeholder="Enter your favorite team"
              />
            </div>

            {/* Editable Favorite Player */}
            <div className="edit-field">
              <label><strong>Favorite Player:</strong> </label>
              <input
                type="text"
                value={favoritePlayer}
                onChange={(e) => setFavoritePlayer(e.target.value)}
                placeholder="Enter your favorite player"
              />
            </div>

            {/* Playing Style */}
            <div className="edit-field">
              <label><strong>Playing Style:</strong> 🏹</label>
              <select value={playingStyle} onChange={(e) => setPlayingStyle(e.target.value)}>
                <option value="">Select</option>
                <option value="Batsman">Batsman</option>
                <option value="Bowler">Bowler</option>
                <option value="All-Rounder">All-Rounder</option>
              </select>
            </div>

            {/* Batting Position (only if Batsman) */}
            {playingStyle === "Batsman" && (
              <div className="edit-field">
                <label><strong>Preferred Batting Position:</strong> </label>
                <input
                  type="text"
                  value={battingPosition}
                  onChange={(e) => setBattingPosition(e.target.value)}
                  placeholder="Enter your batting position (e.g. Opener, Middle Order)"
                />
              </div>
            )}

            {/* Bowling Type (only if Bowler) */}
            {playingStyle === "Bowler" && (
              <div className="edit-field">
                <label><strong>Bowling Type:</strong> 🏏</label>
                <input
                  type="text"
                  value={bowlingType}
                  onChange={(e) => setBowlingType(e.target.value)}
                  placeholder="Enter your bowling type (e.g. Fast, Spin)"
                />
              </div>
            )}

            <button className="save-btn" onClick={handleSave}>Save Profile</button>

            {/* Display saved information below */}
            <div className="saved-info">
              <p><strong> Favorite IPL Team:</strong> {favoriteTeam || "Not Set"}</p>
              <p><strong> Favorite Player:</strong> {favoritePlayer || "Not Set"}</p>
              <p><strong> Playing Style:</strong> {playingStyle || "Not Set"}</p>
              {playingStyle === "Batsman" && <p><strong> Batting Position:</strong> {battingPosition || "Not Set"}</p>}
              {playingStyle === "Bowler" && <p><strong>Bowling Type:</strong> {bowlingType || "Not Set"}</p>}
            </div>
          </>
        ) : (
          <p className="user-profile-error">No user data found. Please log in.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;