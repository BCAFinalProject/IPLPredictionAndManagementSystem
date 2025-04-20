import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import

import "./Mostfours.css";

// Import the new image for the player
import viratimage from "../Images/virat.jpg"; // Update the path accordingly
import logoImg from "../Images/ipl1.jpg"; // Update the path accordingly
const Mostfours = () => {
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
      <div className="banner-section">
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
    <Link to="/season-2024" className="dropdown-link">Season 2024</Link>
    <Link to="/season-2023" className="dropdown-link">Season 2023</Link>
    <Link to="/season-2022" className="dropdown-link">Season 2022</Link>
    <Link to="/season-2021" className="dropdown-link">Season 2021</Link>
    <Link to="/season-2020" className="dropdown-link">Season 2020</Link>
    <Link to="/season-2019" className="dropdown-link">Season 2019</Link>
    <Link to="/season-2018" className="dropdown-link">Season 2018</Link>
    <Link to="/season-2017" className="dropdown-link">Season 2017</Link>
    <Link to="/season-2016" className="dropdown-link">Season 2016</Link>
    <Link to="/season-2015" className="dropdown-link">Season 2015</Link>
    <Link to="/season-2014" className="dropdown-link">Season 2014</Link>
    <Link to="/season-2013" className="dropdown-link">Season 2013</Link>
    <Link to="/season-2012" className="dropdown-link">Season 2012</Link>
    <Link to="/season-2011" className="dropdown-link">Season 2011</Link>
    <Link to="/season-2010" className="dropdown-link">Season 2010</Link>
    <Link to="/season-2009" className="dropdown-link">Season 2009</Link>
    <Link to="/season-2008" className="dropdown-link">Season 2008</Link>
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
      <table className="stats-table">
        <thead>
          <tr>
            <th>POS</th>
            <th>PLAYER</th>
            <th>4S</th>
            <th>RUNS</th>
            <th>BF</th>
            <th>SR</th>
            <th>6S</th>
            <th>AGAINST</th>
            <th>VENUE</th>
            <th>MATCH DATE</th>
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
         Phil Salt</td>
  <td>14</td>
  <td>89</td>
  <td>47</td>
  <td>189.36</td>
  <td>3</td>
  <td>LSG</td>
  <td>Eden Gardens</td>
  <td>14 April 2024</td>
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
             Marcus Stoinis</td>
  <td>13</td>
  <td>124</td>
  <td>63</td>
  <td>196.82</td>
  <td>6</td>
  <td>CSK</td>
  <td>MA Chidambaram Stadium</td>
  <td>23 April 2024</td>
          </tr>
          <tr>
  <td>3</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Sunil Narine</td>
  <td>13</td>
  <td>109</td>
  <td>56</td>
  <td>194.64</td>
  <td>6</td>
  <td>RR</td>
  <td>Eden Gardens</td>
  <td>16 April 2024</td>
</tr>
<tr>
  <td>4</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Suryakumar Yadav</td>
  <td>12</td>
  <td>102</td>
  <td>51</td>
  <td>200.00</td>
  <td>6</td>
  <td>SRH</td>
  <td>Wankhede Stadium</td>
  <td>06 May 2024</td>
</tr>
<tr>
  <td>5</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Virat Kohli</td>
  <td>12</td>
  <td>113</td>
  <td>72</td>
  <td>156.94</td>
  <td>4</td>
  <td>RR</td>
  <td>Sawai Mansingh Stadium</td>
  <td>06 April 2024</td>
</tr>
<tr>
<td>6</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Ruturaj Gaikwad</td>
  <td>12</td>
  <td>108</td>
  <td>60</td>
  <td>180.00</td>
  <td>3</td>
  <td>LSG</td>
  <td>MA Chidambaram Stadium</td>
  <td>23 April 2024</td>
</tr>
<tr>
  <td>7</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Jake Fraser - McGurk</td>
  <td>11</td>
  <td>84</td>
  <td>27</td>
  <td>311.11</td>
  <td>6</td>
  <td>MI</td>
  <td>Arun Jaitley Stadium</td>
  <td>27 April 2024</td>
</tr>
<tr>
  <td>8</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Travis Head</td>
  <td>11</td>
  <td>89</td>
  <td>32</td>
  <td>278.12</td>
  <td>6</td>
  <td>DC</td>
  <td>Arun Jaitley Stadium</td>
  <td>20 April 2024</td>
</tr>
<tr>
  <td>9</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Virat Kohli</td>
  <td>11</td>
  <td>77</td>
  <td>49</td>
  <td>157.14</td>
  <td>2</td>
  <td>PBKS</td>
  <td>M Chinnaswamy Stadium</td>
  <td>25 March 2024</td>
  </tr>
<tr>
  <td>10</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Rohit Sharma</td>
  <td>11</td>
  <td>105</td>
  <td>63</td>
  <td>166.66</td>
  <td>5</td>
  <td>CSK</td>
  <td>Wankhede Stadium</td>
  <td>14 April 2024</td>
</tr>
<tr>
  <td>11</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Faf Du Plessis</td>
  <td>10</td>
  <td>64</td>
  <td>23</td>
  <td>278.26</td>
  <td>3</td>
  <td>GT</td>
  <td>M Chinnaswamy Stadium</td>
  <td>04 May 2024</td>
</tr>
<tr>
  <td>12</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    12</td>
  <td>Ruturaj Gaikwad</td>
  <td>10</td>
  <td>98</td>
  <td>54</td>
  <td>181.48</td>
  <td>3</td>
  <td>SRH</td>
  <td>MA Chidambaram Stadium</td>
  <td>28 April 2024</td>
</tr>
<tr>
  <td>13</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Shivam Dube</td>
  <td>10</td>
  <td>66</td>
  <td>38</td>
  <td>173.68</td>
  <td>2</td>
  <td>MI</td>
  <td>Wankhede Stadium</td>
  <td>14 April 2024</td>
</tr>
<tr>
  <td>14</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Rohit Sharma</td>
  <td>10</td>
  <td>68</td>
  <td>38</td>
  <td>178.94</td>
  <td>3</td>
  <td>LSG</td>
  <td>Wankhede Stadium</td>
  <td>17 May 2024</td>
</tr>
        <tr>
  <td>15</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Yashasvi Jaiswal</td>
  <td>9</td>
  <td>104</td>
  <td>60</td>
  <td>173.33</td>
  <td>7</td>
  <td>MI</td>
  <td>Sawai Mansingh Stadium</td>
  <td>22 April 2024</td>
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

export default Mostfours;
