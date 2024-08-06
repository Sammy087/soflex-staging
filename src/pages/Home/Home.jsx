import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign Up");
  };

  const handleAppleSignUp = () => {
    console.log("Apple Sign Up");
  };

  return (
    <div className="iphone">
      <div className="content">
        <img className="logo" alt="Logo" src="static/img/image-1.png" />
        <div className="welcome-section-container">
        <div className="welcome-section">
          <div className="welcome-message">Welcome to Med</div>
          <p className="description">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem</p>
        </div>
        <div className="sign-up-options">
          <div className="sign-up-option" onClick={handleSignUp}>
            <img className="icon" alt="Sign up with Email" src="static/img/email-svgrepo-com.svg" />
            <div>Sign up with Email</div>
          </div>
          <div className="sign-up-option" onClick={handleGoogleSignUp}>
            <img className="icon" alt="Continue with Google" src="static/img/google-svgrepo-com.svg" />
            <div>Continue with Google</div>
          </div>
          <div className="sign-up-option" onClick={handleAppleSignUp}>
            <img className="icon" alt="Continue with Apple" src="static/img/apple-173-svgrepo-com.svg" />
            <div>Continue with Apple</div>
          </div>
          <div className="sign-up-option" onClick={handleSignIn}>
            <div>Join as Guest</div>
          </div>
        </div>
        <div className="sign-in-message">
          Already has an account? <a className="sign-in-link" onClick={handleSignIn}>Sign in</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;