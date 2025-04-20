import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"; // Import Link for navigation

import './Bowlers.css'; // Ensure the correct CSS is included
import viratimage from "../Images/virat.jpg"; // Update the path accordingly


const bowlers = [
  { name: 'Matheesha Pathirana', img: require("../Images/matheesapathirana.jpeg"), achievements: 'Sri Lankan pace bowler' }, 
  { name: 'Noor Ahmad', img: require("../Images/noorahmad.jpeg"), achievements: 'Afghanistan left-arm wrist spinner' },
  { name: 'Syed Khaleel Ahmed', img: require("../Images/syedkhaleelahmed.jpeg"), achievements: 'Indian pacer for SRH' },
  { name: 'Shreyas Gopal', img: require("../Images/shreyasgopal.jpeg"), achievements: 'Leg spinner for Rajasthan Royals' },
  { name: 'Mukesh Choudhary', img: require("../Images/mukeshchoudhary.jpeg"), achievements: 'Bowler for CSK' },
  { name: 'Deepak Chahar', img: require("../Images/deepakchahar.jpeg"), achievements: 'Indian pacer for CSK' },
  { name: 'Dwayne Bravo', img: require("../Images/dwaynebravo.jpeg"), achievements: 'Experienced bowler for CSK' },
  { name: 'Tushar Deshpande', img: require("../Images/tushardeshpande.jpeg"), achievements: 'Paceman for CSK' },
  { name: 'Shivam Mavi', img: require("../Images/shivammavi.jpeg"), achievements: 'Indian fast bowler for KKR' },
  { name: 'Ravichandran Ashwin', img: require("../Images/ravichandranashwin.jpeg"), achievements: 'World-class off-spinner for RR' },
  { name: 'Nathan Ellis', img: require("../Images/nathanellis.jpeg"), achievements: 'Bowler for Punjab Kings' },
  { name: 'Mitchell Starc', img: require("../Images/mitchellstarc.jpeg"), achievements: 'Australia pacer' },
  { name: 'T. Natarajan', img: require("../Images/tnatarajan.jpeg"), achievements: 'India pacer for SRH' },
  { name: 'Mukesh Kumar', img: require("../Images/mukeshkumar.jpeg"), achievements: 'Indian fast bowler' },
  { name: 'Mohit Sharma', img: require("../Images/mohitsharma.jpeg"), achievements: 'Bowler for CSK' },
  { name: 'Dushmantha Chameera', img: require("../Images/dushmanthachameera.jpeg"), achievements: 'Sri Lanka pacer' },
  { name: 'Kuldeep Yadav', img: require("../Images/kuldeepyadav.jpeg"), achievements: 'India left-arm wrist spinner' },
  { name: 'Mohammad Siraj', img: require("../Images/mohammadsiraj.jpeg"), achievements: 'India fast bowler' },
  { name: 'Kagiso Rabada', img: require("../Images/kagisorabada.jpeg"), achievements: 'South Africa pacer' },
  { name: 'Prasidh Krishna', img: require("../Images/prasidhkrishna.jpeg"), achievements: 'India fast bowler' },
  { name: 'Gerald Coetzee', img: require("../Images/geraldcoetzee.jpeg"), achievements: 'South Africa pacer' },
  { name: 'Ishant Sharma', img: require("../Images/ishantsharma.jpeg"), achievements: 'India fast bowler' },
  { name: 'Kulwant Khejroliya', img: require("../Images/kulwantkhejroliya.jpeg"), achievements: 'Indian pacer' },
  { name: 'Manav Suthar', img: require("../Images/manavsuthar.jpeg"), achievements: 'Indian pacer' },
  { name: 'Gurnoor Singh Brar', img: require("../Images/gurnoonsinghbrar.jpeg"), achievements: 'Bowler for Punjab Kings' },
  { name: 'Rahul Tewatia', img: require("../Images/rahultewatia.jpeg"), achievements: 'All-rounder for RR' },
  { name: 'Rashid Khan', img: require("../Images/rashidkhan.jpeg"), achievements: 'Afghanistan leg spinner' },
  { name: 'Varun Chakaravarthy', img: require("../Images/varunchakaravarthy.jpeg"), achievements: 'KKR mystery spinner' },
  { name: 'Sunil Narine', img: require("../Images/sunilnarine.jpeg"), achievements: 'West Indies spinner' },
  { name: 'Harshit Rana', img: require("../Images/harshitrana.jpeg"), achievements: 'Bowler for KKR' },
  { name: 'Anrich Nortje', img: require("../Images/anrichnortje.jpeg"), achievements: 'South Africa pacer for DC' },
  { name: 'Spencer Johnson', img: require("../Images/spencerjohnson.jpeg"), achievements: 'Australia pacer' },
  { name: 'Vaibhav Arora', img: require("../Images/vaibhavarora.jpeg"), achievements: 'Bowler for KKR' },
  { name: 'Umran Malik', img: require("../Images/umranmalik.jpeg"), achievements: 'India pacer for SRH' },
  { name: 'Mayank Markande', img: require("../Images/mayankmarkande.jpeg"), achievements: 'Leg spinner for MI' },
  { name: 'Ravi Bishnoi', img: require("../Images/ravibishnoi.jpeg"), achievements: 'India leg spinner for PBKS' },
  { name: 'Mayank Yadav', img: require("../Images/mayankyadav.jpeg"), achievements: 'Bowler for MI' },
  { name: 'Mohsin Khan', img: require("../Images/mohsinkhan.jpeg"), achievements: 'Left-arm pacer for MI' },
  { name: 'Avesh Khan', img: require("../Images/aveshkhan.jpeg"), achievements: 'India pacer for DC' },
  { name: 'Akash Deep', img: require("../Images/akashdeep.jpeg"), achievements: 'Pacer for RCB' },
  { name: 'M. Siddharth', img: require("../Images/msiddharth.jpeg"), achievements: 'Spinner for RCB' },
  { name: 'Prince Yadav', img: require("../Images/princeyadav.jpeg"), achievements: 'Pacer for SRH' },
  { name: 'Akash Singh', img: require("../Images/akashsingh.jpeg"), achievements: 'Bowler for RR' },
  { name: 'Digvesh Singh', img: require("../Images/digveshsingh.jpeg"), achievements: 'Bowler for RR' },
  { name: 'Shamar Joseph', img: require("../Images/shamarjoseph.jpeg"), achievements: 'Bowler for CSK' },
  { name: 'Jasprit Bumrah', img: require("../Images/jaspritbumrah.jpeg"), achievements: 'India pacer for MI' },
  { name: 'Trent Boult', img: require("../Images/trentboult.jpeg"), achievements: 'New Zealand pacer' },
  { name: 'Lizaad Williams', img: require("../Images/lizaadwilliams.jpeg"), achievements: 'South Africa pacer' },
  { name: 'Reece Topley', img: require("../Images/reecetopley.jpeg"), achievements: 'England pacer' },
  { name: 'Karn Sharma', img: require("../Images/karnsharma.jpeg"), achievements: 'Leg spinner for CSK' },
  { name: 'Venkata Satyanarayana Penmetsa', img: require("../Images/venkatasatyanarayanapenmetsa.jpeg"), achievements: 'Indian pacer' },
  { name: 'Arjun Tendulkar', img: require("../Images/arjuntendulkar.jpeg"), achievements: 'India pacer for MI' },
  { name: 'Allah Ghazanfar', img: require("../Images/allahghazanfar.jpeg"), achievements: 'Bowler for RR' },
  { name: 'Yuzvendra Chahal', img: require("../Images/yuzvendrachahal.jpeg"), achievements: 'India leg spinner for RR' },
  { name: 'Arshdeep Singh', img: require("../Images/arshdeepsingh.jpeg"), achievements: 'India pacer for PBKS' },
  { name: 'Lockie Ferguson', img: require("../Images/lockieferguson.jpeg"), achievements: 'New Zealand pacer for KKR' },
  { name: 'Vyshak Vijaykumar', img: require("../Images/vyshakvijaykumar.jpeg"), achievements: 'Bowler for RCB' },
  { name: 'Yash Thakur', img: require("../Images/yashthakur.jpeg"), achievements: 'Bowler for RR' },
  { name: 'Xavier Bartlett', img: require("../Images/xavierbartlett.jpeg"), achievements: 'Bowler for RCB' },
  { name: 'Kuldeep Sen', img: require("../Images/kuldeepsen.jpeg"), achievements: 'Bowler for RR' },
  { name: 'Sandeep Sharma', img: require("../Images/sandeepsharma.jpeg"), achievements: 'India pacer for SRH' },
  { name: 'Jofra Archer', img: require("../Images/jofraarcher.jpeg"), achievements: 'England pacer for MI' },
  { name: 'Tushar Deshpande', img: require("../Images/tushardeshpande.jpeg"), achievements: 'Paceman for CSK' },
  { name: 'Wanindu Hasaranga', img: require("../Images/waninduhasaranga.jpeg"), achievements: 'Sri Lanka spinner for RCB' },
  { name: 'Andre Russell', img: require("../Images/andrerussell.jpeg"), achievements: 'West Indies all-rounder for KKR' },
  
];

const Bowlers = () => {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = (player) => {
    setSelected((prevSelected) => {
      const updatedSelected = prevSelected.some((p) => p.name === player.name)
        ? prevSelected.filter((p) => p.name !== player.name)
        : [...prevSelected, player];
      localStorage.setItem("selectedBowlers", JSON.stringify(updatedSelected));
      return updatedSelected;
    });
  };

  const handleSubmit = () => {
    if (selected.length === 0) {
      setError("Please select at least one bowler.");
      return;
    }
    setSuccessMessage("Bowlers successfully selected!");
    setError("");
  };

  const filteredBowlers = bowlers.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <div className="bowlers-container">
      <h1>Select Bowlers</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search bowlers..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="bowlers-list">
        {filteredBowlers.map((player, index) => (
          <div
            key={index}
            className={`bowler-card ${selected.some((p) => p.name === player.name) ? "selected" : ""}`}
            onClick={() => handleSelect(player)}
          >
            <img src={player.img} alt={player.name} />
            <div className="bowler-info">
              <h3>{player.name}</h3>
              <p>{player.achievements}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
    </>
  );
};

export default Bowlers;