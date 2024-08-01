import React from "react";
import { ArrowUp } from "../../icons/ArrowUp";

export const ChangePassword = () => {
  return (
    <div className="bg-[#f7f7f7] flex flex-row justify-center w-full">
      <div className="bg-ccinput-bg w-[390px] h-[844px] relative">
        <div className="absolute w-[146px] h-[5px] top-[829px] left-[122px] bg-[#000000a6] rounded-[2.5px]" />
        <div className="flex flex-col w-[324px] items-center gap-10 absolute top-[129px] left-[33px]">
          <div className="flex flex-col w-[296px] items-center gap-6 relative flex-[0_0_auto]">
            <img
              className="relative w-[268px] h-[259px]"
              alt="Https lottiefiles"
              src="/img/https-lottiefiles-com-animations-forgot-password-animation-2zs.png"
            />
            <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-ccblack-00 text-[32px] text-center tracking-[0] leading-[normal]">
                Change password
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                  Email
                </div>
                <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-[10px] border border-solid border-greygrey-300">
                  <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base text-center tracking-[0] leading-[normal]">
                    @mail.com
                  </div>
                  <img className="relative w-4 h-4" alt="Email svgrepo com" src="/img/email-svgrepo-com.svg" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex h-[45px] items-center justify-center gap-14 relative self-stretch w-full bg-main-shadesmain-color rounded-[10px]">
                <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-ccwhite-ff text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Recover password
                </div>
              </div>
            </div>
          </div>
        </div>
        <ArrowUp className="!absolute !w-8 !h-8 !top-[72px] !left-4" />
        <div className="fixed w-[390px] h-[47px] top-0 left-0">
          <div className="absolute w-[34px] h-[19px] top-3.5 left-[37px]">
            <div className="relative h-[19px]">
              <div className="absolute w-[33px] top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-ccblack-00 text-base tracking-[0] leading-[normal]">
                9:41
              </div>
            </div>
          </div>
          <div className="absolute w-[22px] h-[11px] top-[18px] left-[344px] bg-[url(/static/img/icon-awesome-battery-three-quarters.svg)] bg-[100%_100%]" />
          <div className="absolute w-4 h-3 top-[18px] left-[322px] bg-[url(/static/img/icon-awesome-wifi.svg)] bg-[100%_100%]" />
          <div className="absolute w-4 h-[11px] top-[18px] left-[300px]">
            <div className="absolute w-[3px] h-1 top-[7px] left-0 bg-ccblack-00 rounded-[1.5px]" />
            <div className="absolute w-[3px] h-1.5 top-[5px] left-[5px] bg-ccblack-00 rounded-[1.5px]" />
            <div className="absolute w-[3px] h-[9px] top-0.5 left-[9px] bg-ccblack-00 rounded-[1.5px]" />
            <div className="absolute w-[3px] h-[11px] top-0 left-[13px] bg-ccblack-00 rounded-[1.5px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
