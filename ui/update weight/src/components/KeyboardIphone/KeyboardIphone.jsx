/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button1 } from "../../icons/Button1";
import { HomeIndicator } from "../HomeIndicator";
import { KeysNumbericLight } from "../KeysNumbericLight";

export const KeyboardIphone = ({
  email2 = "Hide My Email",
  email1 = "name@email.com",
  showReplace = true,
  mode,
  type,
  className,
  keysNumbericLightFrameClassName,
  keysNumbericLightDivClassName,
  keysNumbericLightDivClassNameOverride,
  keysNumbericLightDivClassName1,
  keysNumbericLightDivClassName2,
  keysNumbericLightDivClassName3,
  keysNumbericLightDivClassName4,
  keysNumbericLightDivClassName5,
  keysNumbericLightDivClassName6,
  keysNumbericLightDivClassName7,
  keysNumbericLightDivClassName8,
  keysNumbericLightDivClassName9,
  keysNumbericLightDivClassName10,
  keysNumbericLightDivClassName11,
  keysNumbericLightDivClassName12,
  keysNumbericLightDivClassName13,
  keysNumbericLightDivClassName14,
  keysNumbericLightDivClassName15,
  keysNumbericLightDivClassName16,
  homeIndicatorDeviceIpadClassName,
}) => {
  return (
    <div
      className={`flex-col items-center [-webkit-backdrop-filter:blur(100px)_brightness(100%)] backdrop-blur-[100px] backdrop-brightness-[100%] relative ${
        ["URL", "default", "email", "emoji", "find-and-replace", "toolbar"].includes(type) ? "w-[393px]" : ""
      } ${type === "numbers-and-punctuation" ? "inline-flex" : "flex"} ${
        type === "numbers-and-punctuation" ? "gap-[58px]" : type === "emoji" ? "gap-2.5" : ""
      } ${
        type === "numbers-and-punctuation"
          ? "pt-1.5 pb-0 px-0"
          : type === "emoji"
          ? "pt-2.5 pb-0 px-2"
          : ["URL", "default", "email", "toolbar"].includes(type)
          ? "pt-[3px] pb-0 px-0"
          : ""
      } ${type === "emoji" ? "h-96" : ""} ${
        (mode === "light" && type === "URL") ||
        (mode === "light" && type === "default") ||
        (mode === "light" && type === "email") ||
        (mode === "light" && type === "find-and-replace") ||
        (mode === "light" && type === "numbers-and-punctuation") ||
        (mode === "light" && type === "toolbar")
          ? "bg-blend-lighten"
          : ""
      } ${["URL", "default", "email", "find-and-replace", "toolbar"].includes(type) ? "justify-end" : ""} ${
        mode === "vibrant"
          ? "bg-[#00000066]"
          : mode === "dark"
          ? "bg-[#383838bf]"
          : type === "emoji" && mode === "light"
          ? "bg-[#eaecef]"
          : "bg-[#dedede]"
      } ${className}`}
    >
      {type === "emoji" && (
        <div
          className={`w-full self-stretch h-[37px] relative ${mode === "vibrant" ? "rounded-[10px]" : "rounded-xl"} ${
            mode === "dark" ? "bg-[#7676803d]" : mode === "light" ? "bg-[#f7f8fc]" : "bg-[#ffffff4c]"
          }`}
        >
          <div
            className={`[font-family:'SF_Pro-Regular',Helvetica] left-10 tracking-[-0.50px] text-[17px] top-2 absolute font-normal whitespace-nowrap leading-[22px] ${
              mode === "dark"
                ? "text-labelssecondary-dark"
                : mode === "light"
                ? "text-labelssecondary"
                : "text-[#c2c2c2]"
            } ${mode === "vibrant" ? "bg-blend-overlay" : ""}`}
          >
            Search Emoji
          </div>
          <div
            className={`[font-family:'SF_Pro-Regular',Helvetica] left-2.5 tracking-[0] text-[17px] top-2 absolute font-normal text-center whitespace-nowrap leading-[22px] ${
              mode === "dark"
                ? "text-labelssecondary-dark"
                : mode === "light"
                ? "text-labelssecondary"
                : "text-[#c2c2c2]"
            } ${mode === "vibrant" ? "bg-blend-overlay" : ""}`}
          >
            􀊫
          </div>
        </div>
      )}

      {["URL", "default", "email", "toolbar"].includes(type) && (
        <div
          className={`relative ${type === "URL" ? "w-[393px]" : "w-full"} ${
            ["default", "email", "toolbar"].includes(type) ? "flex" : ""
          } ${["default", "email", "toolbar"].includes(type) ? "self-stretch" : ""} ${
            ["email", "toolbar"].includes(type) ? "items-center" : type === "default" ? "items-start" : ""
          } ${["default", "email", "toolbar"].includes(type) ? "flex-[0_0_auto]" : ""} ${
            type === "email"
              ? "px-[3px] py-0"
              : type === "toolbar"
              ? "pt-[3px] pb-2.5 px-[18px]"
              : type === "default"
              ? "px-0 py-[3px]"
              : ""
          } ${type === "URL" ? "h-[59px]" : ""} ${["email", "toolbar"].includes(type) ? "justify-between" : ""}`}
        >
          {["URL", "default"].includes(type) && (
            <div
              className={`relative ${type === "URL" ? "w-[361px]" : ""} ${type === "default" ? "flex" : ""} ${
                type === "URL" ? "left-4" : ""
              } ${type === "default" ? "items-center" : ""} ${type === "default" ? "grow" : ""} ${
                type === "URL" ? "top-[9px]" : ""
              } ${type === "default" ? "gap-0.5" : ""} ${type === "default" ? "flex-1" : ""} ${
                type === "default" ? "px-px py-0" : ""
              } ${type === "default" ? "h-[39px]" : "h-11"} ${type === "URL" ? "rounded-[10px]" : ""} ${
                mode === "vibrant" && type === "URL"
                  ? "bg-[#ffffff4c]"
                  : type === "URL" && mode === "dark"
                  ? "bg-graysblack-dark"
                  : mode === "light" && type === "URL"
                  ? "bg-grayswhite"
                  : ""
              }`}
            >
              {type === "URL" && (
                <>
                  <div
                    className={`[font-family:'SF_Pro-Regular',Helvetica] left-3.5 text-[17px] top-[11px] absolute font-normal whitespace-nowrap leading-[22px] ${
                      mode === "vibrant" ? "tracking-[-0.50px]" : "tracking-[0]"
                    } ${
                      mode === "dark"
                        ? "text-labelsprimary-dark"
                        : mode === "light"
                        ? "text-labelsprimary"
                        : "text-[#c2c2c2]"
                    } ${mode === "vibrant" ? "bg-blend-overlay" : ""}`}
                  >
                    http://www.apple.com
                  </div>
                  <div
                    className={`[font-family:'SF_Pro-Regular',Helvetica] left-[298px] tracking-[0] text-[17px] top-[11px] absolute font-normal text-center whitespace-nowrap leading-[22px] ${
                      mode === "dark"
                        ? "text-labelssecondary-dark"
                        : mode === "light"
                        ? "text-labelssecondary"
                        : "text-[#c2c2c2]"
                    } ${mode === "vibrant" ? "bg-blend-overlay" : ""}`}
                  >
                    􀊱
                  </div>
                  <div
                    className={`[font-family:'SF_Pro-Regular',Helvetica] left-[329px] tracking-[0] text-[17px] top-[11px] absolute font-normal text-center whitespace-nowrap leading-[22px] ${
                      mode === "dark"
                        ? "text-labelssecondary-dark"
                        : mode === "light"
                        ? "text-labelssecondary"
                        : "text-[#c2c2c2]"
                    } ${mode === "vibrant" ? "bg-blend-overlay" : ""}`}
                  >
                    􀁡
                  </div>
                </>
              )}

              {type === "default" && (
                <div
                  className={`self-stretch grow flex-1 rounded-[4.6px] relative ${
                    mode === "light" ? "bg-[#ebedf0]" : "bg-[#565455]"
                  }`}
                >
                  <div
                    className={`[display:-webkit-box] [font-style:var(--body-regular-font-style)] [-webkit-line-clamp:1] -top-px [-webkit-box-orient:vertical] absolute font-body-regular leading-[var(--body-regular-line-height)] font-[number:var(--body-regular-font-weight)] text-center text-[length:var(--body-regular-font-size)] left-0 tracking-[var(--body-regular-letter-spacing)] h-[39px] overflow-hidden text-ellipsis ${
                      mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                    } ${mode === "light" ? "w-[124px]" : "w-[127px]"}`}
                  >
                    “The”
                  </div>
                </div>
              )}

              {mode === "light" && type === "default" && (
                <div className="inline-flex h-[25px] items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-px bg-labelsprimary opacity-0" />
                </div>
              )}

              {type === "default" && (
                <>
                  <div className="self-stretch grow flex-1 rounded-[4.6px] relative">
                    <div
                      className={`[display:-webkit-box] [font-style:var(--body-regular-font-style)] [-webkit-line-clamp:1] -top-px [-webkit-box-orient:vertical] absolute font-body-regular leading-[var(--body-regular-line-height)] font-[number:var(--body-regular-font-weight)] text-center text-[length:var(--body-regular-font-size)] left-0 tracking-[var(--body-regular-letter-spacing)] h-[39px] overflow-hidden text-ellipsis ${
                        mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                      } ${mode === "light" ? "w-[124px]" : "w-[127px]"}`}
                    >
                      the
                    </div>
                  </div>
                  <div className="inline-flex items-center flex-[0_0_auto] px-0.5 py-0 h-[25px] justify-center relative">
                    <div
                      className={`w-px self-stretch relative ${mode === "light" ? "opacity-10" : "opacity-20"} ${
                        mode === "light" ? "bg-labelsprimary" : "bg-labelsprimary-dark"
                      }`}
                    />
                  </div>
                  <div className="self-stretch grow flex-1 rounded-[4.6px] relative">
                    <div
                      className={`[display:-webkit-box] [font-style:var(--body-regular-font-style)] [-webkit-line-clamp:1] -top-px [-webkit-box-orient:vertical] absolute font-body-regular leading-[var(--body-regular-line-height)] font-[number:var(--body-regular-font-weight)] text-center text-[length:var(--body-regular-font-size)] left-0 tracking-[var(--body-regular-letter-spacing)] h-[39px] overflow-hidden text-ellipsis ${
                        mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                      } ${mode === "light" ? "w-[124px]" : "w-[127px]"}`}
                    >
                      to
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {type === "email" && (
            <>
              <div
                className={`font-callout-regular w-[164px] mt-[-1.00px] tracking-[var(--callout-regular-letter-spacing)] text-[length:var(--callout-regular-font-size)] [font-style:var(--callout-regular-font-style)] relative h-[45px] font-[number:var(--callout-regular-font-weight)] text-center leading-[var(--callout-regular-line-height)] ${
                  mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                }`}
              >
                {email1}
              </div>
              <div
                className={`w-px h-[25px] relative ${mode === "light" ? "bg-fillsprimary" : "bg-fillsprimary-dark"}`}
              />
              <div
                className={`font-callout-regular w-[164px] mt-[-1.00px] tracking-[var(--callout-regular-letter-spacing)] text-[length:var(--callout-regular-font-size)] [font-style:var(--callout-regular-font-style)] relative h-[45px] font-[number:var(--callout-regular-font-weight)] text-center leading-[var(--callout-regular-line-height)] ${
                  mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                }`}
              >
                {email2}
              </div>
              <div
                className={`w-px h-[25px] relative ${mode === "light" ? "bg-fillsprimary" : "bg-fillsprimary-dark"}`}
              />
              <div className="inline-flex flex-col items-start flex-[0_0_auto] px-[15px] py-0 relative">
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[19px] relative font-normal text-center whitespace-nowrap leading-[21px] ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  􀟖
                </div>
              </div>
            </>
          )}

          {type === "toolbar" && (
            <>
              <div className="w-8 h-8 relative">
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] left-px tracking-[0] text-[22px] top-1 font-normal text-center whitespace-nowrap leading-[22px] absolute ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  􀅒
                </div>
              </div>
              <div className="w-8 h-8 relative">
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] left-0 tracking-[0] text-[22px] top-1 font-normal text-center whitespace-nowrap leading-[22px] absolute ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  􀏫
                </div>
              </div>
              <div className="w-8 h-8 relative">
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] left-0 tracking-[0] text-[22px] top-1 font-normal text-center whitespace-nowrap leading-[22px] absolute ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  􀌞
                </div>
              </div>
              <div className="w-8 h-8 relative">
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] left-[3px] tracking-[0] text-[22px] top-1 font-normal text-center whitespace-nowrap leading-[22px] absolute ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  􀎾
                </div>
              </div>
              <div className="w-8 h-8 relative">
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] left-[3px] tracking-[0] text-[22px] top-1 font-normal text-center whitespace-nowrap leading-[22px] absolute ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  􀹃
                </div>
              </div>
              <div className="w-8 h-8 relative">
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] left-1 tracking-[0] text-[22px] top-1 font-normal text-center whitespace-nowrap leading-[22px] absolute ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  􀈷
                </div>
              </div>
              <div className="w-8 h-8 relative">
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] left-[3px] tracking-[0] text-[22px] top-1 font-normal text-center whitespace-nowrap leading-[22px] absolute ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  􀉥
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {["emoji", "find-and-replace"].includes(type) && (
        <div className={`w-full self-stretch relative ${type === "find-and-replace" ? "h-12" : "h-[253px]"}`}>
          {type === "emoji" && (
            <>
              <div className="w-[393px] left-0 flex items-center top-[220px] pl-3 pr-[22px] py-0 h-6 justify-between absolute">
                <img
                  className="w-4 h-4 relative"
                  alt="Recents"
                  src={mode === "light" ? "/img/recents-2.svg" : "/img/recents-1.svg"}
                />
                <div className="w-4 mt-[-3.00px] h-[30px] mb-[-3.00px] relative">
                  <div
                    className={`w-[30px] left-[-7px] h-[30px] rounded-[15px] relative ${
                      mode === "light" ? "bg-[#0000001a]" : "bg-[#ffffff1a]"
                    }`}
                  >
                    <img
                      className="w-4 left-[7px] top-[7px] h-4 absolute"
                      alt="Smileys people"
                      src={mode === "light" ? "/img/smileys-people-2.svg" : "/img/smileys-people-1.svg"}
                    />
                  </div>
                </div>
                <img
                  className="w-[16.33px] h-[15.97px] relative"
                  alt="Animals"
                  src={mode === "light" ? "/img/animals-2.svg" : "/img/animals-1.svg"}
                />
                <img
                  className="w-4 h-4 relative"
                  alt="Food drink"
                  src={mode === "light" ? "/img/food-drink-2.svg" : "/img/food-drink-1.svg"}
                />
                <img
                  className="w-4 h-4 relative"
                  alt="Activity"
                  src={mode === "light" ? "/img/activity-2.svg" : "/img/activity-1.svg"}
                />
                <img
                  className="w-4 h-4 relative"
                  alt="Travel places"
                  src={mode === "light" ? "/img/travel-places-2.svg" : "/img/travel-places-1.svg"}
                />
                <img
                  className="w-[11.67px] h-4 relative"
                  alt="Objects"
                  src={mode === "light" ? "/img/objects-2.svg" : "/img/objects-1.svg"}
                />
                <img
                  className="w-[14.67px] h-4 relative"
                  alt="Symbols"
                  src={mode === "light" ? "/img/symbols-2.svg" : "/img/symbols-1.svg"}
                />
                <img
                  className="w-[11.44px] h-[14.3px] relative"
                  alt="Union"
                  src={mode === "light" ? "/img/union-2.svg" : "/img/union-1.svg"}
                />
                <div className="inline-flex flex-col items-start flex-[0_0_auto] pl-1.5 pr-0 py-0 relative">
                  <img
                    className="w-[21.67px] h-[18px] relative"
                    alt="Delete"
                    src={mode === "light" ? "/img/delete-2.svg" : "/img/delete-1.svg"}
                  />
                </div>
              </div>
              <div className="left-0.5 inline-flex items-start top-[21px] gap-3.5 px-1 py-0 absolute">
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😀
                  <br />
                  😃
                  <br />
                  😄
                  <br />
                  😁
                  <br />
                  😆
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  🥹
                  <br />
                  😅
                  <br />
                  😂
                  <br />
                  🤣
                  <br />
                  🥲
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  ☺️
                  <br />
                  😊
                  <br />
                  😇
                  <br />
                  🙂
                  <br />
                  🙃
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😉
                  <br />
                  😌
                  <br />
                  😍
                  <br />
                  🥰
                  <br />
                  😘
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😗
                  <br />
                  😙
                  <br />
                  😚
                  <br />
                  😋
                  <br />
                  😛
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😝
                  <br />
                  😜
                  <br />
                  🤪
                  <br />
                  🤨
                  <br />
                  🧐
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  🤓
                  <br />
                  😎
                  <br />
                  🥸
                  <br />
                  🤩
                  <br />
                  🥳
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😏
                  <br />
                  😒
                  <br />
                  😞
                  <br />
                  😔
                  <br />
                  😟
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😕
                  <br />
                  🙁
                  <br />☹<br />
                  ️😣
                  <br />
                  😖
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😫
                  <br />
                  😩
                  <br />
                  🥺
                  <br />
                  😢
                  <br />
                  😭
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😤
                  <br />
                  😠
                  <br />
                  😡
                  <br />
                  🤬
                  <br />
                  🤯
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😳
                  <br />
                  🥵
                  <br />
                  🥶
                  <br />
                  😶‍🌫️
                  <br />
                  😱
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😰
                  <br />
                  😥
                  <br />
                  😓
                  <br />
                  🤗
                  <br />
                  🤔
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😨
                  <br />
                  😰
                  <br />
                  😥
                  <br />
                  😓
                  <br />
                  🤗
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  🤔
                  <br />
                  🫣
                  <br />
                  🤭
                  <br />
                  🫢
                  <br />
                  🫡
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  🤫
                  <br />
                  🫠
                  <br />
                  🤥
                  <br />
                  😶
                  <br />
                  🫥
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😐
                  <br />
                  🫤
                  <br />
                  😑
                  <br />
                  😬
                  <br />
                  🙄
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😯
                  <br />
                  😦
                  <br />
                  😧
                  <br />
                  😮
                  <br />
                  😲
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  🥱
                  <br />
                  😴
                  <br />
                  🤤
                  <br />
                  😪
                  <br />
                  😮‍💨
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😵
                  <br />
                  😵‍💫
                  <br />
                  🤐
                  <br />
                  🥴
                  <br />
                  🤢
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  🤮
                  <br />
                  🤧
                  <br />
                  😷
                  <br />
                  🤒
                  <br />
                  🤕
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  🤑
                  <br />
                  🤠
                  <br />
                  😈
                  <br />
                  👿
                  <br />
                  👹
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  👺
                  <br />
                  🤡
                  <br />
                  💩
                  <br />
                  👻
                  <br />
                  💀
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  ☠️
                  <br />
                  👽
                  <br />
                  👾
                  <br />
                  🤖
                  <br />
                  🎃
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😺
                  <br />
                  😸
                  <br />
                  😹
                  <br />
                  😻
                  <br />
                  😼
                </div>
                <div className="[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-black relative font-normal text-center leading-[38.5px]">
                  😽
                  <br />
                  🙀
                  <br />
                  😿
                  <br />
                  😾
                  <br />
                  🫶🏼
                </div>
              </div>
              <div
                className={`[font-family:'SF_Pro-Semibold',Helvetica] left-[7px] tracking-[0] text-xs -top-px h-3.5 font-normal leading-[normal] whitespace-nowrap absolute ${
                  mode === "light" ? "text-[#3c3c4359]" : "text-[#ffffff66]"
                }`}
              >
                SMILEYS &amp; PEOPLE
              </div>
            </>
          )}

          {type === "find-and-replace" && (
            <>
              <div
                className={`w-[225px] left-[75px] top-1.5 h-9 rounded-[10px] absolute ${
                  mode === "dark" ? "bg-fillstertiary-dark" : mode === "light" ? "bg-fillstertiary" : ""
                }`}
              >
                <img
                  className="w-[23px] left-2 top-2.5 h-4 absolute"
                  alt="Search menu"
                  src={
                    mode === "dark" ? "/img/search-menu.svg" : mode === "light" ? "/img/search-menu-1.svg" : undefined
                  }
                />
              </div>
              <div
                className={`font-body-emphasized left-3 tracking-[var(--body-emphasized-letter-spacing)] [font-style:var(--body-emphasized-font-style)] text-[length:var(--body-emphasized-font-size)] top-3 font-[number:var(--body-emphasized-font-weight)] leading-[var(--body-emphasized-line-height)] whitespace-nowrap absolute ${
                  mode === "dark" ? "text-labelsprimary-dark" : mode === "light" ? "text-labelsprimary" : ""
                }`}
              >
                Done
              </div>
              <div className="w-[22px] left-[360px] top-1.5 h-9 absolute">
                <div
                  className={`font-body-regular w-[22px] left-0 tracking-[var(--body-regular-letter-spacing)] [font-style:var(--body-regular-font-style)] text-[length:var(--body-regular-font-size)] -top-px h-9 font-[number:var(--body-regular-font-weight)] text-center leading-[var(--body-regular-line-height)] absolute ${
                    mode === "dark" ? "text-labelstertiary-dark" : mode === "light" ? "text-labelstertiary" : ""
                  }`}
                >
                  􀆈
                </div>
              </div>
              <div className="w-[22px] left-[326px] top-1.5 h-9 absolute">
                <div
                  className={`font-body-regular w-[22px] left-0 tracking-[var(--body-regular-letter-spacing)] [font-style:var(--body-regular-font-style)] text-[length:var(--body-regular-font-size)] -top-px h-9 font-[number:var(--body-regular-font-weight)] text-center leading-[var(--body-regular-line-height)] absolute ${
                    mode === "dark" ? "text-labelstertiary-dark" : mode === "light" ? "text-labelstertiary" : ""
                  }`}
                >
                  􀆇
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {type === "find-and-replace" && (
        <>
          <>
            {showReplace && (
              <div className="w-full flex self-stretch items-center pl-[75px] pr-0 py-0 h-9 justify-center relative">
                <div
                  className={`flex self-stretch items-center grow gap-[11px] flex-1 px-2.5 py-1.5 rounded-[10px] relative ${
                    mode === "light" ? "bg-fillstertiary" : "bg-fillstertiary-dark"
                  }`}
                >
                  <div
                    className={`[font-family:'SF_Pro-Regular',Helvetica] w-fit tracking-[0] text-[17px] font-normal text-center whitespace-nowrap leading-[22px] relative ${
                      mode === "light" ? "text-labelssecondary" : "text-labelssecondary-dark"
                    }`}
                  >
                    􀈊
                  </div>
                </div>
                <div className="inline-flex items-start flex-[0_0_auto] pl-2.5 pr-[18px] py-0 relative">
                  <div
                    className={`font-body-emphasized w-fit mt-[-1.00px] tracking-[var(--body-emphasized-letter-spacing)] text-[length:var(--body-emphasized-font-size)] [font-style:var(--body-emphasized-font-style)] font-[number:var(--body-emphasized-font-weight)] leading-[var(--body-emphasized-line-height)] whitespace-nowrap relative ${
                      mode === "light" ? "text-labelstertiary" : "text-labelstertiary-dark"
                    }`}
                  >
                    Replace
                  </div>
                </div>
              </div>
            )}
          </>
        </>
      )}

      {["URL", "default", "email", "find-and-replace", "toolbar"].includes(type) && (
        <>
          <div className="w-full self-stretch opacity-60 h-[5px] relative" />
          <div className="w-full self-stretch h-[204px] relative">
            <div className="w-[191px] left-[101px] top-[162px] h-[42px] absolute">
              <div
                className={`h-[42px] rounded-[4.6px] ${mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : ""} ${
                  ["URL", "email"].includes(type) ? "relative" : ""
                }`}
              >
                {["default", "find-and-replace", "toolbar"].includes(type) && (
                  <div
                    className={`w-[191px] h-[42px] rounded-[4.6px] relative ${
                      mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                    } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
                  >
                    <div
                      className={`font-callout-regular w-[191px] left-0 tracking-[var(--callout-regular-letter-spacing)] [font-style:var(--callout-regular-font-style)] text-[length:var(--callout-regular-font-size)] -top-px absolute h-[42px] font-[number:var(--callout-regular-font-weight)] text-center leading-[var(--callout-regular-line-height)] ${
                        mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                      }`}
                    >
                      space
                    </div>
                  </div>
                )}

                {["URL", "email"].includes(type) && (
                  <>
                    <div
                      className={`top-0 h-[42px] rounded-[4.6px] absolute ${
                        type === "email" ? "w-[42px]" : "w-[33px]"
                      } ${type === "email" ? "left-[149px]" : "left-[158px]"} ${
                        mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
                    >
                      <div
                        className={`font-callout-regular left-0 tracking-[var(--callout-regular-letter-spacing)] [font-style:var(--callout-regular-font-style)] text-[length:var(--callout-regular-font-size)] -top-px absolute h-[42px] font-[number:var(--callout-regular-font-weight)] text-center leading-[var(--callout-regular-line-height)] ${
                          type === "email" ? "w-[42px]" : "w-[33px]"
                        } ${mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"}`}
                      >
                        .
                      </div>
                    </div>
                    <div
                      className={`top-0 h-[42px] rounded-[4.6px] absolute ${
                        type === "email" ? "w-[42px]" : "w-[152px]"
                      } ${type === "email" ? "left-[101px]" : "left-0"} ${
                        mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
                    >
                      <div
                        className={`font-callout-regular left-0 tracking-[var(--callout-regular-letter-spacing)] [font-style:var(--callout-regular-font-style)] text-[length:var(--callout-regular-font-size)] -top-px absolute h-[42px] font-[number:var(--callout-regular-font-weight)] text-center leading-[var(--callout-regular-line-height)] ${
                          type === "email" ? "w-[42px]" : "w-[152px]"
                        } ${mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"}`}
                      >
                        {type === "URL" && <>space</>}

                        {type === "email" && <>@</>}
                      </div>
                    </div>
                  </>
                )}

                {type === "email" && (
                  <div
                    className={`w-[94px] left-0 top-0 h-[42px] rounded-[4.6px] absolute ${
                      mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                    } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
                  >
                    <div
                      className={`font-callout-regular w-[94px] left-0 tracking-[var(--callout-regular-letter-spacing)] [font-style:var(--callout-regular-font-style)] text-[length:var(--callout-regular-font-size)] -top-px h-[42px] font-[number:var(--callout-regular-font-weight)] text-center leading-[var(--callout-regular-line-height)] absolute ${
                        mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                      }`}
                    >
                      space
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`w-[92px] left-[298px] top-[162px] h-[42px] rounded-[4.6px] absolute ${
                mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
              } ${mode === "light" ? "bg-[#abb0ba]" : mode === "vibrant" ? "bg-[#ffffff1c]" : "bg-[#ffffff1f]"}`}
            >
              <div
                className={`font-callout-regular w-[92px] left-0 tracking-[var(--callout-regular-letter-spacing)] [font-style:var(--callout-regular-font-style)] text-[length:var(--callout-regular-font-size)] -top-px absolute h-[42px] font-[number:var(--callout-regular-font-weight)] text-center leading-[var(--callout-regular-line-height)] ${
                  mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                }`}
              >
                return
              </div>
            </div>
            <div
              className={`w-[92px] left-[3px] top-[162px] h-[42px] rounded-[4.6px] absolute ${
                mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
              } ${mode === "light" ? "bg-[#abb0ba]" : "bg-[#ffffff4c]"}`}
            >
              <div
                className={`font-callout-regular w-[92px] left-0 tracking-[var(--callout-regular-letter-spacing)] [font-style:var(--callout-regular-font-style)] text-[length:var(--callout-regular-font-size)] -top-px h-[42px] font-[number:var(--callout-regular-font-weight)] text-center leading-[var(--callout-regular-line-height)] absolute ${
                  mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                }`}
              >
                {["dark", "vibrant"].includes(mode) && <>123</>}

                {mode === "light" && <>ABC</>}
              </div>
            </div>
            <div className="w-[269px] flex left-[62px] items-start top-[108px] gap-1.5 absolute">
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  z
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  x
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  c
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  v
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  b
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  n
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  m
                </div>
              </div>
            </div>
            <div
              className={`w-11 left-[346px] top-[108px] h-[42px] rounded-[4.6px] absolute ${
                mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
              } ${mode === "light" ? "bg-[#abb0ba]" : mode === "vibrant" ? "bg-[#ffffff1c]" : "bg-[#ffffff1f]"}`}
            >
              <div
                className={`[font-family:'SF_Pro-Regular',Helvetica] left-[9px] tracking-[0] text-xl top-1.5 h-7 font-normal text-center whitespace-nowrap leading-7 absolute ${
                  mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                }`}
              >
                􀆛
              </div>
            </div>
            <div
              className={`w-11 left-[3px] top-[108px] h-[42px] rounded-[4.6px] absolute ${
                mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
              } ${mode === "light" ? "bg-[#abb0ba]" : mode === "vibrant" ? "bg-[#ffffff1c]" : "bg-[#ffffff1f]"}`}
            >
              <div
                className={`[font-family:'SF_Pro-Regular',Helvetica] left-2.5 tracking-[0] text-xl top-1.5 h-7 font-normal text-center whitespace-nowrap leading-7 absolute ${
                  mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                }`}
              >
                􀆝
              </div>
            </div>
            <div className="w-[347px] flex left-[23px] items-start top-[54px] gap-1.5 absolute">
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  a
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  s
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  d
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  f
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  g
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  h
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  j
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  k
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  l
                </div>
              </div>
            </div>
            <div className="w-[387px] flex left-[3px] items-start top-0 gap-1.5 absolute">
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  q
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  w
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  e
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  r
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  t
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  y
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  u
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  i
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  o
                </div>
              </div>
              <div
                className={`grow flex-1 h-[42px] rounded-[4.6px] relative ${
                  mode === "light" ? "shadow-[0px_1px_0px_#898a8d]" : "shadow-[0px_1px_0px_#00000066]"
                } ${mode === "light" ? "bg-[#fcfcfe]" : "bg-[#ffffff4c]"}`}
              >
                <div
                  className={`[font-family:'SF_Pro-Regular',Helvetica] w-[33px] left-0 tracking-[0] text-[25px] top-[-7px] absolute h-12 font-normal text-center leading-7 ${
                    mode === "light" ? "text-labelsprimary" : "text-labelsprimary-dark"
                  }`}
                >
                  p
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {["URL", "default", "email", "find-and-replace", "toolbar"].includes(type) && (
        <>
          <div
            className={`w-full flex self-stretch items-start h-[58px] justify-between relative ${
              type === "default" ? "pt-[25px] pb-0 px-5" : "pt-[17px] pb-0 px-5"
            }`}
          >
            <img
              className="w-[26.92px] h-[26.92px] relative"
              alt="Emoji"
              src={
                mode === "vibrant"
                  ? "/img/emoji-3.svg"
                  : mode === "dark"
                  ? "/img/emoji-9.svg"
                  : mode === "light" && type === "find-and-replace"
                  ? "/img/emoji-5.svg"
                  : "/img/emoji-13.svg"
              }
            />
            <div
              className={`[font-family:'SF_Pro-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[27px] font-normal text-center whitespace-nowrap leading-[normal] relative ${
                mode === "vibrant"
                  ? "text-labelsprimary-dark"
                  : mode === "dark"
                  ? "text-[#e7e7e7]"
                  : mode === "light" && type === "find-and-replace"
                  ? "text-[#1a1f26b8]"
                  : "text-[#3c3c43cc]"
              }`}
            >
              􀊰
            </div>
          </div>
          <HomeIndicator
            className={["default", "toolbar"].includes(type) ? "!self-stretch !w-full !relative" : "!relative"}
            device="i-phone"
            mode={mode === "light" ? "light" : "dark"}
            orientation="portrait"
          />
        </>
      )}

      {["emoji", "numbers-and-punctuation"].includes(type) && (
        <div
          className={`relative ${type === "numbers-and-punctuation" ? "w-[381px]" : "w-[351px]"} ${
            type === "numbers-and-punctuation" ? "h-[206px]" : "h-[33px]"
          }`}
        >
          {type === "emoji" && (
            <>
              <div
                className={`[font-family:'SF_Pro-Medium',Helvetica] left-0 tracking-[0] text-base top-5 absolute h-[19px] font-medium text-center whitespace-nowrap leading-[normal] ${
                  mode === "light" ? "text-[#3c3c43cc]" : "text-[#e7e7e7]"
                }`}
              >
                ABC
              </div>
              <div
                className={`[font-family:'SF_Pro-Regular',Helvetica] left-[324px] tracking-[0] text-[27px] top-1.5 absolute h-8 font-normal text-center whitespace-nowrap leading-[normal] ${
                  mode === "light" ? "text-[#3c3c43cc]" : "text-[#e7e7e7]"
                }`}
              >
                􀊰
              </div>
            </>
          )}

          {type === "numbers-and-punctuation" && (
            <>
              <div
                className={`w-[381px] left-0 flex items-start top-[159px] gap-1.5 absolute ${
                  mode === "light" ? "h-[46px]" : ""
                }`}
              >
                {["dark", "vibrant"].includes(mode) && (
                  <>
                    <div className="grow flex-1 h-5 relative" />
                    <div
                      className={`grow flex-1 h-[47px] rounded-[4.6px] relative ${
                        mode === "dark" ? "shadow-[0px_1px_0px_#000000]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "dark" ? "bg-[#434343]" : "bg-[#ffffff4c]"}`}
                    >
                      <div className="w-5 left-[52px] top-px h-10 relative">
                        <div className="[font-family:'SF_Pro-Bold',Helvetica] -left-0.5 tracking-[2.00px] text-[10px] top-[29px] text-labelsprimary-dark h-3 font-bold text-center whitespace-nowrap leading-[normal] absolute">
                          DEF
                        </div>
                        <div className="[font-family:'SF_Pro-Regular',Helvetica] left-px tracking-[0] text-[25px] -top-px text-labelsprimary-dark h-[30px] font-normal text-center whitespace-nowrap leading-[normal] absolute">
                          0
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {mode === "light" && (
                  <>
                    <div className="relative flex-1 self-stretch grow" />
                    <KeysNumbericLight
                      frameClassName={keysNumbericLightFrameClassName}
                      line1="0"
                      type="one-line"
                      typeDeleteClassName="!self-stretch !h-[unset] !flex-1 !grow !w-[unset]"
                    />
                  </>
                )}

                <Button1
                  className={
                    mode === "light" ? "!relative !flex-1 !self-stretch !grow" : "!relative !flex-1 !grow !h-[47px]"
                  }
                  color={mode === "light" ? "black" : "white"}
                />
              </div>
              <div
                className={`w-[381px] left-0 flex items-start gap-1.5 absolute ${
                  mode === "light" ? "top-[106px]" : "top-[53px]"
                } ${mode === "light" ? "h-[46px]" : ""}`}
              >
                {["dark", "vibrant"].includes(mode) && (
                  <>
                    <div
                      className={`grow flex-1 h-[47px] rounded-[4.6px] relative ${
                        mode === "dark" ? "shadow-[0px_1px_0px_#000000]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "dark" ? "bg-[#434343]" : "bg-[#ffffff4c]"}`}
                    >
                      <div className="w-5 left-[52px] top-px h-10 relative">
                        <div className="[font-family:'SF_Pro-Bold',Helvetica] -left-px tracking-[2.00px] text-[10px] top-[29px] text-labelsprimary-dark h-3 font-bold text-center whitespace-nowrap leading-[normal] absolute">
                          GHI
                        </div>
                        <div className="[font-family:'SF_Pro-Regular',Helvetica] left-px tracking-[0] text-[25px] -top-px text-labelsprimary-dark h-[30px] font-normal text-center whitespace-nowrap leading-[normal] absolute">
                          4
                        </div>
                      </div>
                    </div>
                    <div
                      className={`grow flex-1 h-[47px] rounded-[4.6px] relative ${
                        mode === "dark" ? "shadow-[0px_1px_0px_#000000]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "dark" ? "bg-[#434343]" : "bg-[#ffffff4c]"}`}
                    >
                      <div className="w-5 left-[52px] top-px h-10 relative">
                        <div className="[font-family:'SF_Pro-Bold',Helvetica] -left-0.5 tracking-[2.00px] text-[10px] top-[29px] text-labelsprimary-dark h-3 font-bold text-center whitespace-nowrap leading-[normal] absolute">
                          JKL
                        </div>
                        <div className="[font-family:'SF_Pro-Regular',Helvetica] left-0.5 tracking-[0] text-[25px] -top-px text-labelsprimary-dark h-[30px] font-normal text-center whitespace-nowrap leading-[normal] absolute">
                          5
                        </div>
                      </div>
                    </div>
                    <div
                      className={`grow flex-1 h-[47px] rounded-[4.6px] relative ${
                        mode === "dark" ? "shadow-[0px_1px_0px_#000000]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "dark" ? "bg-[#434343]" : "bg-[#ffffff4c]"}`}
                    >
                      <div className="w-5 left-[52px] top-px h-10 relative">
                        <div className="[font-family:'SF_Pro-Bold',Helvetica] -left-1 tracking-[2.00px] text-[10px] top-[29px] text-labelsprimary-dark h-3 font-bold text-center whitespace-nowrap leading-[normal] absolute">
                          MNO
                        </div>
                        <div className="[font-family:'SF_Pro-Regular',Helvetica] left-px tracking-[0] text-[25px] -top-px text-labelsprimary-dark h-[30px] font-normal text-center whitespace-nowrap leading-[normal] absolute">
                          6
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {mode === "light" && (
                  <>
                    <KeysNumbericLight
                      divClassName={keysNumbericLightDivClassName}
                      divClassNameOverride={keysNumbericLightDivClassNameOverride}
                      frameClassName="!top-[unset]"
                      line1="7"
                      line2="PQRS"
                      type="two-lines"
                      typeDeleteClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-[unset]"
                    />
                    <KeysNumbericLight
                      divClassName={keysNumbericLightDivClassName1}
                      divClassNameOverride={keysNumbericLightDivClassName2}
                      frameClassName="!top-[unset]"
                      line1="8"
                      line2="TUV"
                      type="two-lines"
                      typeDeleteClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-[unset]"
                    />
                    <KeysNumbericLight
                      divClassName={keysNumbericLightDivClassName3}
                      divClassNameOverride={keysNumbericLightDivClassName4}
                      frameClassName="!top-[unset]"
                      line1="9"
                      line2="WXYZ"
                      type="two-lines"
                      typeDeleteClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-[unset]"
                    />
                  </>
                )}
              </div>
              <div
                className={`w-[381px] left-0 flex items-start gap-1.5 absolute ${
                  mode === "light" ? "top-[54px]" : "top-[106px]"
                } ${mode === "light" ? "h-[46px]" : ""}`}
              >
                {["dark", "vibrant"].includes(mode) && (
                  <>
                    <div
                      className={`grow flex-1 h-[47px] rounded-[4.6px] relative ${
                        mode === "dark" ? "shadow-[0px_1px_0px_#000000]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "dark" ? "bg-[#434343]" : "bg-[#ffffff4c]"}`}
                    >
                      <div className="w-5 left-[52px] top-px h-10 relative">
                        <div className="[font-family:'SF_Pro-Bold',Helvetica] left-[-7px] tracking-[2.00px] text-[10px] top-[29px] text-labelsprimary-dark h-3 font-bold text-center whitespace-nowrap leading-[normal] absolute">
                          PQRS
                        </div>
                        <div className="[font-family:'SF_Pro-Regular',Helvetica] left-0.5 tracking-[0] text-[25px] -top-px text-labelsprimary-dark h-[30px] font-normal text-center whitespace-nowrap leading-[normal] absolute">
                          7
                        </div>
                      </div>
                    </div>
                    <div
                      className={`grow flex-1 h-[47px] rounded-[4.6px] relative ${
                        mode === "dark" ? "shadow-[0px_1px_0px_#000000]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "dark" ? "bg-[#434343]" : "bg-[#ffffff4c]"}`}
                    >
                      <div className="w-5 left-[52px] top-px h-10 relative">
                        <div className="[font-family:'SF_Pro-Bold',Helvetica] left-[-3px] tracking-[2.00px] text-[10px] top-[29px] text-labelsprimary-dark h-3 font-bold text-center whitespace-nowrap leading-[normal] absolute">
                          TUV
                        </div>
                        <div className="[font-family:'SF_Pro-Regular',Helvetica] left-px tracking-[0] text-[25px] -top-px text-labelsprimary-dark h-[30px] font-normal text-center whitespace-nowrap leading-[normal] absolute">
                          8
                        </div>
                      </div>
                    </div>
                    <div
                      className={`grow flex-1 h-[47px] rounded-[4.6px] relative ${
                        mode === "dark" ? "shadow-[0px_1px_0px_#000000]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "dark" ? "bg-[#434343]" : "bg-[#ffffff4c]"}`}
                    >
                      <div className="w-5 left-[52px] top-px h-10 relative">
                        <div className="[font-family:'SF_Pro-Bold',Helvetica] left-[-9px] tracking-[2.00px] text-[10px] top-[29px] text-labelsprimary-dark h-3 font-bold text-center whitespace-nowrap leading-[normal] absolute">
                          WXYZ
                        </div>
                        <div className="[font-family:'SF_Pro-Regular',Helvetica] left-px tracking-[0] text-[25px] -top-px text-labelsprimary-dark h-[30px] font-normal text-center whitespace-nowrap leading-[normal] absolute">
                          9
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {mode === "light" && (
                  <>
                    <KeysNumbericLight
                      divClassName={keysNumbericLightDivClassName5}
                      divClassNameOverride={keysNumbericLightDivClassName6}
                      frameClassName="!top-[unset]"
                      line1="4"
                      line2="GHI"
                      type="two-lines"
                      typeDeleteClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-[unset]"
                    />
                    <KeysNumbericLight
                      divClassName={keysNumbericLightDivClassName7}
                      divClassNameOverride={keysNumbericLightDivClassName8}
                      frameClassName="!top-[unset]"
                      line1="5"
                      line2="JKL"
                      type="two-lines"
                      typeDeleteClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-[unset]"
                    />
                    <KeysNumbericLight
                      divClassName={keysNumbericLightDivClassName9}
                      divClassNameOverride={keysNumbericLightDivClassName10}
                      frameClassName="!top-[unset]"
                      line1="6"
                      line2="MNO"
                      type="two-lines"
                      typeDeleteClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-[unset]"
                    />
                  </>
                )}
              </div>
              <div
                className={`w-[381px] left-0 flex items-start top-0 gap-1.5 absolute ${
                  mode === "light" ? "h-[46px]" : ""
                }`}
              >
                {["dark", "vibrant"].includes(mode) && (
                  <>
                    <div
                      className={`grow flex-1 h-[47px] rounded-[4.6px] relative ${
                        mode === "dark" ? "shadow-[0px_1px_0px_#000000]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "dark" ? "bg-[#434343]" : "bg-[#ffffff4c]"}`}
                    >
                      <div className="w-5 left-[52px] top-px h-10 relative">
                        <div className="[font-family:'SF_Pro-Bold',Helvetica] left-2.5 tracking-[2.00px] text-[10px] top-[29px] text-labelsprimary-dark h-3 font-bold text-center whitespace-nowrap leading-[normal] absolute">
                          {""}
                        </div>
                        <div className="[font-family:'SF_Pro-Regular',Helvetica] left-[3px] tracking-[0] text-[25px] -top-px text-labelsprimary-dark h-[30px] font-normal text-center whitespace-nowrap leading-[normal] absolute">
                          1
                        </div>
                      </div>
                    </div>
                    <div
                      className={`grow flex-1 h-[47px] rounded-[4.6px] relative ${
                        mode === "dark" ? "shadow-[0px_1px_0px_#000000]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "dark" ? "bg-[#434343]" : "bg-[#ffffff4c]"}`}
                    >
                      <div className="w-5 left-[52px] top-px h-10 relative">
                        <div className="[font-family:'SF_Pro-Bold',Helvetica] left-[-3px] tracking-[2.00px] text-[10px] top-[29px] text-labelsprimary-dark h-3 font-bold text-center whitespace-nowrap leading-[normal] absolute">
                          ABC
                        </div>
                        <div className="[font-family:'SF_Pro-Regular',Helvetica] left-0.5 tracking-[0] text-[25px] -top-px text-labelsprimary-dark h-[30px] font-normal text-center whitespace-nowrap leading-[normal] absolute">
                          2
                        </div>
                      </div>
                    </div>
                    <div
                      className={`grow flex-1 h-[47px] rounded-[4.6px] relative ${
                        mode === "dark" ? "shadow-[0px_1px_0px_#000000]" : "shadow-[0px_1px_0px_#00000066]"
                      } ${mode === "dark" ? "bg-[#434343]" : "bg-[#ffffff4c]"}`}
                    >
                      <div className="w-5 left-[52px] top-px h-10 relative">
                        <div className="[font-family:'SF_Pro-Bold',Helvetica] -left-0.5 tracking-[2.00px] text-[10px] top-[29px] text-labelsprimary-dark h-3 font-bold text-center whitespace-nowrap leading-[normal] absolute">
                          DEF
                        </div>
                        <div className="[font-family:'SF_Pro-Regular',Helvetica] left-0.5 tracking-[0] text-[25px] -top-px text-labelsprimary-dark h-[30px] font-normal text-center whitespace-nowrap leading-[normal] absolute">
                          3
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {mode === "light" && (
                  <>
                    <KeysNumbericLight
                      divClassName={keysNumbericLightDivClassName11}
                      divClassNameOverride={keysNumbericLightDivClassName12}
                      frameClassName="!top-[unset]"
                      line1="1"
                      line2=""
                      type="two-lines"
                      typeDeleteClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-[unset]"
                    />
                    <KeysNumbericLight
                      divClassName={keysNumbericLightDivClassName13}
                      divClassNameOverride={keysNumbericLightDivClassName14}
                      frameClassName="!top-[unset]"
                      line1="2"
                      line2="ABC"
                      type="two-lines"
                      typeDeleteClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-[unset]"
                    />
                    <KeysNumbericLight
                      divClassName={keysNumbericLightDivClassName15}
                      divClassNameOverride={keysNumbericLightDivClassName16}
                      frameClassName="!top-[unset]"
                      line1="3"
                      line2="DEF"
                      type="two-lines"
                      typeDeleteClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-[unset]"
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {["emoji", "numbers-and-punctuation"].includes(type) && (
        <HomeIndicator
          className={type === "emoji" ? "!mr-[-8.00px] !ml-[-8.00px] !relative" : homeIndicatorDeviceIpadClassName}
          device="i-phone"
          mode={mode === "light" ? "light" : "dark"}
          orientation="portrait"
        />
      )}
    </div>
  );
};

KeyboardIphone.propTypes = {
  email2: PropTypes.string,
  email1: PropTypes.string,
  showReplace: PropTypes.bool,
  mode: PropTypes.oneOf(["vibrant", "dark", "light"]),
  type: PropTypes.oneOf(["emoji", "default", "find-and-replace", "URL", "numbers-and-punctuation", "toolbar", "email"]),
};
