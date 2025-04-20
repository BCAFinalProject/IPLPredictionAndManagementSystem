import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

import { useNavigate } from "react-router-dom";
import "./AllRounders.css"; // Ensure the correct CSS is included.

import viratimage from "../Images/virat.jpg"; // Update the path accordingly


const allRounders = [
  { name: 'Shivam Dube', img: require("../Images/shivamdube.jpeg"), achievements: 'Indian all-rounder, known for his batting and bowling skills' },
  { name: 'Ravichandran Ashwin', img: require("../Images/ravichandranashwin.jpeg"), achievements: 'World-class off-spinner for India, known for his batting ability' },
  { name: 'Ravindra Jadeja', img: require("../Images/ravindrajadeja.jpeg"), achievements: 'All-rounder for India, excellent in both batting and bowling' },
  { name: 'Vijay Shankar', img: require("../Images/vijayshankar.jpeg"), achievements: 'Indian all-rounder, known for his batting and medium-fast bowling' },
  { name: 'Sam Curran', img: require("../Images/samcurran.jpeg"), achievements: 'English all-rounder, known for his left-arm pace and batting ability' },
  { name: 'Anshul Kamboj', img: require("../Images/anshulkamboj.jpeg"), achievements: 'Indian all-rounder, plays in domestic cricket' },
  { name: 'Deepak Hooda', img: require("../Images/deepakhooda.jpeg"), achievements: 'Indian all-rounder, known for his aggressive batting and useful bowling' },
  { name: 'Rachin Ravindra', img: require("../Images/rachinravindra.jpeg"), achievements: 'New Zealand all-rounder, known for his left-arm orthodox spin and batting' },
  { name: 'Jamie Overton', img: require("../Images/jamieoverton.jpeg"), achievements: 'English all-rounder, known for his pace bowling and batting' },
  { name: 'Kamlesh Nagarkoti', img: require("../Images/kamleshnagarkoti.jpeg"), achievements: 'Indian fast bowler and all-rounder for Kolkata Knight Riders' },
  { name: 'Ramakrishna Ghosh', img: require("../Images/ramakrishnaghosh.jpeg"), achievements: 'All-rounder for Bengal, known for his batting and medium-fast bowling' },
  { name: 'Sameer Rizvi', img: require("../Images/sameerrizvi.jpeg"), achievements: 'Indian all-rounder, known for his consistent batting and bowling performances' },
  { name: 'Axar Patel', img: require("../Images/axarpatel.jpeg"), achievements: 'Indian all-rounder, known for his left-arm spin and lower-order batting' },
  { name: 'Ashutosh Sharma', img: require("../Images/ashutoshsharma.jpeg"), achievements: 'All-rounder for Uttarakhand, known for his contributions with bat and ball' },
  { name: 'Ajay Mandal', img: require("../Images/ajaymandal.jpeg"), achievements: 'All-rounder for Bihar, known for his batting and spin bowling' },
  { name: 'Darshan Nalkande', img: require("../Images/darshannalkande.jpeg"), achievements: 'Indian all-rounder, known for his batting and bowling in domestic cricket' },
  { name: 'Vipraj Nigam', img: require("../Images/viprajnigam.jpeg"), achievements: 'All-rounder for Uttar Pradesh, known for his batting and bowling contributions' },
  { name: 'Madhav Tiwari', img: require("../Images/madhavtiwari.jpeg"), achievements: 'All-rounder for Jharkhand, known for his all-round cricketing ability' },
  { name: 'Tripurana Vijay', img: require("../Images/tripuranavijay.jpeg"), achievements: 'Indian all-rounder, known for his performances in domestic cricket' },
  { name: 'Washington Sundar', img: require("../Images/washingtonsundar.jpeg"), achievements: 'Indian all-rounder, known for his left-arm spin and batting' },
  { name: 'Mohd. Arshad Khan', img: require("../Images/mohdarshadkhan.jpeg"), achievements: 'All-rounder for Jammu & Kashmir, known for his batting and medium pace' },
  { name: 'Nishant Sindhu', img: require("../Images/nishantsindhu.jpeg"), achievements: 'Indian all-rounder, known for his batting and spin bowling' },
  { name: 'Mahipal Lomror', img: require("../Images/mahipallomror.jpeg"), achievements: 'Indian all-rounder, known for his left-arm spin and aggressive batting' },
  { name: 'R. Sai Kishore', img: require("../Images/rsaikishore.jpeg"), achievements: 'Indian left-arm spinner, also known for his batting abilities' },
  { name: 'Jayant Yadav', img: require("../Images/jayantyadav.jpeg"), achievements: 'Indian all-rounder, known for his off-spin and lower-order batting' },
  { name: 'Karim Janat', img: require("../Images/karimjanat.jpeg"), achievements: 'Afghan all-rounder, known for his hard-hitting batting and medium pace' },
  { name: 'Sai Sudharsan', img: require("../Images/saisudharsan.jpeg"), achievements: 'Indian all-rounder, known for his performances in domestic cricket' },
  { name: 'Shahrukh Khan', img: require("../Images/shahrukhkhan.jpeg"), achievements: 'Indian all-rounder, known for his aggressive batting and useful bowling' },
  { name: 'Andre Russell', img: require("../Images/andrerussell.jpeg"), achievements: 'West Indian all-rounder, known for his explosive batting and pace bowling' },
  { name: 'Venkatesh Iyer', img: require("../Images/venkateshiyer.jpeg"), achievements: 'Indian all-rounder, known for his batting and medium pace bowling' },
  { name: 'Moeen Ali', img: require("../Images/moeenali.jpeg"), achievements: 'English all-rounder, known for his off-spin and aggressive batting' },
  { name: 'Ramandeep Singh', img: require("../Images/ramandeepsingh.jpeg"), achievements: 'Indian all-rounder, known for his batting and medium-fast bowling' },
  { name: 'Anukul Roy', img: require("../Images/anukulroy.jpeg"), achievements: 'Indian all-rounder, known for his left-arm spin and useful batting' },
  { name: 'Mitchell Marsh', img: require("../Images/mitchellmarsh.jpeg"), achievements: 'Australian all-rounder, known for his batting and pace bowling' },
  { name: 'Abdul Samad', img: require("../Images/abdulsamad.jpeg"), achievements: 'Indian all-rounder, known for his powerful batting and occasional bowling' },
  { name: 'Shahbaz Ahamad', img: require("../Images/shahbazaahamad.jpeg"), achievements: 'Indian all-rounder, known for his batting and left-arm spin bowling' },
  { name: 'Yuvraj Chaudhary', img: require("../Images/yuvrajchaudhary.jpeg"), achievements: 'Indian all-rounder, known for his cricketing contributions in domestic tournaments' },
  { name: 'Rajvardhan Hangargekar', img: require("../Images/rajvardhanhangargekar.jpeg"), achievements: 'Indian all-rounder, known for his fast bowling and batting' },
  { name: 'Arshin Kulkarni', img: require("../Images/arshinkulkarni.jpeg"), achievements: 'Indian all-rounder, known for his performances in the domestic circuit' },
  { name: 'Ayush Badoni', img: require("../Images/ayushbadoni.jpeg"), achievements: 'Indian all-rounder, known for his batting and useful bowling' },
  { name: 'Hardik Pandya', img: require("../Images/hardikpandya.jpeg"), achievements: 'Indian all-rounder, known for his fast bowling and aggressive batting' },
  { name: 'Naman Dhir', img: require("../Images/namandhir.jpeg"), achievements: 'Indian all-rounder, known for his contributions in domestic cricket' },
  { name: 'Will Jacks', img: require("../Images/willjacks.jpeg"), achievements: 'English all-rounder, known for his batting and spin bowling' },
  { name: 'Mitchell Santner', img: require("../Images/mitchellsantner.jpeg"), achievements: 'New Zealand all-rounder, known for his left-arm spin and lower-order batting' },
  { name: 'Raj Angad Bawa', img: require("../Images/rajangadbawa.jpeg"), achievements: 'Indian all-rounder, known for his batting and left-arm pace bowling' },
  { name: 'Vignesh Puthur', img: require("../Images/vigneshputhur.jpeg"), achievements: 'Indian all-rounder, known for his aggressive batting and medium-fast bowling' },
  { name: 'Marcus Stoinis', img: require("../Images/marcusstoinis.jpeg"), achievements: 'Australian all-rounder, known for his powerful batting and medium pace bowling' },
  { name: 'Marco Jansen', img: require("../Images/marcojansen.jpeg"), achievements: 'South African all-rounder, known for his pace bowling and batting' },
  { name: 'Harpreet Brar', img: require("../Images/harpreetbrar.jpeg"), achievements: 'Indian all-rounder, known for his spin bowling and batting' },
  { name: 'Aaron Hardie', img: require("../Images/aaronhardie.jpeg"), achievements: 'Australian all-rounder, known for his fast bowling and batting' },
  { name: 'Suryansh Shedge', img: require("../Images/suryanshshedge.jpeg"), achievements: 'Indian all-rounder, known for his batting and medium-fast bowling' },
  { name: 'Musheer Khan', img: require("../Images/musheerkhan.webp"), achievements: 'Indian all-rounder, known for his batting and bowling skills' },
  { name: 'Azmatullah Omarzai', img: require("../Images/azmatullahomaerzai.jpeg"), achievements: 'Afghan all-rounder, known for his pace bowling and aggressive batting' },
];

const AllRounders = () => {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = (player) => {
    setSelected((prevSelected) => {
      const updatedSelected = prevSelected.some((p) => p.name === player.name)
        ? prevSelected.filter((p) => p.name !== player.name)
        : [...prevSelected, player];
      localStorage.setItem("selectedAllRounders", JSON.stringify(updatedSelected));
      return updatedSelected;
    });
  };

  const handleSubmit = () => {
    if (selected.length === 0) {
      setError("Please select at least one all-rounder.");
      return;
    }
    setSuccessMessage("All-rounders successfully selected!");
    setError("");
  };

  const filteredAllRounders = allRounders.filter((player) =>
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
    <div className="allrounders-container">
      <h1>Select All-Rounders</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search all-rounders..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="allrounders-list">
        {filteredAllRounders.map((player, index) => (
          <div
            key={index}
            className={`allrounder-card ${
              selected.some((p) => p.name === player.name) ? "selected" : ""
            }`}
            onClick={() => handleSelect(player)}
          >
            <img src={player.img} alt={player.name} />
            <div className="allrounder-info">
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

export default AllRounders;