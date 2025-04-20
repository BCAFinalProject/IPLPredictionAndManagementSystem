import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import img1 from '../Images/bg1.jpg';

const Login = () => {
  const [backgroundImage, setBackgroundImage] = useState(img1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const backgroundImages = [img1];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
      setBackgroundImage(randomImage);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    let valid = true;
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('username', data.user.username); // Save the username
          navigate('/home'); // Redirect to the home page
        } else {
          const { error } = await response.json();
          setServerError(error);
        }
      } catch (err) {
        setServerError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage}) `}}></div>
      <div className="login-container">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Please login to continue your journey</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          {serverError && <p className="server-error">{serverError}</p>}
          <div className="action-buttons">
            <button type="submit" className="login-btn">Login</button>
            <p className="signup-text">
              New user? <span onClick={() => navigate('/signup')} className="signup-link">Sign Up</span>
            </p>
          </div>
          <p className="admin-text">
  Are you an admin?{' '}
  <span onClick={() => navigate('/adminlogin')} className="admin-link">
    Login as Admin
  </span>
</p>
        </form>
      </div>
    </div>
  );
};

export default Login;