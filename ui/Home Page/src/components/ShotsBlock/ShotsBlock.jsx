/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const ShotsBlock = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "minimized",
  });

  return (
    <div
      className={`w-[358px] flex flex-col items-start gap-6 px-3.5 py-6 overflow-hidden rounded-[20px] bg-ccwhite-ff relative ${className}`}
    >
      <div className="w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative">
        <div className="[font-family:'Montserrat',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-xl text-ccblack-00 font-semibold leading-[normal] whitespace-nowrap relative">
          Shots Management
        </div>
        <div className="[font-family:'Montserrat',Helvetica] w-fit tracking-[0] text-sm text-main-shadesmain-darker underline font-semibold leading-[normal] relative">
          Edit schedule
        </div>
      </div>
      <div
        className={`w-full flex self-stretch flex-col flex-[0_0_auto] relative ${
          ["defualt", "forgot", "taken"].includes(state.property1) ? "items-center" : "items-start"
        } ${["defualt", "forgot", "taken"].includes(state.property1) ? "gap-4" : "gap-3"}`}
      >
        {["defualt", "forgot", "taken"].includes(state.property1) && (
          <>
            <div
              className={`flex-col items-center flex-[0_0_auto] relative ${
                ["defualt", "forgot"].includes(state.property1) ? "w-[161px]" : ""
              } ${state.property1 === "taken" ? "inline-flex" : "flex"} ${
                state.property1 === "taken" ? "gap-1.5" : "gap-2"
              }`}
            >
              {["defualt", "forgot"].includes(state.property1) && (
                <>
                  <div
                    className={`[font-family:'Montserrat',Helvetica] mt-[-1.00px] tracking-[0] text-sm text-ccblack-00 font-medium leading-[18px] relative ${
                      state.property1 === "forgot" ? "w-fit" : ""
                    } ${state.property1 === "defualt" ? "self-stretch" : ""} ${
                      state.property1 === "forgot" ? "mr-[-4.50px]" : ""
                    } ${state.property1 === "forgot" ? "ml-[-4.50px]" : ""} ${
                      state.property1 === "forgot" ? "whitespace-nowrap" : ""
                    }`}
                  >
                    {state.property1 === "defualt" && <p>Days Left for next Shot</p>}

                    {state.property1 === "forgot" && <p>It’s time to make a shot!</p>}
                  </div>
                  <p className="[font-family:'Montserrat',Helvetica] self-stretch tracking-[0] text-[32px] text-transparent font-semibold text-center leading-[normal] relative">
                    <span className="text-[#50b498]">9</span>
                    <span className="text-black"> Days</span>
                  </p>
                </>
              )}

              {state.property1 === "taken" && (
                <>
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-transparent text-[32px] text-center tracking-[0] leading-[normal]">
                    <span className="text-[#50b498]">Nice </span>
                    <span className="text-black">Job!</span>
                  </p>
                  <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                      <img className="relative w-8 h-8" alt="Star svgrepo com" src="/img/star-svgrepo-com.svg" />
                      <img className="relative w-8 h-8" alt="Star svgrepo com" src="/img/star-svgrepo-com-2.svg" />
                      <img className="relative w-8 h-8" alt="Star svgrepo com" src="/img/star-svgrepo-com-2.svg" />
                      <div className="relative w-8 h-8">
                        <div className="relative h-8">
                          <img className="absolute w-[26px] h-6 top-1 left-[3px]" alt="Vector" src="/img/vector.svg" />
                          <img
                            className="absolute w-8 h-8 top-0 left-0 object-cover"
                            alt="Https lottiefiles"
                            src="/img/https-lottiefiles-com-animations-celebration-rocket-happy-fire.gif"
                          />
                        </div>
                      </div>
                      <img className="relative w-8 h-8" alt="Star svgrepo com" src="/img/star-svgrepo-com-3.svg" />
                    </div>
                  </div>
                  <p className="relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-ccblack-00 text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                    Shot taken today at 3 PM
                  </p>
                </>
              )}
            </div>
            <div className="border border-solid border-ccinput-bg w-full flex self-stretch items-center gap-[15px] flex-[0_0_auto] p-3 overflow-hidden rounded-[15px] relative">
              <div className="inline-flex self-stretch flex-col items-start gap-3 flex-[0_0_auto] justify-center relative">
                <div className="[font-family:'Montserrat',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-ccblack-00 relative font-semibold text-center leading-[normal]">
                  Name
                </div>
                <div className="w-[306px] flex items-start gap-2 flex-[0_0_auto] justify-center relative">
                  <div className="w-[143px] flex items-center gap-2.5 p-2 rounded-md justify-center bg-ccinput-bg relative">
                    <p className="[font-family:'Montserrat',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-xs text-transparent relative font-medium whitespace-nowrap leading-6">
                      <span className="text-[#4d4d4d]">Dosage: </span>
                      <span className="text-black">50mg</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] p-2 rounded-md justify-center bg-ccinput-bg relative">
                    <p className="[font-family:'Montserrat',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-xs text-transparent relative font-normal whitespace-nowrap leading-6">
                      <span className="text-[#4d4d4d] font-medium">Frequancy:</span>
                      <span className="text-black">&nbsp;</span>
                      <span className="text-black font-medium">Everyday </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div
          className={`w-full flex self-stretch flex-col flex-[0_0_auto] relative ${
            ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1)
              ? "items-center"
              : "items-start"
          } ${["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "gap-4" : "gap-2"}`}
        >
          <div
            className={`flex-col items-center relative ${
              ["defualt", "forgot", "taken"].includes(state.property1)
                ? "w-full"
                : ["forgot-minimized", "minimized"].includes(state.property1)
                ? "w-[161px]"
                : ""
            } ${state.property1 === "taken-minimized" ? "inline-flex" : "flex"} ${
              ["defualt", "forgot", "taken"].includes(state.property1) ? "self-stretch" : ""
            } ${["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "gap-2" : "gap-3"} ${
              ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "flex-[0_0_auto]" : ""
            } ${["defualt", "forgot", "taken"].includes(state.property1) ? "h-[38px]" : ""} ${
              ["defualt", "forgot", "taken"].includes(state.property1) ? "rounded-[10px]" : ""
            } ${["defualt", "forgot", "taken"].includes(state.property1) ? "justify-center" : ""} ${
              ["defualt", "taken"].includes(state.property1)
                ? "bg-main-shadesmain-color"
                : state.property1 === "forgot"
                ? "bg-ccwarning"
                : ""
            }`}
            onClick={() => {
              dispatch("click_126");
            }}
          >
            {["defualt", "forgot", "taken"].includes(state.property1) && (
              <div className="[font-family:'Montserrat',Helvetica] w-fit tracking-[0] text-sm text-ccwhite-ff relative font-semibold text-center leading-[normal]">
                {["defualt", "forgot"].includes(state.property1) && <>Mark as Taken</>}

                {state.property1 === "taken" && <>Enter Today’s Data</>}
              </div>
            )}

            {["forgot-minimized", "minimized"].includes(state.property1) && (
              <>
                <div
                  className={`[font-family:'Montserrat',Helvetica] mt-[-1.00px] tracking-[0] text-sm text-ccblack-00 font-medium leading-[18px] relative ${
                    state.property1 === "forgot-minimized" ? "w-fit" : ""
                  } ${state.property1 === "minimized" ? "self-stretch" : ""} ${
                    state.property1 === "forgot-minimized" ? "mr-[-4.50px]" : ""
                  } ${state.property1 === "forgot-minimized" ? "ml-[-4.50px]" : ""} ${
                    state.property1 === "forgot-minimized" ? "whitespace-nowrap" : ""
                  }`}
                >
                  {state.property1 === "minimized" && <p>Days Left for next Shot</p>}

                  {state.property1 === "forgot-minimized" && <p>It’s time to make a shot!</p>}
                </div>
                <p className="[font-family:'Montserrat',Helvetica] self-stretch tracking-[0] text-2xl text-transparent font-semibold text-center leading-[normal] relative">
                  <span className="text-[#50b498]">9</span>
                  <span className="text-black"> Days</span>
                </p>
              </>
            )}

            {state.property1 === "taken-minimized" && (
              <>
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-transparent text-[32px] text-center tracking-[0] leading-[normal]">
                  <span className="text-[#50b498]">Nice </span>
                  <span className="text-black">Job!</span>
                </p>
                <img className="relative self-stretch w-full flex-[0_0_auto]" alt="Frame" src="/img/frame-967.svg" />
                <p className="relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-ccblack-00 text-sm tracking-[0] leading-[18px] whitespace-nowrap">
                  Shot taken today at 3 PM
                </p>
              </>
            )}
          </div>
          <div
            className={`w-full flex self-stretch flex-col relative ${
              ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1)
                ? "items-center"
                : "items-start"
            } ${["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "gap-3" : "gap-2"} ${
              ["defualt", "forgot", "taken"].includes(state.property1) ? "flex-[0_0_auto]" : ""
            } ${["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "h-[38px]" : ""} ${
              ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "rounded-[10px]" : ""
            } ${
              ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "justify-center" : ""
            } ${
              ["minimized", "taken-minimized"].includes(state.property1)
                ? "bg-main-shadesmain-color"
                : state.property1 === "forgot-minimized"
                ? "bg-ccwarning"
                : ""
            }`}
            onClick={() => {
              dispatch("click");
            }}
          >
            <div
              className={`relative ${
                ["defualt", "forgot", "taken"].includes(state.property1) ? "border-main-shadesmain-color" : ""
              } ${["defualt", "forgot", "taken"].includes(state.property1) ? "flex" : ""} ${
                ["defualt", "forgot", "taken"].includes(state.property1) ? "items-center" : ""
              } ${
                ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "text-ccwhite-ff" : ""
              } ${
                ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1)
                  ? "[font-family:'Montserrat',Helvetica]"
                  : ""
              } ${
                ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "leading-[normal]" : ""
              } ${
                ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "w-fit" : "w-full"
              } ${["defualt", "forgot", "taken"].includes(state.property1) ? "flex-col" : ""} ${
                ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "font-semibold" : ""
              } ${
                ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "text-center" : ""
              } ${["defualt", "forgot", "taken"].includes(state.property1) ? "rounded-[10px]" : ""} ${
                ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "text-sm" : ""
              } ${["defualt", "forgot", "taken"].includes(state.property1) ? "gap-3" : ""} ${
                ["defualt", "forgot", "taken"].includes(state.property1) ? "border border-solid" : ""
              } ${["defualt", "forgot", "taken"].includes(state.property1) ? "self-stretch" : ""} ${
                ["forgot-minimized", "minimized", "taken-minimized"].includes(state.property1) ? "tracking-[0]" : ""
              } ${["defualt", "forgot", "taken"].includes(state.property1) ? "h-[38px]" : ""} ${
                ["defualt", "forgot", "taken"].includes(state.property1) ? "justify-center" : ""
              }`}
            >
              {["defualt", "forgot", "taken"].includes(state.property1) && (
                <div className="[font-family:'Montserrat',Helvetica] w-fit tracking-[0] text-sm text-main-shadesmain-color relative font-medium text-center leading-[normal]">
                  Add new shot
                </div>
              )}

              {["forgot-minimized", "minimized"].includes(state.property1) && <>Mark as Taken</>}

              {state.property1 === "taken-minimized" && <>Enter Today’s Data</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "minimized") {
    switch (action) {
      case "click":
        return {
          property1: "taken-minimized",
        };
    }
  }

  if (state.property1 === "defualt") {
    switch (action) {
      case "click_126":
        return {
          property1: "taken",
        };
    }
  }

  if (state.property1 === "forgot-minimized") {
    switch (action) {
      case "click":
        return {
          property1: "taken-minimized",
        };
    }
  }

  if (state.property1 === "forgot") {
    switch (action) {
      case "click_126":
        return {
          property1: "taken",
        };
    }
  }

  return state;
}

ShotsBlock.propTypes = {
  property1: PropTypes.oneOf(["forgot-minimized", "defualt", "taken", "minimized", "taken-minimized", "forgot"]),
};
