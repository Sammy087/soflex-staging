import React from "react";
import { ArrowUp } from "../../icons/ArrowUp";
import "./style.css";

export const Iphone = () => {
  return (
    <div className="iphone">
      <div className="div">
        <div className="home-button" />
        <div className="frame">
          <div className="frame-2">
            <img
              className="https-lottiefiles"
              alt="Https lottiefiles"
              src="/img/https-lottiefiles-com-animations-forgot-password-animation-2zs.png"
            />
            <div className="div-wrapper">
              <div className="text-wrapper">Forget password</div>
            </div>
          </div>
          <div className="frame-3">
            <div className="name-serial-wrapper">
              <div className="name-serial">
                <div className="text-wrapper-2">Email</div>
                <div className="frame-4">
                  <div className="text-wrapper-3">@mail.com</div>
                  <img className="email-svgrepo-com" alt="Email svgrepo com" src="/img/email-svgrepo-com.svg" />
                </div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-5">
                <div className="text-wrapper-4">Recover password</div>
              </div>
            </div>
          </div>
        </div>
        <ArrowUp className="arrow-up" />
        <div className="status-bar">
          <div className="time">
            <div className="element">
              <div className="text-wrapper-5">9:41</div>
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
