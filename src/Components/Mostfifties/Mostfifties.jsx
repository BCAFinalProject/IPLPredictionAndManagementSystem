import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import

import "./Mostfifties.css";

// Import the new image for the player
import viratimage from "../Images/virat.jpg"; // Update the path accordingly
const Mostfifties = () => {
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
            <th>50S</th>
            <th>MAT</th>
            <th>INN</th>
            <th>NO</th>
            <th>RUNS</th>
            <th>HS</th>
            <th>AVG</th>
            <th>BF</th>
            <th>SR</th>
            <th>100S</th>
            <th>4s</th>
            <th>6s</th>
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
        Rajat Patidar</td>
  <td>5</td>
  <td>15</td>
  <td>13</td>
  <td>0</td>
  <td>395</td>
  <td>55</td>
  <td>30.38</td>
  <td>223</td>
  <td>177.13</td>
  <td>0</td>
  <td>21</td>
  <td>33</td>
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
            Sanju Samson</td>
  <td>5</td>
  <td>16</td>
  <td>15</td>
  <td>4</td>
  <td>531</td>
  <td>86</td>
  <td>48.27</td>
  <td>346</td>
  <td>153.46</td>
  <td>0</td>
  <td>48</td>
  <td>24</td>
          </tr>
          <tr>
  <td>3</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Virat Kohli</td>
  <td>5</td>
  <td>15</td>
  <td>15</td>
  <td>3</td>
  <td>741</td>
  <td>113*</td>
  <td>61.75</td>
  <td>479</td>
  <td>154.69</td>
  <td>1</td>
  <td>62</td>
  <td>38</td>
</tr>
<tr>
  <td>4</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Jake Fraser - McGurk</td>
  <td>4</td>
  <td>9</td>
  <td>9</td>
  <td>0</td>
  <td>330</td>
  <td>84</td>
  <td>36.67</td>
  <td>141</td>
  <td>234.04</td>
  <td>0</td>
  <td>32</td>
  <td>28</td>
</tr>
<tr>
  <td>5</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Phil Salt</td>
  <td>4</td>
  <td>12</td>
  <td>12</td>
  <td>1</td>
  <td>435</td>
  <td>89*</td>
  <td>39.55</td>
  <td>239</td>
  <td>182.00</td>
  <td>0</td>
  <td>50</td>
  <td>24</td>
</tr>
<tr>
<td>6</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Venkatesh Iyer</td>
  <td>4</td>
  <td>15</td>
  <td>13</td>
  <td>5</td>
  <td>370</td>
  <td>70</td>
  <td>46.25</td>
  <td>233</td>
  <td>158.79</td>
  <td>0</td>
  <td>35</td>
  <td>19</td>
</tr>
<tr>
  <td>7</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Ruturaj Gaikwad</td>
  <td>4</td>
  <td>14</td>
  <td>14</td>
  <td>3</td>
  <td>583</td>
  <td>108*</td>
  <td>53.00</td>
  <td>413</td>
  <td>141.16</td>
  <td>1</td>
  <td>58</td>
  <td>18</td>
</tr>
<tr>
  <td>8</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Riyan Parag</td>
  <td>4</td>
  <td>16</td>
  <td>14</td>
  <td>3</td>
  <td>573</td>
  <td>84*</td>
  <td>52.09</td>
  <td>384</td>
  <td>149.21</td>
  <td>0</td>
  <td>40</td>
  <td>33</td>
</tr>
<tr>
  <td>9</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    K L Rahul</td>
  <td>4</td>
  <td>14</td>
  <td>14</td>
  <td>0</td>
  <td>520</td>
  <td>82</td>
  <td>37.14</td>
  <td>382</td>
  <td>136.12</td>
  <td>0</td>
  <td>45</td>
  <td>19</td>
  </tr>
<tr>
  <td>10</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Faf Du Plessis</td>
  <td>4</td>
  <td>15</td>
  <td>15</td>
  <td>0</td>
  <td>438</td>
  <td>64</td>
  <td>29.20</td>
  <td>271</td>
  <td>161.62</td>
  <td>0</td>
  <td>47</td>
  <td>21</td>
</tr>
<tr>
  <td>11</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Heinrich Klaasen</td>
  <td>4</td>
  <td>16</td>
  <td>15</td>
  <td>3</td>
  <td>479</td>
  <td>80*</td>
  <td>39.92</td>
  <td>280</td>
  <td>171.07</td>
  <td>0</td>
  <td>19</td>
  <td>38</td>
</tr>
<tr>
  <td>12</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    12</td>
  <td>Travis Head</td>
  <td>4</td>
  <td>15</td>
  <td>15</td>
  <td>1</td>
  <td>567</td>
  <td>102</td>
  <td>40.50</td>
  <td>296</td>
  <td>191.55</td>
  <td>1</td>
  <td>64</td>
  <td>32</td>
</tr>
<tr>
  <td>13</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Suryakumar Yadav</td>
  <td>3</td>
  <td>11</td>
  <td>11</td>
  <td>1</td>
  <td>345</td>
  <td>102*</td>
  <td>34.50</td>
  <td>206</td>
  <td>167.47</td>
  <td>1</td>
  <td>36</td>
  <td>18</td>
</tr>
<tr>
  <td>14</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Quinton De Kock</td>
  <td>3</td>
  <td>11</td>
  <td>11</td>
  <td>0</td>
  <td>250</td>
  <td>81</td>
  <td>22.73</td>
  <td>186</td>
  <td>134.40</td>
  <td>0</td>
  <td>29</td>
  <td>9</td>
</tr>
        <tr>
  <td>15</td>
  <td>
    <img src={viratimage} alt="Player" className="player-thumb" />
    Tristan Stubbs</td>
  <td>3</td>
  <td>14</td>
  <td>13</td>
  <td>6</td>
  <td>378</td>
  <td>71*</td>
  <td>54.00</td>
  <td>198</td>
  <td>190.90</td>
  <td>0</td>
  <td>24</td>
  <td>26</td>
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

export default Mostfifties;

