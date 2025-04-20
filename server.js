const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ipl_app',
    password: 'pgadmin@123',
    port: 5432,
});

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: "Access denied. Please log in." });

    jwt.verify(token, 'yourSecretKey', (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid token" });
        req.user = user;
        next();
    });
};

// Load the trained IPL model and scaler
const modelPath = path.join(__dirname, 'ipl_model.pkl');
const scalerPath = path.join(__dirname, 'scaler.pkl');
let model, scaler;

try {
    model = joblib.load(modelPath);
    scaler = joblib.load(scalerPath);
    console.log("Model and Scaler loaded successfully");
} catch (err) {
    console.error("Error loading model/scaler:", err);
}

// Signup route
app.post('/signup', async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await pool.query(
            'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *',
            [email, username, hashedPassword]
        );
        res.status(201).json(newUser.rows[0]);
    } catch (err) {
        console.error('Error in Signup:', err.message);
        res.status(500).send('Server error');
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            return res.status(400).json({ error: "User does not exist" });
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ userId: user.rows[0].id }, 'yourSecretKey', { expiresIn: '1h' });
        res.json({ token, user: user.rows[0] });
    } catch (err) {
        console.error('Error in Login:', err.message);
        res.status(500).send('Server error');
    }
});

// Fetch all comments
app.get('/get-comments', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM comment ORDER BY created_at DESC");
        res.json(result.rows);
    } catch (err) {
        console.error("Error fetching comments:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// Post a new comment
app.post('/post-comment', authenticateToken, async (req, res) => {
    const { content } = req.body;
    const user_id = req.user.userId;
    if (!user_id || !content.trim()) {
        return res.status(400).json({ error: "Invalid input" });
    }
    try {
        const result = await pool.query(
            "INSERT INTO comment (user_id, username, content) VALUES ($1, (SELECT username FROM users WHERE id = $1), $2) RETURNING *",
            [user_id, content]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Error posting comment:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// Prediction Route
app.post('/predict', async (req, res) => {
    try {
        const { Batting_team, Bowling_team, Venue, target, First_Innings_Score, Toss_Winner, Toss_Decision } = req.body;
        
        const inputFeatures = [Batting_team, Bowling_team, Venue, target, First_Innings_Score, Toss_Winner, Toss_Decision];
        const scaledInput = scaler.transform([inputFeatures]);
        
        const prediction = model.predict(scaledInput);
        res.json({ prediction: prediction[0] });
    } catch (err) {
        console.error("Prediction error:", err);
        res.status(500).json({ error: "Error making prediction" });
    }
});

// IPL Win Predictor Route
app.post('/predict', (req, res) => {
    const { team1, team2, venue, tossWinner, battingFirst, pastWinRateTeam1, pastWinRateTeam2 } = req.body;

    if (!team1 || !team2 || !venue || !tossWinner || battingFirst === undefined) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Basic probability calculation (can be replaced with a real model)
    let team1WinProbability = pastWinRateTeam1 * 0.5 + (tossWinner === team1 ? 5 : 0) + (battingFirst === team1 ? 5 : 0);
    let team2WinProbability = pastWinRateTeam2 * 0.5 + (tossWinner === team2 ? 5 : 0) + (battingFirst === team2 ? 5 : 0);

    // Normalize probabilities
    const total = team1WinProbability + team2WinProbability;
    team1WinProbability = ((team1WinProbability / total) * 100).toFixed(2);
    team2WinProbability = ((team2WinProbability / total) * 100).toFixed(2);

    res.json({
        team1,
        team2,
        venue,
        tossWinner,
        battingFirst,
        probabilities: {
            [team1]: `${team1WinProbability}%`,
            [team2]: `${team2WinProbability}%`
        }
    });
});
// Store receipt in database
app.post('/store-receipt', async (req, res) => {
    const { userId, username, payment_id, amount, status, cartItems } = req.body;

    try {
        const receiptQuery = `
            INSERT INTO receipts (user_id, username, payment_id, amount, status, cart_items)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `;

        const result = await pool.query(receiptQuery, [userId, username, payment_id, amount, status, JSON.stringify(cartItems)]);

        res.status(201).json({ message: "Receipt stored successfully", receipt: result.rows[0] });
    } catch (err) {
        console.error("Error storing receipt:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ Store Payment Details
app.post('/payment', async (req, res) => {
    try {
        const { match, date, time, venue, ticketType, numberOfTickets, selectedSeats, totalPrice, name, lastFourDigits } = req.body;

        if (!match || !date || !time || !venue || !ticketType || !numberOfTickets || !selectedSeats || !totalPrice || !name || !lastFourDigits) {
            return res.status(400).json({ error: "All fields are required" });
        }

        console.log("💰 Storing Payment:", req.body); // Debugging log

        const newPayment = await pool.query(
            "INSERT INTO payments (match, date, time, venue, ticket_type, number_of_tickets, selected_seats, total_price, cardholder_name, last_four_digits) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [match, date, time, venue, ticketType, numberOfTickets, JSON.stringify(selectedSeats), totalPrice, name, lastFourDigits]
        );

        console.log("✅ Payment Stored:", newPayment.rows[0]); // Debugging log

        res.json({ success: true, message: "Payment stored successfully!", data: newPayment.rows[0] });
    } catch (err) {
        console.error("Error processing payment:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// Admin login route

app.post('/adminlogin', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const result = await pool.query('SELECT * FROM admin WHERE username = $1', [username]);
      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid admin credentials' });
      }
  
      const admin = result.rows[0];
      if (password !== admin.password) {
        return res.status(401).json({ error: 'Invalid admin credentials' });
      }
  
      const token = jwt.sign({ id: admin.id, username: admin.username }, 'yourSecretKey', {
        expiresIn: '1h',
      });
  
      res.json({ token, admin });
    } catch (err) {
      console.error('Admin Login Error:', err.message);
      res.status(500).json({ error: 'Server error. Please try again later.' });
    }
  });


  app.get('/get-users', async (req, res) => {
    try {
        const result = await pool.query("SELECT id, username, email FROM users");
        res.json(result.rows);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Server error" });
    }
});

app.delete('/delete-user/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        await pool.query("DELETE FROM users WHERE id = $1", [userId]);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ error: "Server error" });
    }
});

app.delete('/delete-comment/:id', async (req, res) => {
    const commentId = req.params.id;
    try {
        await pool.query("DELETE FROM comment WHERE id = $1", [commentId]);
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        console.error("Error deleting comment:", err);
        res.status(500).json({ error: "Server error" });
    }
});
  

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
