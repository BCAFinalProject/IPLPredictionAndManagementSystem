import React, { useState } from 'react';
import './PlayerQuiz.css';
import { Link } from 'react-router-dom'; // <-- Add this import

import blurredImage from '../Images/bg1.jpg';
import viratimage from "../Images/virat.jpg"; // Update the path accordingly

const PlayerQuiz = () => {
  const [guess, setGuess] = useState('');
  const [correctAnswer] = useState('MS Dhoni'); // Example

  const handleSubmit = () => {
    alert(guess.toLowerCase() === correctAnswer.toLowerCase() ? 'Correct!' : 'Try Again');
  };

  return (
    <>
    <header className="home-header">
               <div className="home-logo">
                 <img src={viratimage} alt="Logo" className="home-logo-img" />
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
    <div className="player-quiz">
      <h2>Guess the Cricketer</h2>
      <img src={blurredImage} alt="Player" className="player-image" />
      <input
        type="text"
        placeholder="Enter cricketer name"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="guess-input"
      />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
    </>
  );
};

export default PlayerQuiz;