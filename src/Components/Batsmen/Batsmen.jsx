import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation


import "./Batsmen.css"; // Make sure the correct CSS is included

import viratimage from "../Images/virat.jpg"; // Update the path accordingly

const batsmen = [
  { name: 'MS Dhoni', img: require("../Images/msdhoni.jpg"), achievements: 'Captain of Chennai Super Kings' },
  { name: 'Virat Kohli', img: require("../Images/viratkohli.jpg"), achievements: 'India’s top batsman' },
  { name: 'Ruturaj Gaikwad', img: require("../Images/ruturaj.jpg"), achievements: 'Top scorer in IPL 2023' },
  { name: 'Devon Conway', img: require("../Images/devon.jpg"), achievements: 'Top scorer for CSK' },
  { name: 'Faf Du Plessis', img: require("../Images/fafduplessis.jpg"), achievements: 'Top scorer for Royal Challengers Bangalore' },
  { name: 'Rahul Tripathi', img: require("../Images/rahultripathi.jpg"), achievements: 'Top order batsman for SRH' },
  { name: 'Abhishek Porel', img: require("../Images/abhishekporel.jpeg"), achievements: 'Power hitter for his team' },
  { name: 'KL Rahul', img: require("../Images/klrahul.jpg"), achievements: 'Top batsman for Punjab Kings' },
  { name: 'Harry Brook', img: require("../Images/harrybrook.jpg"), achievements: 'Promising talent from England' },
  { name: 'Donovan Ferreira', img: require("../Images/donovanferreira.jpg"), achievements: 'Emerging batsman from South Africa' },
  { name: 'Karun Nair', img: require("../Images/karunnair.jpg"), achievements: 'Experienced Indian batsman' },
  { name: 'Jake Fraser-Mcgurk', img: require("../Images/jakefrasermcgurk.jpg"), achievements: 'Australia’s promising young talent' },
  { name: 'Shubman Gill', img: require("../Images/shubmangill.jpg"), achievements: 'Top scorer for Gujarat Titans' },
  { name: 'Jos Buttler', img: require("../Images/josbuttler.jpg"), achievements: 'Explosive English wicketkeeper-batsman' },
  { name: 'Glenn Phillips', img: require("../Images/glennphillips.jpg"), achievements: 'Big hitter for New Zealand' },
  { name: 'Anuj Rawat', img: require("../Images/anujrawat.jpg"), achievements: 'Rising star for Rajasthan Royals' },
  { name: 'Kumar Kushagra', img: require("../Images/kumarkushagra.jpg"), achievements: 'Batsman with a solid technique' },
  { name: 'Sherfane Rutherford', img: require("../Images/sherfanerutherford.jpg"), achievements: 'Hard-hitting West Indian batsman' },
  { name: 'Rinku Singh', img: require("../Images/rinkusingh.jpg"), achievements: 'Top finisher for KKR' },
  { name: 'Quinton De Kock', img: require("../Images/quintondekock.jpg"), achievements: 'South African wicketkeeper-batsman' },
  { name: 'Angkrish Raghuvanshi', img: require("../Images/angkrishraghuvanshi.jpg"), achievements: 'Young and talented batsman' },
  { name: 'Rahmanullah Gurbaz', img: require("../Images/rahmanullahgurbaz.jpg"), achievements: 'Explosive opener from Afghanistan' },
  { name: 'Ajinkya Rahane', img: require("../Images/ajinkyarahane.jpg"), achievements: 'Experienced Indian batsman' },
  { name: 'Rovman Powell', img: require("../Images/rovmanpowell.jpg"), achievements: 'Big hitter from West Indies' },
  { name: 'Manish Pandey', img: require("../Images/manishpandey.jpg"), achievements: 'Top-order batsman for India' },
  { name: 'Luvnith Sisodia', img: require("../Images/luvithsisodia.jpg"), achievements: 'Promising young batsman' },
  { name: 'Nicholas Pooran', img: require("../Images/nicholaspuran.jpg"), achievements: 'West Indian explosive batsman' },
  { name: 'Rishabh Pant', img: require("../Images/rishabhpant.jpg"), achievements: 'India wicketkeeper-batsman' },
  { name: 'David Miller', img: require("../Images/davidmiller.jpg"), achievements: 'Power hitter for Rajasthan Royals' },
  { name: 'Aiden Markram', img: require("../Images/aidenmarkram.jpg"), achievements: 'South African all-rounder' },
  { name: 'Matthew Breetzke', img: require("../Images/matthewbreetzke.jpg"), achievements: 'Young South African talent' },
  { name: 'Aryan Juyal', img: require("../Images/aryanjuyal.jpg"), achievements: 'Explosive finisher for his team' },
  { name: 'Himmat Singh', img: require("../Images/himmatsingh.jpg"), achievements: 'Promising player for Delhi Capitals' },
  { name: 'Suryakumar Yadav', img: require("../Images/suryakumaryadav.jpg"), achievements: 'Top batsman for India' },
  { name: 'Rohit Sharma', img: require("../Images/rohitsharma.jpg"), achievements: 'Indian captain and opener' },
  { name: 'Tilak Varma', img: require("../Images/tilakvarma.jpg"), achievements: 'Top order batsman for MI' },
  { name: 'Shaik Rasheed', img: require("../Images/shaikrasheed.jpg"), achievements: 'Young and promising talent' },
  { name: 'Vansh Bedi', img: require("../Images/vanshbedi.jpg"), achievements: 'Emerging talent from India' },
  { name: 'Andre Siddarth', img: require("../Images/andresiddarth.jpg"), achievements: 'Promising young talent' },
  { name: 'Tristan Stubbs', img: require("../Images/tristanstubbs.jpg"), achievements: 'Talented South African batsman' },
  { name: 'Ryan Rickelton', img: require("../Images/ryanrickelton.jpg"), achievements: 'South African batsman' },
  { name: 'Robin Minz', img: require("../Images/robinminz.jpg"), achievements: 'Young Indian talent' },
  { name: 'Shrijith Krishnan', img: require("../Images/shrijithkrishnan.jpg"), achievements: 'Emerging talent from Tamil Nadu' },
  { name: 'Bevan John Jacobs', img: require("../Images/bevanjohnjacobs.jpg"), achievements: 'Australian talent' },
  { name: 'Shashank Singh', img: require("../Images/shashanksingh.jpg"), achievements: 'Promising all-rounder' },
  { name: 'Prabhsimran Singh', img: require("../Images/prabhsimransingh.jpg"), achievements: 'Punjab Kings batsman' },
  { name: 'Shreyas Iyer', img: require("../Images/shreyasier.jpg"), achievements: 'Middle-order batsman for India' },
  { name: 'Nehal Wadhera', img: require("../Images/nehalwadhera.jpg"), achievements: 'Emerging talent' },
  { name: 'Josh Inglis', img: require("../Images/joshinglis.jpg"), achievements: 'Australian wicketkeeper-batsman' },
  { name: 'Vishnu Vinod', img: require("../Images/vishnuvinod.jpg"), achievements: 'Kerala batsman' },
  { name: 'Harnoor Pannu', img: require("../Images/harnoorpannu.jpg"), achievements: 'Promising Indian batsman' },
  { name: 'Pyla Avinash', img: require("../Images/pylaavinash.jpg"), achievements: 'Young batting sensation' },
  { name: 'Riyan Parag', img: require("../Images/riyanparag.jpg"), achievements: 'All-rounder for Rajasthan Royals' },
  { name: 'Shimron Hetmyer', img: require("../Images/shimronhetmyer.jpg"), achievements: 'West Indian power hitter' },
  { name: 'Vaibhav Suryavanshi', img: require("../Images/vaibhavsuryavanshi.png"), achievements: 'Young and talented batsman' },
  { name: 'Sanju Samson', img: require("../Images/sanjusamson.jpg"), achievements: 'Indian wicketkeeper-batsman' },
  { name: 'Yashaswi Jaiswal', img: require("../Images/yashaswijaiswal.jpg"), achievements: 'Rising star for Rajasthan Royals' },
  { name: 'Shubham Dubey', img: require("../Images/shubhamdubey.jpg"), achievements: 'Promising batsman for his team' },
  { name: 'Dhruv Jurel', img: require("../Images/dhruvjurel.jpg"), achievements: 'All-rounder for Rajasthan Royals' },
  { name: 'Kunal Rathore', img: require("../Images/kunalrathore.jpg"), achievements: 'Young talent for Rajasthan Royals' },
];

const Batsmen = () => {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = (player) => {
    setSelected((prevSelected) => {
      const updatedSelected = prevSelected.some((p) => p.name === player.name)
        ? prevSelected.filter((p) => p.name !== player.name)
        : [...prevSelected, player];
      localStorage.setItem("selectedBatsmen", JSON.stringify(updatedSelected));
      return updatedSelected;
    });
  };

  const handleSubmit = () => {
    if (selected.length === 0) {
      setError("Please select at least one batsman.");
      return;
    }
    setSuccessMessage("Batsmen successfully selected!");
    setError("");
  };

  const filteredBatsmen = batsmen.filter((player) =>
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
    <div className="batsmen-container">
      <h1>Select Batsmen</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search batsmen..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="batsmen-list">
        {filteredBatsmen.map((player, index) => (
          <div
            key={index}
            className={`batsman-card ${
              selected.some((p) => p.name === player.name) ? "selected" : ""
            }`}
            onClick={() => handleSelect(player)}
          >
            <img src={player.img} alt={player.name} />
            <div className="batsman-info">
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

export default Batsmen;