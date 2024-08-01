/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const HomeIndicator = ({ device, orientation, mode, className }) => {
  return (
    <div
      className={`${device === "i-phone" ? "w-[393px]" : "w-[400px]"} ${
        device === "i-phone" ? "h-[21px]" : "h-5"
      } ${className}`}
    >
      <div
        className={`rotate-180 rounded-[100px] relative ${
          device === "i-pad"
            ? "w-[315px]"
            : device === "i-phone" && orientation === "landscape"
            ? "w-[220px]"
            : "w-[139px]"
        } ${
          device === "i-pad"
            ? "left-[43px]"
            : device === "i-phone" && orientation === "landscape"
            ? "left-[87px]"
            : "left-[127px]"
        } ${device === "i-phone" ? "top-2" : "top-[7px]"} ${device === "i-phone" ? "h-[5px]" : "h-1.5"} ${
          mode === "light" ? "bg-graysblack" : "bg-grayswhite"
        }`}
      />
    </div>
  );
};

HomeIndicator.propTypes = {
  device: PropTypes.oneOf(["i-pad", "i-phone"]),
  orientation: PropTypes.oneOf(["landscape", "portrait"]),
  mode: PropTypes.oneOf(["dark", "light"]),
};
