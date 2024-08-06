import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp } from "../../components/Icons/ArrowUp";
import "./style.css";

const InputField = ({ label, value, type = "text", icon, onChange, placeholder, onIconClick }) => (
  <div className="input-field">
    <div className="label">{label}</div>
    <div className="input-wrapper">
      <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
      {icon && <img className="icon" alt={label} src={icon} onClick={onIconClick} />}
    </div>
  </div>
);

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBackClick = () => {
    navigate("/");
  };

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSignUp = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Sign up");
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
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
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && <div className="password-validations">{errors.name}</div>}
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
          <InputField
            label="Confirm Password"
            value={confirmPassword}
            placeholder="Confirm your password"
            type={showConfirmPassword ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon="static/img/eye-svgrepo-com-1.svg"
            onIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
          {errors.confirmPassword && <div className="password-validations">{errors.confirmPassword}</div>}
        </div>
        <div className="footer">
          <button className="sign-up-button" onClick={handleSignUp}>Sign up</button>
          <p className="sign-in-message">
            Already has an account? <a className="sign-in-link" onClick={handleSignIn}>Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;