
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'; // SweetAlert for confirmation dialogs
import './TicketBooking.css';

const TicketBooking = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get match details from state
    const match = location.state?.match || null;

    const [ticketType, setTicketType] = useState('Economy');
    const [numberOfTickets, setNumberOfTickets] = useState(1);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookedSeats, setBookedSeats] = useState([]);

    // Ticket Prices
    const ticketPrices = {
        Economy: 500,
        Silver: 1000,
        Gold: 2000,
        VIP: 5000
    };

    // Load booked seats from localStorage when the component mounts
    useEffect(() => {
        const storedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || []; 
        setBookedSeats(storedSeats);
    }, []);

    // Function to get seat range based on ticket type
    const getSeatRange = () => {
        switch (ticketType) {
            case 'Economy': return Array.from({ length: 50 }, (_, index) => index + 1);
            case 'Silver': return Array.from({ length: 50 }, (_, index) => index + 51);
            case 'Gold': return Array.from({ length: 50 }, (_, index) => index + 101);
            case 'VIP': return Array.from({ length: 50 }, (_, index) => index + 151);
            default: return [];
        }
    };

    // Toggle seat selection
    const toggleSeat = (seatNumber) => {
        if (bookedSeats.includes(seatNumber)) {
            Swal.fire("Seat Unavailable", "This seat is already booked.", "error");
            return;
        }

        setSelectedSeats((prevSelected) => {
            if (prevSelected.includes(seatNumber)) {
                return prevSelected.filter(seat => seat !== seatNumber);
            } else if (prevSelected.length < numberOfTickets) {
                return [...prevSelected, seatNumber];
            } else {
                Swal.fire("Selection Limit", `You can only select ${numberOfTickets} seats.`, "warning");
                return prevSelected;
            }
        });
    };

    // Proceed to Payment Page with Confirmation
    const handleNext = () => {
        if (selectedSeats.length < numberOfTickets) {
            Swal.fire("Incomplete Selection", `Please select exactly ${numberOfTickets} seats.`, "warning");
            return;
        }

        const totalPrice = ticketPrices[ticketType] * numberOfTickets;

        Swal.fire({
            title: 'Confirm Your Booking',
            html: `
                <strong>Match:</strong> ${match?.team1} vs ${match?.team2} <br>
                <strong>Venue:</strong> ${match?.venue} <br>
                <strong>Ticket Type:</strong> ${ticketType} <br>
                <strong>Seats:</strong> ${selectedSeats.join(', ')} <br>
                <strong>Total Price:</strong> ₹${totalPrice} <br>
                <p>Are you sure you want to proceed to payment?</p>
            `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Proceed!',
            cancelButtonText: 'No, Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedBookedSeats = [...bookedSeats, ...selectedSeats];
                setBookedSeats(updatedBookedSeats);
                localStorage.setItem("bookedSeats", JSON.stringify(updatedBookedSeats));

                setSelectedSeats([]); 
                
                navigate('/tickpayment', { 
                    state: { match, ticketType, selectedSeats, numberOfTickets, totalPrice }
                });
            }
        });
    };

    return (
        <div className="ticket-container">
            {/* Display match details at the top */}
            {match ? (
                <div className="match-details">
                    <h1>{match.team1} vs {match.team2}</h1>
                    <p><strong>Date:</strong> {match.date}, {match.day}</p>
                    <p><strong>Time:</strong> {match.time}</p>
                    <p><strong>Venue:</strong> {match.venue}</p>
                </div>
            ) : (
                <h1>No Match Selected</h1>
            )}

            <div className="form-group">
                <label>Select Ticket Type:</label>
                <select value={ticketType} onChange={(e) => {
                    setTicketType(e.target.value);
                    setSelectedSeats([]); 
                }}>
                    <option value="Economy">Economy - ₹500</option>
                    <option value="Silver">Silver - ₹1000</option>
                    <option value="Gold">Gold - ₹2000</option>
                    <option value="VIP">VIP - ₹5000</option>
                </select>
            </div>

            <div className="form-group">
                <label>Number of Tickets:</label>
                <input
                    type="number"
                    value={numberOfTickets}
                    onChange={(e) => {
                        const value = Math.max(1, Math.min(10, parseInt(e.target.value, 10) || 1));
                        setNumberOfTickets(value);
                        setSelectedSeats([]); 
                    }}
                    min="1"
                    max="10"
                />
            </div>

            <h2 className="seat-title">Select Seats - {ticketType}</h2>
            <div className="seat-grid">
                {getSeatRange().map((seatNumber) => (
                    <div
                        key={seatNumber}
                        className={`seat 
                            ${selectedSeats.includes(seatNumber) ? 'selected' : ''}
                            ${bookedSeats.includes(seatNumber) ? 'booked' : ''}`}
                        onClick={() => toggleSeat(seatNumber)}
                    >
                        {seatNumber}
                    </div>
                ))}
            </div>

            <h2 className="total-price">Total Price: ₹{ticketPrices[ticketType] * numberOfTickets}</h2>

            <button className="proceed-button" onClick={handleNext}>Proceed to Payment</button>
        </div>
    );
};

export default TicketBooking;
