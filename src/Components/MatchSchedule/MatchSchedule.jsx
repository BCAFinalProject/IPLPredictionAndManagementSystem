import React from "react";
import { useNavigate } from "react-router-dom";
import "./MatchSchedule.css";

const matches = [
  { date: "22-Mar-25", day: "Sat", time: "7:30 PM", team1: "RCB", team2: "RR", venue: "Kolkata" },
  { date: "23-Mar-25", day: "Sun", time: "3:30 PM", team1: "MI", team2: "LSG", venue: "Hyderabad" },
  { date: "23-Mar-25", day: "Sun", time: "7:30 PM", team1: "PBKS", team2: "KKR", venue: "Chennai" },
  { date: "24-Mar-25", day: "Mon", time: "7:30 PM", team1: "LSG", team2: "RCB", venue: "Visakhapatnam" },
  { date: "25-Mar-25", day: "Tue", time: "7:30 PM", team1: "MI", team2: "SRH", venue: "Ahmedabad" },
  { date: "26-Mar-25", day: "Wed", time: "7:30 PM", team1: "CSK", team2: "KKR", venue: "Hyderabad" },
  { date: "27-Mar-25", day: "Thu", time: "7:30 PM", team1: "PBKS", team2: "GT", venue: "Chennai" },
  { date: "28-Mar-25", day: "Fri", time: "7:30 PM", team1: "SRH", team2: "MI", venue: "New Chandigarh" },
  { date: "29-Mar-25", day: "Sat", time: "3:30 PM", team1: "DC", team2: "RR", venue: "Kolkata" },
  { date: "29-Mar-25", day: "Sat", time: "7:30 PM", team1: "LSG", team2: "GT", venue: "Hyderabad" },
  { date: "30-Mar-25", day: "Sun", time: "3:30 PM", team1: "RCB", team2: "CSK", venue: "Mumbai" },
  { date: "30-Mar-25", day: "Sun", time: "7:30 PM", team1: "RR", team2: "DC", venue: "Lucknow" },
  { date: "21-May-25", day: "Tue", time: "7:30 PM", team1: "TBD", team2: "TBD", venue: "Ahmedabad", stage: "Qualifier 1" },
  { date: "22-May-25", day: "Wed", time: "7:30 PM", team1: "TBD", team2: "TBD", venue: "Mumbai", stage: "Eliminator" },
  { date: "24-May-25", day: "Fri", time: "7:30 PM", team1: "TBD", team2: "TBD", venue: "Chennai", stage: "Qualifier 2" },
  { date: "26-May-25", day: "Sun", time: "7:30 PM", team1: "TBD", team2: "TBD", venue: "Ahmedabad", stage: "Final" }
];

const MatchSchedule = () => {
  const navigate = useNavigate();

  const handleBookTicket = (match) => {
    navigate("/TicketBooking", { state: { match } });
  };

  return (
    <div className="schedule-container">
      <h2>TATA IPL 2025 Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Time</th>
            <th>Match</th>
            <th>Venue</th>
            <th>Stage</th>
            <th>Book Ticket</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{match.date}</td>
              <td>{match.day}</td>
              <td>{match.time}</td>
              <td>{match.team1} vs {match.team2}</td>
              <td>{match.venue}</td>
              <td>{match.stage || "League"}</td>
              <td>
                <button className="book-ticket-btn" onClick={() => handleBookTicket(match)}>Book Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchSchedule;
