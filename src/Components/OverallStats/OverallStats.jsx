import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import

import "./OverallStats.css";

// Import the new image for the player
import logoImg from "../Images/ipl1.jpg"; // Update the path accordingly
import viratimage from "../Images/virat.jpg"; // Update the path accordingly
const OverallStats = () => {
  const [playerType, setPlayerType] = useState("batters");
  const [statCategory, setStatCategory] = useState("");

  const handlePlayerTypeChange = (e) => {
    setPlayerType(e.target.value);
    setStatCategory(""); // Reset stat category when player type changes
  };

  const handleStatCategoryChange = (e) => {
    setStatCategory(e.target.value);
  };



  return (
    <div className="overall-stats-container">
      {/* Header Section */}
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

      {/* Banner Section */}
      <div className="orange-banner-section">
        <div className="top-player-info">
          <img
            src={viratimage} // Using the new uploaded image
            alt="Top Player"
            className="player-image"
          />
          <div className="player-stats">
            <div>741 Runs</div>
            <div>15 Matches</div>
            <div>61.75 Average</div>
            <div>154.69 Strike Rate</div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="statsfilter-section">
      <div className="dropdown">
  <span className="dropbtn">Seasons</span>
  <div className="dropdown-container">
    <Link to="/overallstats" className="dropdown-link">Season 2024</Link>
    
  </div>
</div>

      <select value={playerType} onChange={handlePlayerTypeChange}>
          <option value="batters">Batters</option>
          <option value="bowlers">Bowlers</option>
        </select>

        <select value={statCategory} onChange={handleStatCategoryChange}>
          <option value="">Select Category</option>
          {playerType === 'batters' && (
            <>
              <option value="Orange Cap">Orange Cap</option>
              <option value="Most Sixes">Most Sixes</option>
              <option value="Most Fours">Most Fours</option>
              <option value="Most 50s">Most 50s</option>
              <option value="Most 100s">Most 100s</option>
            </>
          )}
          {playerType === 'bowlers' && (
            <>
              <option value="Purple Cap">Purple Cap</option>
              <option value="Most Dots">Most Dots</option>
              <option value="Most Maidens">Most Maidens</option>
              <option value="Best Bowling Average">Best Bowling Average</option>
              <option value="Best Economy">Best Economy</option>
            </>
          )}
        </select>



        {/* Navigate to Most Sixes page when that option is selected */}
        {statCategory === 'Most Sixes' && (
          <Link to="/mostsixes" className="navigate-link">View Most Sixes Stats</Link>
        )}

        {/* Navigate to Most Sixes page when that option is selected */}
          {statCategory === 'Orange Cap' && (
                  <Link to="/overallStats" className="navigate-link">View Orange Cap Stats</Link>
                )}

                
         {statCategory === 'Most Fours' && (
                          <Link to="/mostfours" className="navigate-link">View Most Fours Stats</Link>
                        )}
                
         {statCategory === 'Most 50s' && (
                          <Link to="/mostfifties" className="navigate-link">View Most 50s Stats</Link>
                        )}
                  
         {statCategory === 'Most 100s' && (
                          <Link to="/mosthundreds" className="navigate-link">View Most 100s Stats</Link>
                        )} 

<div className="dropdown">
  <span className="dropbtn">Teams</span>
  <div className="dropdown-container">
    <Link to="/csk" className="dropdown-link">Chennai Super Kings</Link>
    <Link to="/mi" className="dropdown-link">Mumbai Indians</Link>
    <Link to="/rr" className="dropdown-link">Rajasthan Royals</Link>
    <Link to="/dc" className="dropdown-link">Delhi Capitals</Link>
    <Link to="/rcb" className="dropdown-link">Royal Challengers Bangalore</Link>
    <Link to="/kkr" className="dropdown-link">Kolkata Knight Riders</Link>
    <Link to="/pbks" className="dropdown-link">Punjab Kings</Link>
    <Link to="/gt" className="dropdown-link">Gujarat Titans</Link>
    <Link to="/srh" className="dropdown-link">Sunrisers Hyderabad</Link>
    <Link to="/lsg" className="dropdown-link">Lucknow Super Giants</Link>
  </div>
</div>
<div className="dropdown">
  <span className="dropbtn">Players</span>
  <div className="dropdown-container">
    <Link to="/all-players" className="dropdown-link">All Players</Link>
    <Link to="/indians" className="dropdown-link">Indians</Link>
    <Link to="/overseas" className="dropdown-link">Overseas</Link>
  </div>
</div>
      </div>

      {/* Stats Table */}
      <table className="orange-stats-table">
        <thead>
          <tr>
            <th>POS</th>
            <th>PLAYER</th>
            <th>RUNS</th>
            <th>MAT</th>
            <th>INN</th>
            <th>NO</th>
            <th>HS</th>
            <th>AVG</th>
            <th>BF</th>
            <th>SR</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>
            <img
            src={viratimage} // Using the new uploaded image for a player
            alt="Player"
            className="player-thumb"
            />
          Virat Kohli 
            </td>
            <td>741</td>
            <td>15</td>
            <td>15</td>
            <td>3</td>
            <td>113*</td>
            <td>61.75</td>
            <td>479</td>
            <td>154.69</td>
          </tr>
          {/* Example of another player */}
          <tr>
            <td>2</td>
            <td>
              <img
                src={viratimage} // Replace with another player's image if needed
                alt="Player"
                className="player-thumb"
              />
              Ruturaj Gaikwad
            </td>
            <td>583</td>
            <td>14</td>
            <td>14</td>
            <td>3</td>
            <td>108*</td>
            <td>53.00</td>
            <td>413</td>
            <td>141.16</td>
          </tr>
          <tr>
  <td>3</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Riyan Parag
  </td>
  <td>567</td>
  <td>14</td>
  <td>14</td>
  <td>3</td>
  <td>108*</td>
  <td>51.55</td>
  <td>413</td>
  <td>137.29</td>
</tr>
<tr>
  <td>4</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Travis Head
  </td>
  <td>533</td>
  <td>13</td>
  <td>13</td>
  <td>2</td>
  <td>101</td>
  <td>48.45</td>
  <td>400</td>
  <td>133.25</td>
</tr>
<tr>
  <td>5</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    B Sai Sudharsan
  </td>
  <td>527</td>
  <td>14</td>
  <td>14</td>
  <td>4</td>
  <td>95*</td>
  <td>52.70</td>
  <td>410</td>
  <td>128.54</td>
</tr>
<tr>
<td>6</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Nicholas Pooran
  </td>
  <td>510</td>
  <td>13</td>
  <td>13</td>
  <td>1</td>
  <td>89</td>
  <td>42.50</td>
  <td>380</td>
  <td>134.21</td>
</tr>
<tr>
  <td>7</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Heinrich Klaasen
  </td>
  <td>498</td>
  <td>12</td>
  <td>12</td>
  <td>2</td>
  <td>85*</td>
  <td>49.80</td>
  <td>370</td>
  <td>134.59</td>
</tr>
<tr>
  <td>8</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Faf du Plessis
  </td>
  <td>485</td>
  <td>13</td>
  <td>13</td>
  <td>1</td>
  <td>90</td>
  <td>40.41</td>
  <td>360</td>
  <td>134.72</td>
</tr>
<tr>
  <td>9</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Phil Salt
  </td>
  <td>472</td>
  <td>12</td>
  <td>12</td>
  <td>2</td>
  <td>87*</td>
  <td>47.20</td>
  <td>350</td>
  <td>134.86</td>
</tr>
<tr>
  <td>10</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Abhishek Sharma
  </td>
  <td>460</td>
  <td>14</td>
  <td>14</td>
  <td>3</td>
  <td>84</td>
  <td>41.82</td>
  <td>340</td>
  <td>135.29</td>
</tr>
<tr>
  <td>11</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    David Warner
  </td>
  <td>450</td>
  <td>12</td>
  <td>12</td>
  <td>2</td>
  <td>88*</td>
  <td>45.00</td>
  <td>330</td>
  <td>136.36</td>
</tr>
<tr>
  <td>12</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Shubman Gill
  </td>
  <td>445</td>
  <td>11</td>
  <td>11</td>
  <td>1</td>
  <td>94</td>
  <td>44.50</td>
  <td>325</td>
  <td>136.92</td>
</tr>
<tr>
  <td>13</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Jos Buttler
  </td>
  <td>430</td>
  <td>12</td>
  <td>12</td>
  <td>1</td>
  <td>100</td>
  <td>39.09</td>
  <td>320</td>
  <td>134.38</td>
</tr>
<tr>
  <td>14</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Suryakumar Yadav
  </td>
  <td>415</td>
  <td>11</td>
  <td>11</td>
  <td>2</td>
  <td>82*</td>
  <td>46.11</td>
  <td>310</td>
  <td>133.87</td>
</tr>
        <tr>
  <td>15</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    KL Rahul
  </td>
  <td>400</td>
  <td>10</td>
  <td>10</td>
  <td>2</td>
  <td>75</td>
  <td>50.00</td>
  <td>300</td>
  <td>133.33</td>
</tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>© 2024 Indian Premier League. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OverallStats;
