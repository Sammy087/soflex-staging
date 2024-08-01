/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const KeysNumbericLight = ({
  line2 = "DEF",
  line1 = "3",
  type,
  typeDeleteClassName,
  frameClassName,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <>
      {type === "delete" && (
        <img
          className={`absolute w-[123px] h-[47px] top-0 left-0 ${typeDeleteClassName}`}
          alt="Type delete"
          src="/img/type-delete.svg"
        />
      )}

      {["one-line", "two-lines"].includes(type) && (
        <div
          className={`w-[123px] shadow-[0px_1px_0px_#898a8d] h-[47px] rounded-[5px] bg-[#fcfcfe] ${
            type === "one-line" ? "relative" : ""
          } ${typeDeleteClassName}`}
        >
          <div
            className={`${type === "one-line" ? "[font-family:'SF_Pro-Regular',Helvetica]" : ""} ${
              type === "two-lines" ? "w-5" : ""
            } ${type === "one-line" ? "left-[54px]" : "left-[52px]"} ${type === "one-line" ? "tracking-[0]" : ""} ${
              type === "one-line" ? "text-[25px]" : ""
            } ${type === "one-line" ? "top-[7px]" : "top-px"} ${type === "one-line" ? "text-labelsprimary" : ""} ${
              type === "one-line" ? "h-[30px]" : "h-10"
            } ${type === "one-line" ? "font-normal" : ""} ${type === "one-line" ? "text-center" : ""} ${
              type === "one-line" ? "whitespace-nowrap" : ""
            } ${type === "one-line" ? "leading-[normal]" : ""} ${
              type === "one-line" ? "absolute" : "relative"
            } ${frameClassName}`}
          >
            {type === "two-lines" && (
              <>
                <div
                  className={`absolute h-3 top-[29px] -left-0.5 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-labelsprimary text-[10px] text-center tracking-[2.00px] leading-[normal] whitespace-nowrap ${divClassName}`}
                >
                  {line2}
                </div>
                <div
                  className={`absolute h-[30px] -top-px left-0.5 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-labelsprimary text-[25px] text-center tracking-[0] leading-[normal] whitespace-nowrap ${divClassNameOverride}`}
                >
                  {line1}
                </div>
              </>
            )}

            {type === "one-line" && <>{line1}</>}
          </div>
        </div>
      )}
    </>
  );
};

KeysNumbericLight.propTypes = {
  line2: PropTypes.string,
  line1: PropTypes.string,
  type: PropTypes.oneOf(["two-lines", "delete", "one-line"]),
};
