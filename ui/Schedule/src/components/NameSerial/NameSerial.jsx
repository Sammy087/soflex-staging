/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const NameSerial = ({ className }) => {
  return (
    <div className={`name-serial ${className}`}>
      <div className="text-wrapper">medicine Name</div>
      <div className="frame">
        <div className="div">Choose Medicine</div>
        <img className="down-arrow-svgrepo" alt="Down arrow svgrepo" src="/img/down-arrow-5-svgrepo-com.svg" />
      </div>
    </div>
  );
};
