import React from "react";
import "./style.css";

export const Iphone = () => {
  return (
    <div className="iphone">
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <div className="frame-3">
              <div className="text-wrapper">Welcome to Med</div>
              <p className="p">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem</p>
            </div>
            <div className="frame-4">
              <div className="frame-5">
                <div className="frame-6">
                  <img className="img" alt="Email svgrepo com" src="/img/email-svgrepo-com.svg" />
                  <div className="text-wrapper-2">Sign up with Email</div>
                </div>
                <div className="frame-6">
                  <img className="img" alt="Google svgrepo com" src="/img/google-svgrepo-com.svg" />
                  <div className="text-wrapper-2">Continue with Google</div>
                </div>
                <div className="frame-6">
                  <img className="img" alt="Apple svgrepo" src="/img/apple-173-svgrepo-com.svg" />
                  <div className="text-wrapper-2">Continue with Apple</div>
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-2">Join as Guest</div>
                </div>
              </div>
              <p className="already-has-an">
                <span className="span">Already has an account? </span>
                <span className="text-wrapper-3">Sign in</span>
              </p>
            </div>
          </div>
          <div className="home-button" />
        </div>
        <img className="image" alt="Image" src="/img/image-1.png" />
        <div className="status-bar">
          <div className="time">
            <div className="element">
              <div className="text-wrapper-4">9:41</div>
            </div>
          </div>
          <div className="battery" />
          <div className="wifi" />
          <div className="network">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
