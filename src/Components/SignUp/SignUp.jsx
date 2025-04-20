import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const validateEmail = (email) => {
    if (!email.includes("@")) {
      return "Email must include '@'.";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const validateUsername = (username) => {
    if (!username) {
      return "Username is required.";
    }
    if (username.length < 3) {
      return "Username must be at least 3 characters long.";
    }
    return "";
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, username, password, confirmPassword, agreed } = formData;
    let validationErrors = {};

    const emailError = validateEmail(email);
    if (emailError) {
      validationErrors.email = emailError;
    }

    const usernameError = validateUsername(username);
    if (usernameError) {
      validationErrors.username = usernameError;
    }

    if (!validatePassword(password)) {
      validationErrors.password = "Password must be at least 8 characters long.";
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    if (!agreed) {
      validationErrors.agreed = "You must agree to the terms and conditions.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, username, password }),
        });

        if (response.ok) {

          
          alert("Sign-up successful!");
          navigate("/login"); // Redirect to home
        } else {
          const { error } = await response.json();
          setServerError(error);
        }
      } catch (err) {
        setServerError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div className="form-field">
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter a strong password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="form-field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>

          <div className="form-field checkbox-field">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              id="agree-checkbox"
            />
            <label htmlFor="agree-checkbox">I agree to the terms and conditions</label>
          </div>
          {errors.agreed && <p className="error">{errors.agreed}</p>}

          {serverError && <p className="server-error">{serverError}</p>}

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;