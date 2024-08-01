import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="div-2" />
        <img className="close-svgrepo-com" alt="Close svgrepo com" src="/img/close-svgrepo-com.svg" />
      </div>
      <img
        className="https-lottiefiles"
        alt="Https lottiefiles"
        src="/img/https-lottiefiles-com-animations-mail-sent-successfully-9zpwqb.gif"
      />
      <div className="div-3">
        <div className="text-wrapper">Mail Sent</div>
        <p className="p">check your e-mail with instructions</p>
      </div>
      <div className="frame-wrapper">
        <div className="div-wrapper">
          <div className="text-wrapper-2">Confirm</div>
        </div>
      </div>
    </div>
  );
};
