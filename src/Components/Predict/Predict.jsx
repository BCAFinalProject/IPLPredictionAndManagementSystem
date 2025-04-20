import React, { useState } from 'react';
import axios from 'axios';
import './Predict.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Predict = () => {
    const [battingTeam, setBattingTeam] = useState('');
    const [bowlingTeam, setBowlingTeam] = useState('');
    const [city, setCity] = useState('');
    const [target, setTarget] = useState('');
    const [score, setScore] = useState('');
    const [overs, setOvers] = useState('');
    const [wickets, setWickets] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState('');
    const [validationMsg, setValidationMsg] = useState('');

    const validateInputs = () => {
        let message = '';

        if (battingTeam === bowlingTeam) {
            message += ' Batting and Bowling teams should not be the same.\n';
        }
        if (Number(target) <= Number(score)) {
            message += ' Target score must be greater than the current score.\n';
        }
        if (Number(wickets) >= 11) {
            message += ' Wickets fallen should be less than 11.\n';
        }
        if (Number(overs) >= 20) {
            message += ' Overs completed should be less than 20.\n';
        }

        setValidationMsg(message);
        return message === ''; // Returns `true` if valid, `false` if not
    };

    const handlePredict = async () => {
        setError('');
        setPrediction(null);

        if (!battingTeam || !bowlingTeam || !city || !target || !score || !overs || !wickets) {
            setError(' Please fill in all fields.');
            return;
        }

        if (!validateInputs()) {
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                batting_team: battingTeam,
                bowling_team: bowlingTeam,
                city: city,
                target: target,
                score: score,
                overs: overs,
                wickets: wickets
            });

            if (response.data.error) {
                setError(response.data.error);
            } else {
                setPrediction(response.data);
            }
        } catch (err) {
            setError(' Failed to fetch prediction. Please try again.');
        }
    };

    const COLORS = ['#28a745', '#dc3545'];
    const data = prediction ? [
        { name: prediction.batting_team, value: prediction.win_probability },
        { name: prediction.bowling_team, value: prediction.loss_probability }
    ] : [];

    return (
        <div className="predict-container">
            <h2>IPL Win Predictor</h2>

            <div>
                <label>Batting Team:</label>
                <select onChange={(e) => setBattingTeam(e.target.value)} value={battingTeam}>
                    <option value="">Select Team</option>
                    <option value="Mumbai Indians">Mumbai Indians</option>
                    <option value="Chennai Super Kings">Chennai Super Kings</option>
                    <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                    <option value="Rajasthan Royals">Rajasthan Royals</option>
                    <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                    <option value="Delhi Capitals">Delhi Capitals</option>
                    <option value="Kings XI Punjab">Kings XI Punjab</option>
                    <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
                </select>
            </div>

            <div>
                <label>Bowling Team:</label>
                <select onChange={(e) => setBowlingTeam(e.target.value)} value={bowlingTeam}>
                    <option value="">Select Team</option>
                    <option value="Mumbai Indians">Mumbai Indians</option>
                    <option value="Chennai Super Kings">Chennai Super Kings</option>
                    <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                    <option value="Rajasthan Royals">Rajasthan Royals</option>
                    <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                    <option value="Delhi Capitals">Delhi Capitals</option>
                    <option value="Kings XI Punjab">Kings XI Punjab</option>
                    <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
                </select>
            </div>

            <div>
                <label>Stadium:</label>
                <select onChange={(e) => setCity(e.target.value)} value={city}>
                <option value="Hyderabad">Rajiv Gandhi International Cricket Stadium</option>
        <option value="Bangalore">M. Chinnaswamy Stadium</option>
        <option value="Mumbai">Wankhede Stadium</option>
        <option value="Indore">Holkar Cricket Stadium</option>
        <option value="Kolkata">Eden Gardens</option>
        <option value="Delhi">Arun Jaitley Stadium (Feroz Shah Kotla)</option>
        <option value="Chandigarh">Punjab Cricket Association IS Bindra Stadium, Mohali</option>
        <option value="Jaipur">Sawai Mansingh Stadium</option>
        <option value="Chennai">M. A. Chidambaram Stadium</option>
        <option value="Cape Town">Newlands Cricket Ground</option>
        <option value="Port Elizabeth">St George Park</option>
        <option value="Durban">Kingsmead Cricket Ground</option>
        <option value="Centurion">SuperSport Park</option>
        <option value="East London">Buffalo Park</option>
        <option value="Johannesburg">Wanderers Stadium</option>
        <option value="Kimberley">Diamond Oval</option>
        <option value="Bloemfontein">Mangaung Oval</option>
        <option value="Ahmedabad">Narendra Modi Stadium</option>
        <option value="Cuttack">Barabati Stadium</option>
        <option value="Nagpur">Vidarbha Cricket Association (VCA) Stadium</option>
        <option value="Dharamsala">Himachal Pradesh Cricket Association Stadium</option>
        <option value="Visakhapatnam">Dr. Y. S. Rajasekhara Reddy ACA-VDCA Cricket Stadium</option>
        <option value="Pune">Maharashtra Cricket Association Stadium</option>
        <option value="Raipur">Shaheed Veer Narayan Singh International Cricket Stadium</option>
        <option value="Ranchi">Jharkhand State Cricket Association (JSCA) Stadium</option>
        <option value="Abu Dhabi">Sheikh Zayed Cricket Stadium</option>
        <option value="Sharjah">Sharjah Cricket Stadium</option>
        <option value="Mohali">Punjab Cricket Association IS Bindra Stadium, Mohali</option>
        <option value="Bengaluru">Chinnaswamy Stadium</option>
                </select>
            </div>

            <div>
                <label>Target Score:</label>
                <input type="number" onChange={(e) => setTarget(e.target.value)} value={target} />
            </div>
            <div>
                <label>Current Score:</label>
                <input type="number" onChange={(e) => setScore(e.target.value)} value={score} />
            </div>
            <div>
                <label>Overs Completed:</label>
                <input type="number" step="0.1" onChange={(e) => setOvers(e.target.value)} value={overs} />
            </div>
            <div>
                <label>Wickets Fallen:</label>
                <input type="number" onChange={(e) => setWickets(e.target.value)} value={wickets} />
            </div>

            {validationMsg && <p className="error">{validationMsg}</p>}
            <button onClick={handlePredict}>Predict</button>
            {error && <p className="error">{error}</p>}

            {prediction && (
    <div className="progress-container bg-white p-6 rounded-2xl shadow-lg text-center">
        <h3 className="text-xl font-bold mb-4">Winning Probabilities</h3>
        
        <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">{prediction.batting_team} Winning Probability:</h4>
            <ProgressBar now={prediction.win_probability} variant="success" animated 
                label={<span className="text-lg font-bold text-black">{prediction.win_probability}%</span>} 
                style={{ height: "30px", fontSize: "18px" }} />
        </div>
        
        <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">{prediction.bowling_team} Winning Probability:</h4>
            <ProgressBar now={prediction.loss_probability} variant="danger" animated 
                label={<span className="text-lg font-bold text-black">{prediction.loss_probability}%</span>} 
                style={{ height: "30px", fontSize: "18px" }} />
        </div>
        
        <div className="flex justify-center items-center">
            <PieChart width={350} height={350}>
                <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={120} 
                     fill="#8884d8" dataKey="value" label>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    </div>
)
}
        </div>
    );
};

export default Predict;