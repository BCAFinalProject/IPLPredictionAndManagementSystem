import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import './Home.css';


// Importing images
import matchPredictionImg from '../Images/home1.jpg';
import fantasyLeagueImg from '../Images/home2.jpg';
import playGamesImg from '../Images/banner4.jpg';
import matchReplaysImg from '../Images/home3.jpg';
import communityForumImg from '../Images/comments.jpg';
import bannerImg1 from '../Images/bg1.jpg';
import bannerImg2 from '../Images/bg1.jpg';
import bannerImg3 from '../Images/bg1.jpg';
import logoImg from '../Images/ipl1.jpg';

import fanImage1 from '../Images/fan1.webp'; // Add the appropriate fan images
import fanImage2 from '../Images/fan5.jpeg';
import fanImage3 from '../Images/fan3.webp';
import fanImage4 from '../Images/fan4.webp';
import fanImage5 from '../Images/fan5.jpeg';
import fanImage6 from '../Images/fan6.jpg';

// Import necessary images for the quotes section
import playerImage1 from '../Images/msdhoni.jpg';  // Add relevant player images
import playerImage2 from '../Images/bg1.jpg'; 
import playerImage3 from '../Images/virat.jpg'; 


import predictImg from '../Images/predict.jpg'; 

const Home = () => {

  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const goToauction = () => {
    navigate('/auction'); // Navigate to the home page
  };

  const goToscorecard = () => {
    navigate('/scorecard'); // Navigate to the home page
  };

  const goTonews = () => {
    navigate('/news'); // Navigate to the home page
  };


  
    useEffect(() => {
      // Retrieve the username from localStorage when the component mounts
      const savedUsername = localStorage.getItem('username');
      if (savedUsername) {
        setUsername(savedUsername);
      }
    }, []);
  
  const quotes = [
    {
      image: playerImage1,
      quote: "The fans are the heartbeat of any sport, and the IPL has given us a platform to connect with them. The energy they bring to the stadium is unmatched.",
      player: "MS Dhoni"
    },
    {
      image: playerImage2,
      quote: "To represent a team like Chennai Super Kings and to have the kind of support we get from our fans is a feeling I will never forget. They are our 12th man on the field.",
      player: "Suresh Raina (Chennai Super Kings)"
    },
    {
      image: playerImage3,
      quote: "IPL has given me so many memories, and the one thing that stands out is the love we get from our fans. They support us through thick and thin, and that means the world to us.",
      player: "Virat Kohli (Royal Challengers Bangalore)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000); // Change quote every 8 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);


  
  const facts = [
    'Fact 1: IPL is the most-watched T20 league in the world.',
    'Fact 2: Shane Warne was the first-ever captain of Rajasthan Royals and won the inaugural IPL in 2008.',
    'Fact 3: Virat Kohli is the highest run-scorer in IPL history with over 6,500 runs.',
    'Fact 4: Chris Gayle holds the record for the highest individual score in an IPL match with 175 runs.',
    'Fact 5: Mumbai Indians have won the most IPL titles, with 5 championships.',
    'Fact 6: Kieron Pollard holds the record for the most sixes in IPL history by a non-Indian player.',
    'Fact 7: MS Dhoni has led Chennai Super Kings to 4 IPL titles.',
    'Fact 8: Rajasthan Royals were the first team to have a player hit a triple century in IPL, Ben Stokes in 2017.',
    'Fact 9: The first-ever hat-trick in IPL history was taken by Shane Harwood in 2008.',
    'Fact 10: The fastest ball ever bowled in IPL was 157.7 km/h by Shane Bond in 2011.',
    'Fact 11: David Warner has won the Orange Cap three times for being the highest run-scorer.',
    'Fact 12: Dwayne Bravo has won the Purple Cap multiple times as the highest wicket-taker.',
    'Fact 13: The IPL trophy is made of sterling silver and is 24 carats gold-plated.',
    'Fact 14: Kolkata Knight Riders have the highest-ever IPL winning percentage of around 60%.',
    'Fact 15: Rishabh Pant holds the record for the fastest half-century by an Indian in IPL, scoring 50 in 18 balls.',
    'Fact 16: IPL 2020 was the first season to be held entirely in the UAE due to the COVID-19 pandemic.',
    'Fact 17: Yuvraj Singh became the first player in IPL history to hit six sixes in an over in 2009.',
    'Fact 18: Glen Maxwell hit the fastest fifty in IPL history in just 18 balls in 2021.',
    'Fact 19: Ravichandran Ashwin is known for his unique "Mankad" dismissal in IPL.',
    'Fact 20: The IPL has revolutionized the T20 format and influenced global cricket leagues.'
];

  const [currentFact, setCurrentFact] = useState(0);
  const [fade, setFade] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        setCurrentFact((prevFact) => (prevFact + 1) % facts.length);
        setFade(true); // Start fade-in
      }, 500); // Time matches the fade-out duration in CSS
    }, 3000);

    return () => clearInterval(interval);
  }, [facts.length]);

  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="home-header">
        <div className="home-logo">
          <img src={logoImg} alt="Logo" className="home-logo-img" />
        </div>
        <nav className="home-nav">
          <Link to="/" className="home-nav-link">Home</Link>
          {/* Stats Dropdown */}
          <div className="home-nav-link dropdown">
            <span className="dropbtn">Stats</span>
            <div className="dropdown-content">
              <Link to="/overallStats">Overall</Link>
              <Link to="/headtohead">Head to Head</Link>
            </div>
          </div>
          <Link to="/merchandise" className="home-nav-link">Merchandise</Link>
          <Link to="/matchSchedule" className="home-nav-link">MatchSchedule</Link>
          <Link to="/team" className="home-nav-link">Team Page</Link>
        </nav>
        <div className="home-profile">
  <div className="home-profile-circle">
    {username && (
      <Link to="/profile" className="home-profile-name">
        {username}
      </Link>
    )}
  </div>
