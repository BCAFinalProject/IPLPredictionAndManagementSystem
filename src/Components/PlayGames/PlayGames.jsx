import React, { useState, useEffect } from 'react';

import './PlayGames.css';

import memoryMatchImg from '../Images/memory.jpg';
import triviaQuizImg from '../Images/quiz.jpg';
import logoImg from '../Images/ipl1.jpg';
import { Link } from 'react-router-dom';

const PlayGames = () => {

    const [username, setUsername] = useState('');
    
      useEffect(() => {
        // Retrieve the username from localStorage when the component mounts
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
          setUsername(savedUsername);
        }
      }, []);
  const games = [
   
    {
      title: 'IPL Memory Match Game',
      image: memoryMatchImg,
      route: '/memoryGame',
    },
    {
      title: 'IPL Trivia Quiz',
      image: triviaQuizImg,
      route: '/triviaquiz',
    },
    {
      title: 'IPL LeaderBoard',
      image: triviaQuizImg,
      route: '/leaderboard',
    },
  ];

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
              <div className="home-profile">
                <div className="home-profile-circle"> {username && <span className="home-profile-name">{username}</span>}
                </div>
                 </div>
            </header>

      {/* Banner Section */}
      <div className="banner">
        <h1>Welcome to IPL Gaming Hub</h1>
        <p>Explore a variety of exciting games and challenges!</p>
      </div>

      {/* Main Content Section */}
      <div className="play-games">
        <h1 className="title">Play IPL Games</h1>
        <div className="games-container">
          {games.map((game, index) => (
            <Link to={game.route} key={index} className="game-card">
              <img src={game.image} alt={game.title} className="game-image" />
              <div className="game-title">{game.title}</div>
            </Link>
          ))}
        </div>
      </div>

      
            {/* Footer Section */}
            <footer className="home-footer">
              <div className="footer-container">
                {/* Team Section */}
                <div className="footer-column">
                  <h3>TEAM</h3>
                  <ul>
                    <li>Chennai Super Kings</li>
                    <li>Delhi Capitals</li>
                    <li>Gujarat Titans</li>
                    <li>Kolkata Knight Riders</li>
                    <li>Lucknow Super Giants</li>
                    <li>Mumbai Indians</li>
                    <li>Punjab Kings</li>
                    <li>Rajasthan Royals</li>
                    <li>Royal Challengers Bengaluru</li>
                    <li>Sunrisers Hyderabad</li>
                  </ul>
                </div>
      
                {/* About Section */}
                <div className="footer-column">
                  <h3>ABOUT</h3>
                  <ul>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
                    <li><Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
                    <li><Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
                  </ul>
                </div>
      
                {/* Guidelines Section */}
                <div className="footer-column">
                  <h3>GUIDELINES</h3>
                  <ul>
                    <li><Link to="/code-of-conduct">IPL Code Of Conduct For Match Officials</Link></li>
                    <li><Link to="/brand-guidelines">Brand And Protection Guidelines</Link></li>
                    <li><Link to="/governing-council">Governing Council</Link></li>
                    <li><Link to="/match-conditions">Match Playing Conditions</Link></li>
                  </ul>
                </div>
      
                {/* Contact Section */}
                <div className="footer-column">
                  <h3>CONTACT</h3>
                  <ul>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/sponsorship">Sponsorship</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
      
              <div className="footer-bottom">
                <p>&copy; 2024 Your Website. All Rights Reserved. Designed by 
                  <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer"> BCAIPL</a>
                </p>
              </div>
            </footer>
    </>
  );
};

export default PlayGames;