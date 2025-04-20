import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";

// Import IPL Logo
import logoImg from "../Images/ipl1.jpg";

// Import Team Logos
import cskLogo from "../Images/csklogo.jpg";
import miLogo from "../Images/milogo.jpg";
import rcbLogo from "../Images/rcblogo.jpg";
import dcLogo from "../Images/dclogo.jpg";
import rrLogo from "../Images/rrlogo.jpg";
import kkrLogo from "../Images/kkrlogo.jpg";
import srhLogo from "../Images/srhlogo.jpg";
import pbksLogo from "../Images/pklogo.jpg";
import lsgLogo from "../Images/lsglogo.jpg";
import gtLogo from "../Images/gtlogo.jpg";

// Team Data with Trophy Years
const teamsData = [
  { name: "Chennai Super Kings", logo: cskLogo, path: "/csk", color: "#fdb913", captain: "Ruturaj Gaikwad", homeGround: "MA Chidambaram Stadium, Chennai", trophies: [2010, 2011, 2018, 2021, 2023] },
  { name: "Mumbai Indians", logo: miLogo, path: "/mi", color: "#045093", captain: "Hardik Pandya", homeGround: "Wankhede Stadium, Mumbai", trophies: [2013, 2015, 2017, 2019, 2020] },
  { name: "Royal Challengers Bangalore", logo: rcbLogo, path: "/rcb", color: "#da1818", captain: "Rajat Patidhar", homeGround: "M. Chinnaswamy Stadium, Bangalore", trophies: [] },
  { name: "Delhi Capitals", logo: dcLogo, path: "/dc", color: "#17449b", captain: "K L Rahul", homeGround: "Arun Jaitley Stadium, Delhi", trophies: [] },
  { name: "Rajasthan Royals", logo: rrLogo, path: "/rr", color: "#ea1a7a", captain: "Sanju Samson", homeGround: "Sawai Mansingh Stadium, Jaipur", trophies: [2008] },
  { name: "Kolkata Knight Riders", logo: kkrLogo, path: "/kkr", color: "#3b215d", captain: "YetToBeUpdated", homeGround: "Eden Gardens, Kolkata", trophies: [2012, 2014, 2024] },
  { name: "Sunrisers Hyderabad", logo: srhLogo, path: "/srh", color: "#fb641b", captain: "Pat Cummins", homeGround: "Rajiv Gandhi International Stadium, Hyderabad", trophies: [2016] },
  { name: "Punjab Kings", logo: pbksLogo, path: "/pbks", color: "#d71920", captain: "Shreyas Iyer", homeGround: "IS Bindra Stadium, Mohali", trophies: [] },
  { name: "Lucknow Super Giants", logo: lsgLogo, path: "/lsg", color: "#0078ff", captain: "Rishab pant", homeGround: "Ekana Stadium, Lucknow", trophies: [] },
  { name: "Gujarat Titans", logo: gtLogo, path: "/gt", color: "#1c3746", captain: "Shubman Gill", homeGround: "Narendra Modi Stadium, Ahmedabad", trophies: [2022] }
];

const Teams = () => {
  return (
    <div className="teams-container">
      {/* Header Section */}
      <header className="home-header">
        <div className="home-logo">
          <img src={logoImg} alt="Logo" className="home-logo-img" />
        </div>
        <nav className="home-nav">
          <Link to="/home" className="home-nav-link">Home</Link>
          <div className="home-nav-link dropdown">
            <span className="dropbtn">Stats</span>
            <div className="dropdown-content">
              <Link to="/overallStats">Overall</Link>
              <Link to="/headtohead">Head to Head</Link>
            </div>
          </div>
          <Link to="/merchandise" className="home-nav-link">Merchandise</Link>
          <Link to="/achievements" className="home-nav-link">Achievements</Link>
          <Link to="/team" className="home-nav-link">Teams</Link>
        </nav>
      </header>

      {/* Teams Grid */}
      <div className="teams-grid">
        {teamsData.map((team, index) => (
          <Link to={team.path} key={index} className="team-card-link">
            <div className="team-card" style={{ backgroundColor: team.color }}>
              <img src={team.logo} alt={`${team.name} Logo`} className="team-logo" />
              <h2 className="team-name" style={{ color: "#ffffff", textShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}>
  {team.name}
</h2>
              <p className="team-details"><strong>Captain:</strong> {team.captain}</p>
              <p className="team-details"><strong>Home Ground:</strong> {team.homeGround}</p>
              
              {/* Trophy Years Hover Effect */}
              <div className="trophy-hover">
                {team.trophies.length > 0 ? (
                  <p className="trophy-years">🏆 {team.trophies.join(", ")}</p>
                ) : (
                  <p className="trophy-years">No IPL Trophy</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Teams;
