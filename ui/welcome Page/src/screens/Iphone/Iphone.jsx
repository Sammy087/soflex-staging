import React from "react";
import { ArrowUp } from "../../icons/ArrowUp";
import "./style.css";

export const Iphone = () => {
  return (
    <div className="iphone">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">Welcome to Med</div>
          <p className="p">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem</p>
        </div>
        <div className="frame-2">
          <div className="input-fields">
            <div className="text-wrapper-2">Name</div>
            <div className="mail-com-wrapper">
              <div className="mail-com">Maria Adam</div>
            </div>
          </div>
          <div className="name-serial">
            <div className="text-wrapper-2">Email</div>
            <div className="frame-3">
              <div className="text-wrapper-3">@mail.com</div>
              <img className="img" alt="Email svgrepo com" src="/img/email-svgrepo-com.svg" />
            </div>
          </div>
          <div className="name-serial">
            <div className="text-wrapper-2">Password</div>
            <div className="frame-3">
              <div className="text-wrapper-3">******</div>
              <img className="img" alt="Eye svgrepo com" src="/img/eye-svgrepo-com-1.svg" />
            </div>
            <div className="text-wrapper-4">Password Validations</div>
          </div>
          <div className="name-serial">
            <div className="text-wrapper-2">Confirm Password</div>
            <div className="frame-3">
              <div className="text-wrapper-3">******</div>
              <img className="img" alt="Eye svgrepo com" src="/img/eye-svgrepo-com-1.svg" />
            </div>
          </div>
        </div>
        <img className="image" alt="Image" src="/img/image-1.png" />
        <div className="home-button" />
        <div className="frame-4">
          <div className="div-wrapper">
            <div className="text-wrapper-5">Sign up</div>
          </div>
          <p className="already-has-an">
            <span className="span">Already has an account? </span>
            <span className="text-wrapper-6">Sign in</span>
          </p>
        </div>
        <ArrowUp className="arrow-up" />
        <div className="status-bar">
          <div className="time">
            <div className="element">
              <div className="text-wrapper-7">9:41</div>
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
