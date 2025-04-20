import React, { useState } from 'react';
import './TriviaQuiz.css';

import { Link } from 'react-router-dom'; // <-- Add this import

import viratimage from "../Images/virat.jpg"; // Update the path accordingly

const TriviaQuiz = () => {
  // Set up questions, answers, and current question index
  const questions = [
    {
      question: "Who won the IPL 2023?",
      options: ["Gujarat Titans", "Rajasthan Royals", "Chennai Super Kings"],
      answer: "Chennai Super Kings",
    },
    {
      question: "Who is the highest run scorer in IPL history?",
      options: ["Virat Kohli", "David Warner", "Shane Watson"],
      answer: "Virat Kohli",
    },
    {
      question: "Which team has won the most IPL titles?",
      options: ["Mumbai Indians", "Chennai Super Kings", "Kolkata Knight Riders"],
      answer: "Mumbai Indians",
    },
    {
      question: "Who holds the record for the most wickets in IPL?",
      options: ["Lasith Malinga", "Dwayne Bravo", "Amit Mishra"],
      answer: "Lasith Malinga",
    },
    {
      question: "Which IPL team has the mascot 'Hooper'?",
      options: ["Delhi Capitals", "Punjab Kings", "Rajasthan Royals"],
      answer: "Punjab Kings",
    },
    {
      question: "Who scored the fastest 50 in IPL history?",
      options: ["Chris Gayle", "Yusuf Pathan", "AB de Villiers"],
      answer: "Chris Gayle",
    },
    {
      question: "Which player has hit the most sixes in IPL?",
      options: ["Chris Gayle", "Shane Watson", "MS Dhoni"],
      answer: "Chris Gayle",
    },
    {
      question: "Who is known as the 'Captain Cool' in IPL?",
      options: ["Rohit Sharma", "MS Dhoni", "Gautam Gambhir"],
      answer: "MS Dhoni",
    },
    {
      question: "Which IPL team is known as 'The Royals'?",
      options: ["Rajasthan Royals", "Mumbai Indians", "Kolkata Knight Riders"],
      answer: "Rajasthan Royals",
    },
    {
      question: "Who won the Orange Cap in IPL 2022?",
      options: ["Jos Buttler", "KL Rahul", "Ishan Kishan"],
      answer: "Jos Buttler",
    },
    {
      question: "Who won the Purple Cap in IPL 2022?",
      options: ["Yuzvendra Chahal", "Wanindu Hasaranga", "Dwayne Bravo"],
      answer: "Yuzvendra Chahal",
    },
    {
      question: "Which team did Virat Kohli represent in IPL?",
      options: ["RCB", "DD", "KKR"],
      answer: "RCB",
    },
    {
      question: "Who is the youngest player to debut in IPL?",
      options: ["Shubman Gill", "Shreyas Iyer", "Rishabh Pant"],
      answer: "Rishabh Pant",
    },
    {
      question: "Who is the first player to score a double century in IPL?",
      options: ["Chris Gayle", "Brendon McCullum", "Shikhar Dhawan"],
      answer: "Chris Gayle",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  
  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(answer);
    
    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert(`Quiz Over! Your Score: ${score + 1}`);
      }
      setSelectedOption('');
    }, 500);
  };

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

    <div className="trivia-quiz">
      <h2>IPL Trivia Quiz</h2>
      <div className="question">
        <p>{questions[currentQuestionIndex].question}</p>
        <div className="options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={selectedOption === option ? 'selected' : ''}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="score">
          <p>Score: {score}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default TriviaQuiz;