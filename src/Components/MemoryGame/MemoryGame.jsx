import React, { useState, useEffect } from "react";
import "./MemoryGame.css";
import Confetti from "react-confetti";

// Import player images
import viratKohli from "../Images/viratkohli.jpg";
import josButtler from "../Images/josbuttler.jpg";
import devonConway from "../Images/devon.jpg";
import ruturaj from "../Images/ruturaj.jpg";
import klRahul from "../Images/klrahul.jpg";
import hardikPandya from "../Images/hardikpandya.jpeg";
import deepakChahar from "../Images/deepakchahar.jpeg";
import ravindraJadeja from "../Images/ravindrajadeja.jpeg";

const players = [
  { name: "Virat Kohli", image: viratKohli },
  { name: "Jos Buttler", image: josButtler },
  { name: "Devon Conway", image: devonConway },
  { name: "Ruturaj", image: ruturaj },
  { name: "KL Rahul", image: klRahul },
  { name: "Hardik Pandya", image: hardikPandya },
  { name: "Deepak Chahar", image: deepakChahar },
  { name: "Ravindra Jadeja", image: ravindraJadeja },
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showTrophy, setShowTrophy] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      const enteredUsername = prompt("Enter your username:");
      if (enteredUsername) {
        localStorage.setItem("username", enteredUsername);
        setUsername(enteredUsername);
      }
    } else {
      setUsername(storedUsername);
    }
    restartGame();
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver && !isPaused) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver, isPaused]);
//starting
  useEffect(() => {
    if (gameOver) {
      const newScore = { name: username, points: timeLeft };
      let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  
      // Add new score and sort by highest points
      leaderboard.push(newScore);
      leaderboard = leaderboard.sort((a, b) => b.points - a.points);
  
      // Save updated leaderboard back to localStorage
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    }
  }, [gameOver]); 
  //ending

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const restartGame = () => {
    const shuffledPlayers = shuffleArray([...players, ...players]);
    setCards(shuffledPlayers.map((player, index) => ({ id: index, ...player, flipped: false, matched: false })));
    setFlippedCards([]);
    setMatchedPairs(0);
    setTimeLeft(60);
    setGameOver(false);
    setIsPaused(false);
    setShowTrophy(false);
  };

  const handleCardClick = (index) => {
    if (flippedCards.length >= 2 || cards[index].flipped || gameOver || isPaused) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    const newFlippedCards = [...flippedCards, newCards[index]];
    setCards(newCards);
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setTimeout(() => checkMatch(newFlippedCards, newCards), 800);
    }
  };

  const checkMatch = (newFlippedCards, updatedCards) => {
    const [first, second] = newFlippedCards;

    if (first.name === second.name) {
      const newCards = updatedCards.map((card) =>
        card.name === first.name ? { ...card, matched: true } : card
      );
      setCards(newCards);

      setMatchedPairs((prev) => {
        const newPairs = prev + 1;
        if (newPairs === players.length) {
          setGameOver(true);
          setShowTrophy(true);
        }
        return newPairs;
      });
    } else {
      updatedCards[first.id].flipped = false;
      updatedCards[second.id].flipped = false;
      setCards([...updatedCards]);
    }

    setFlippedCards([]);
  };

  return (
    <div className="memory-game-container">
      <h1>Memory Game - Cricket Players</h1>
      <h2>Player: {username}</h2>

      <div className="memory-info">
        <span>⏳ Time Left: {timeLeft}s</span>
        <div className="memory-button-group">
          <button className="memory-btn" onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? "▶ Resume" : "⏸ Pause"}
          </button>
          <button className="memory-btn" onClick={restartGame}>Restart</button>
        </div>
      </div>

      <div className="memory-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`memory-card ${card.flipped ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            {card.flipped || card.matched ? <img src={card.image} alt={card.name} /> : "🏏"}
          </div>
        ))}
      </div>

      {gameOver && (
        <div className={`memory-message ${matchedPairs === players.length ? "win" : "lose"}`}>
          {matchedPairs === players.length ? `🎉 You Won! 🏆 Your Score: ${timeLeft}` : "⏳ Time's Up! Try Again!"}
        </div>
      )}

      {matchedPairs === players.length && <Confetti />}
    </div>
  );
};

export default MemoryGame;