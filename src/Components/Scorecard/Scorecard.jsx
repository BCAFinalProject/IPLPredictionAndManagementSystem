import React, { useEffect, useState } from "react";
import "./Scorecard.css";

const Scorecard = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedMatch, setExpandedMatch] = useState(null);
  const API_KEY = "12ccf2e2-dfde-4a55-8970-f9f51dbec6ef";

  useEffect(() => {
    fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setMatches(data.data);
        } else {
          setError("No match data available.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Sort matches: Ongoing matches first, then today's matches, then upcoming
  const sortedMatches = matches.sort((a, b) => {
    if (a.status.includes("Live")) return -1; // Ongoing matches at the top
    if (b.status.includes("Live")) return 1;
    if (a.date === today) return -1; // Today's matches next
    if (b.date === today) return 1;
    return 0;
  });

  const toggleMatchDetails = (index) => {
    setExpandedMatch(expandedMatch === index ? null : index);
  };

  return (
    <div className="scorecard-container">
      <h2 className="scorecard-title">Live & Upcoming Matches</h2>

      {loading ? (
        <p className="scorecard-loading">Loading matches...</p>
      ) : error ? (
        <p className="scorecard-error">{error}</p>
      ) : sortedMatches.length > 0 ? (
        <div className="scorecard-matches">
          {sortedMatches.map((match, index) => {
            const isLive = match.status.includes("Live");
            const isToday = match.date === today;
            const teamNames = match.teams ? match.teams.join(" vs ") : "TBA";

            const team1Score = match.score.length > 0 ? match.score[0] : null;
            const team2Score = match.score.length > 1 ? match.score[1] : null;

            return (
              <div
                key={match.series_id}
                className={`scorecard-match-card ${isLive ? "live" : isToday ? "today" : ""}`}
                onClick={() => !isLive && toggleMatchDetails(index)} // Click only for non-live matches
              >
                <div className="scorecard-match-summary">
                  <span>{teamNames}</span>
                  <span>{match.matchType ? match.matchType.toUpperCase() : "TBA"}</span>
                </div>

                {/* Show details on hover for live matches, on click for others */}
                {(isLive || expandedMatch === index) && (
                  <div className="match-details show">
                    <p><strong>Venue:</strong> {match.venue || "TBA"}</p>
                    <p><strong>Status:</strong> {match.status || "Match not started"}</p>
                    <p><strong>Start Date:</strong> {match.date || "TBA"}</p>

                    {team1Score && (
                      <p>
                        <strong>{team1Score.inning}:</strong> {team1Score.r}/{team1Score.w} in {team1Score.o} overs
                      </p>
                    )}
                    {team2Score && (
                      <p>
                        <strong>{team2Score.inning}:</strong> {team2Score.r}/{team2Score.w} in {team2Score.o} overs
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="scorecard-no-matches">No live or upcoming matches.</p>
      )}
    </div>
  );
};

export default Scorecard;