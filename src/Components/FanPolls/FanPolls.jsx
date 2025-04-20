import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FanPolls.css';
import logoImg from '../Images/bg1.jpg';


const FanPolls = () => {
  const [pollResults, setPollResults] = useState({
    biggestFanbase: [40, 60], // MI vs CSK
    bestCaptain: [70, 30], // MS Dhoni vs Rohit Sharma
    mostIconicMoment: [45, 55], // Moments
    favoriteAllRounder: [50, 50], // Hardik Pandya vs Ravindra Jadeja
    mostExcitingVenue: [60, 40], // Wankhede vs Chinnaswamy
    favoriteForeignPlayer: [33, 33, 34], // AB de Villiers, David Warner, Rashid Khan
  });

  const [selectedOption, setSelectedOption] = useState({
    biggestFanbase: null,
    bestCaptain: null,
    mostIconicMoment: null,
    favoriteAllRounder: null,
    mostExcitingVenue: null,
    favoriteForeignPlayer: null,
  });

  const handleVote = (category, index) => {
    if (selectedOption[category] !== null) return;
    const updatedResults = { ...pollResults };
    updatedResults[category][index] += 1;
    setPollResults(updatedResults);

    const updatedSelectedOption = { ...selectedOption };
    updatedSelectedOption[category] = index;
    setSelectedOption(updatedSelectedOption);
  };

  return (
      <>
          <header className="home-header">
                  <div className="home-logo">
                    <img src={logoImg} alt="Logo" className="home-logo-img" />
                  </div>
                  <nav className="home-nav">
                    <Link to="/home" className="home-nav-link">Home</Link>
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
                  
                </header>
    <div className="fan-polls">
      <h2>Fan Polls: Celebrate IPL Passion!</h2>

      {/* Biggest Fanbase Poll */}
      <div className="poll-category">
        <h3>Which franchise has the biggest fanbase?</h3>
        <div className="poll-options">
          {['MI', 'CSK'].map((team, index) => (
            <button
              key={index}
              className={`poll-button ${selectedOption.biggestFanbase === index ? 'selected' : ''}`}
              onClick={() => handleVote('biggestFanbase', index)}
            >
              {team} ({pollResults.biggestFanbase[index]}%)
            </button>
          ))}
        </div>
      </div>

      {/* Best Captain Poll */}
      <div className="poll-category">
        <h3>Who is the best IPL captain?</h3>
        <div className="poll-options">
          {['MS Dhoni (CSK)', 'Rohit Sharma (MI)'].map((captain, index) => (
            <button
              key={index}
              className={`poll-button ${selectedOption.bestCaptain === index ? 'selected' : ''}`}
              onClick={() => handleVote('bestCaptain', index)}
            >
              {captain} ({pollResults.bestCaptain[index]}%)
            </button>
          ))}
        </div>
      </div>

      {/* Most Iconic Moment Poll */}
      <div className="poll-category">
        <h3>What is the most iconic IPL moment?</h3>
        <div className="poll-options">
          {['Dhoni’s final six (2011)', 'Gayle’s 175 runs (2013)'].map((moment, index) => (
            <button
              key={index}
              className={`poll-button ${selectedOption.mostIconicMoment === index ? 'selected' : ''}`}
              onClick={() => handleVote('mostIconicMoment', index)}
            >
              {moment} ({pollResults.mostIconicMoment[index]}%)
            </button>
          ))}
        </div>
      </div>

      {/* Favorite All-Rounder Poll */}
      <div className="poll-category">
        <h3>Who is your favorite all-rounder?</h3>
        <div className="poll-options">
          {['Hardik Pandya (GT)', 'Ravindra Jadeja (CSK)'].map((player, index) => (
            <button
              key={index}
              className={`poll-button ${selectedOption.favoriteAllRounder === index ? 'selected' : ''}`}
              onClick={() => handleVote('favoriteAllRounder', index)}
            >
              {player} ({pollResults.favoriteAllRounder[index]}%)
            </button>
          ))}
        </div>
      </div>

      {/* Most Exciting Venue Poll */}
      <div className="poll-category">
        <h3>Which is the most exciting IPL venue?</h3>
        <div className="poll-options">
          {['Wankhede Stadium (MI)', 'Chinnaswamy Stadium (RCB)'].map((venue, index) => (
            <button
              key={index}
              className={`poll-button ${selectedOption.mostExcitingVenue === index ? 'selected' : ''}`}
              onClick={() => handleVote('mostExcitingVenue', index)}
            >
              {venue} ({pollResults.mostExcitingVenue[index]}%)
            </button>
          ))}
        </div>
      </div>

      {/* Favorite Foreign Player Poll */}
      <div className="poll-category">
        <h3>Who is your favorite foreign player?</h3>
        <div className="poll-options">
          {['AB de Villiers', 'David Warner', 'Rashid Khan'].map((player, index) => (
            <button
              key={index}
              className={`poll-button ${selectedOption.favoriteForeignPlayer === index ? 'selected' : ''}`}
              onClick={() => handleVote('favoriteForeignPlayer', index)}
            >
              {player} ({pollResults.favoriteForeignPlayer[index]}%)
            </button>
          ))}
        </div>
      </div>

      {/* Poll Results */}
      <div className="results">
        <h3>Live Results</h3>
        <p>Biggest Fanbase: MI {pollResults.biggestFanbase[0]}% vs CSK {pollResults.biggestFanbase[1]}%</p>
        <p>Best Captain: MS Dhoni {pollResults.bestCaptain[0]}% | Rohit Sharma {pollResults.bestCaptain[1]}%</p>
        <p>Most Iconic Moment: Dhoni’s Six {pollResults.mostIconicMoment[0]}% | Gayle’s 175 {pollResults.mostIconicMoment[1]}%</p>
        <p>Favorite All-Rounder: Hardik Pandya {pollResults.favoriteAllRounder[0]}% | Ravindra Jadeja {pollResults.favoriteAllRounder[1]}%</p>
        <p>Most Exciting Venue: Wankhede {pollResults.mostExcitingVenue[0]}% | Chinnaswamy {pollResults.mostExcitingVenue[1]}%</p>
        <p>Favorite Foreign Player: AB de Villiers {pollResults.favoriteForeignPlayer[0]}% | David Warner {pollResults.favoriteForeignPlayer[1]}% | Rashid Khan {pollResults.favoriteForeignPlayer[2]}%</p>
      </div>
    </div>
    </>

  );
};

export default FanPolls;