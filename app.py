from flask import Flask, request, jsonify
import pandas as pd
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Load the trained model
pipe = pickle.load(open('pipe_final.pkl', 'rb'))

# IPL teams and cities (Ensure names match training data)
teams = ['Sunrisers Hyderabad', 'Mumbai Indians', 'Royal Challengers Bangalore',
         'Kolkata Knight Riders', 'Kings XI Punjab', 'Chennai Super Kings',
         'Rajasthan Royals', 'Delhi Capitals']

cities = ['Hyderabad', 'Bangalore', 'Mumbai', 'Indore', 'Kolkata', 'Delhi',
          'Chandigarh', 'Jaipur', 'Chennai', 'Cape Town', 'Port Elizabeth',
          'Durban', 'Centurion', 'East London', 'Johannesburg', 'Kimberley',
          'Bloemfontein', 'Ahmedabad', 'Cuttack', 'Nagpur', 'Dharamsala',
          'Visakhapatnam', 'Pune', 'Raipur', 'Ranchi', 'Abu Dhabi',
          'Sharjah', 'Mohali', 'Bengaluru']

@app.route('/')
def home():
    return "IPL Win Predictor API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.get_json()
        
        batting_team = data.get('batting_team')
        bowling_team = data.get('bowling_team')
        city = data.get('city')
        target = int(data.get('target', 0))
        score = int(data.get('score', 0))
        overs = float(data.get('overs', 0))
        wickets = int(data.get('wickets', 0))

        # Validation checks
        if batting_team == bowling_team:
            return jsonify({'error': 'Batting and Bowling teams cannot be the same'})

        if overs == 0:
            return jsonify({'error': 'Overs cannot be zero'})

        # Compute derived features
        runs_left = target - score
        balls_left = 120 - int(overs * 6)
        wickets_left = 10 - wickets  
        current_run_rate = score / overs if overs > 0 else 0
        required_run_rate = (runs_left * 6) / balls_left if balls_left > 0 else 0

        # Prepare input DataFrame with correct column names
        input_df = pd.DataFrame({
            'batting_team': [batting_team],
            'bowling_team': [bowling_team],
            'city': [city],
            'runs_left': [runs_left],
            'balls_left': [balls_left],
            'wickets_left': [wickets_left],  
            'total_runs_x': [target],  
            'cur_run_rate': [current_run_rate],
            'req_run_rate': [required_run_rate]
        })

        # Ensure all expected columns are present
        expected_columns = {'batting_team', 'bowling_team', 'city', 'runs_left', 
                            'balls_left', 'wickets_left', 'total_runs_x', 
                            'cur_run_rate', 'req_run_rate'}

        missing_columns = expected_columns - set(input_df.columns)
        if missing_columns:
            return jsonify({'error': f'Missing columns: {missing_columns}'})

        # Make prediction using the trained model
        result = pipe.predict_proba(input_df)

        # Extract probabilities
        win_prob = round(result[0][1] * 100, 2)
        loss_prob = round(result[0][0] * 100, 2)

        return jsonify({
            'batting_team': batting_team,
            'bowling_team': bowling_team,
            'win_probability': win_prob,
            'loss_probability': loss_prob
        })

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)