</div>
      </header>


 {/* Welcome Message Section */}
 <section className="welcome-section">
        <h1 className="welcome-message">Welcome to IPL World, Expert <span className="username">{username}</span>!</h1>
        </section>
      {/* Banner Section */}
      <section className="home-banner">
        <div className="home-banner-slider">
          <img src={bannerImg1} alt="Banner Image 1" className="home-banner-img" />
          <img src={bannerImg2} alt="Banner Image 2" className="home-banner-img" />
          <img src={bannerImg3} alt="Banner Image 3" className="home-banner-img" />
        </div>
      </section>
      
      <section className="home-banner-content">
        <h1 className="home-banner-title">IPL Prediction and Management System</h1>
        <div className="home-banner-buttons">
          <button className="home-banner-btn"onClick={goToauction}>Auction</button>
          <button className="home-banner-btn" onClick={goToscorecard}>Scorecard</button>
          <button className="home-banner-btn" onClick={goTonews}>News</button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="home-cards">
        {[{
          img: matchPredictionImg,
          title: "MATCHES",
          link: "/matchprediction"
        }, {
          img: fantasyLeagueImg,
          title: "FANTASY LEAGUE",
          link: "/fantasyhome"
        }, {
          img: playGamesImg,
          title: "PLAY GAMES",
          link: "/playgames"
        }, {
          img: matchReplaysImg,
          title: "Venues",
          link: "/venues"
        }, {
          img: communityForumImg,
          title: "COMMUNITY FORUM",
          link: "/communityforum"
        },{
          img: predictImg,
          title: "PREDICT",
          link: "/predict"
        }
      ].map((card, index) => (
          <div key={index} className="home-card">
            <img src={card.img} alt={card.title} className="home-card-image" />
            <div className="home-card-content">
              <h3 className="home-card-title">{card.title}</h3>
              <Link to={card.link}>
                <button className="home-card-btn">View</button>
              </Link>
            </div>
          </div>
        ))}
      </section>
   {/* Interesting Facts Section */}
   <section className="home-facts">
        <h2 className="home-facts-title">Interesting IPL Facts</h2>
        <div className={`home-facts-box ${fade ? 'fade-in' : 'fade-out'}`}>
          <p className="home-facts-animated">{facts[currentFact]}</p>
        </div>
      </section>

      {/* Fan Gallery Section */}
      <div className="home-fan-gallery">
        <h2 className="home-fan-gallery-title">Fan-tastic Moments: A Celebration of Passion</h2>
        <div className="fan-gallery-container">
          <div className="fan-gallery-item">
            <img src={fanImage1} alt="Fan 1" className="fan-gallery-image" />
          </div>
          <div className="fan-gallery-item">
            <img src={fanImage2} alt="Fan 2" className="fan-gallery-image" />
          </div>
          <div className="fan-gallery-item">
            <img src={fanImage3} alt="Fan 3" className="fan-gallery-image" />
          </div>
          <div className="fan-gallery-item">
            <img src={fanImage4} alt="Fan 4" className="fan-gallery-image" />
          </div>
          <div className="fan-gallery-item">
            <img src={fanImage5} alt="Fan 5" className="fan-gallery-image" />
          </div>
          <div className="fan-gallery-item">
            <img src={fanImage6} alt="Fan 6" className="fan-gallery-image" />
          </div>
        </div>
      </div>

      <h2 className="quote-slider-title">Voices of the Game: IPL Heroes Speak</h2>
      <section className="quote-slider-section">
    
      <div className="quote-slider-box">
        <div className="quote-slider">
          <div className="quote-item">
            <img
              src={quotes[currentIndex].image}
              alt={quotes[currentIndex].player}
              className="quote-image"
            />
            <div className="quote-text">
              <p className="quote">{quotes[currentIndex].quote}</p>
              <p className="quote-player">{quotes[currentIndex].player}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


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
              <li><Link to="/aboutus">About Us</Link></li>
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
              <li><Link to="/contactus">Contact Us</Link></li>
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

    </div>
  );
};

export default Home;













