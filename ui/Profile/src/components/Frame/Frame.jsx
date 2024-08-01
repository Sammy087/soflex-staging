/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame = ({ show, className }) => {
  return (
    <div
      className={`w-11 h-6 rounded-[26.67px] ${
        show === "off" ? "bg-greygrey-300" : "bg-main-shadesmain-color"
      } ${className}`}
    >
      <div
        className={`w-5 top-0.5 h-5 rounded-[26.67px] bg-ccwhite-ff relative ${
          show === "off" ? "left-0.5" : "left-[22px]"
        }`}
      />
    </div>
  );
};

Frame.propTypes = {
  show: PropTypes.oneOf(["off", "on"]),
};
