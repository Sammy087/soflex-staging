import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowUp } from "../../components/Icons/ArrowUp";
import './style.css';

const InputField = ({ label, value, type = "text", icon, onChange, placeholder, onIconClick }) => (
  <div className="input-field">
    <div className="label">{label}</div>
    <div className="input-wrapper">
      <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
      {icon && <img className="icon" alt={label} src={icon} onClick={onIconClick} />}
    </div>
  </div>
);

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSignIn = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="iphone">
      <div className="container">
        <div className="arrow-up" onClick={handleBackClick}>
          <ArrowUp />
        </div>
        <div className="header">
          <img className="logo" alt="Logo" src="static/img/image-1.png" />
          <div className="welcome-message">Welcome to Med</div>
          <p className="description">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem</p>
        </div>
        <div className="form">
          <InputField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            icon="static/img/email-svgrepo-com.svg"
          />
          {errors.email && <div className="password-validations">{errors.email}</div>}
          <InputField
            label="Password"
            value={password}
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            icon="static/img/eye-svgrepo-com-1.svg"
            onIconClick={() => setShowPassword(!showPassword)}
          />
          {errors.password && <div className="password-validations">{errors.password}</div>}
        </div>
        <div className="footer">
          <button className="sign-in-button" onClick={handleSignIn}>Sign In</button>
          <p className="sign-up-message">
            Don't have an account? <a className="sign-up-link" onClick={handleSignUp}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;