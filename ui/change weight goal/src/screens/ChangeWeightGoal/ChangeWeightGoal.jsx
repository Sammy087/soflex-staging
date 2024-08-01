import React from "react";
import { KeyboardIphone } from "../../components/KeyboardIphone";

export const ChangeWeightGoal = () => {
  return (
    <div className="flex flex-col h-[530px] items-end gap-14 p-6 relative bg-white">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Cancel
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-center gap-1.5 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Change Weight Goal
            </div>
          </div>
        </div>
        <div className="inline-flex items-center justify-center relative flex-[0_0_auto] opacity-0">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Cancel
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
              Dream Weight
            </div>
            <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base tracking-[0] leading-[normal]">
                63
              </div>
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-color text-base tracking-[0] leading-[normal]">
                KG
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col h-10 items-center justify-center gap-0.5 relative flex-1 grow bg-main-shadesmain-color rounded-[10px]">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-ccwhite-ff text-sm text-center tracking-[0] leading-[normal]">
              Confirm
            </div>
          </div>
        </div>
      </div>
      <KeyboardIphone
        className="!h-[265px] !flex !absolute !left-0 !w-[390px] !top-[265px]"
        homeIndicatorDeviceIpadClassName="!mr-[-1.50px] !ml-[-1.50px] !mb-[-26.00px] !relative"
        keysNumbericLightDivClassName="![font-family:'Montserrat',Helvetica] !-left-2"
        keysNumbericLightDivClassName1="![font-family:'Montserrat',Helvetica] !left-[-3px]"
        keysNumbericLightDivClassName10="![font-family:'Montserrat',Helvetica] !left-px"
        keysNumbericLightDivClassName11="![font-family:'Montserrat',Helvetica] !left-2.5"
        keysNumbericLightDivClassName12="![font-family:'Montserrat',Helvetica] !left-1"
        keysNumbericLightDivClassName13="![font-family:'Montserrat',Helvetica] !left-[-3px]"
        keysNumbericLightDivClassName14="![font-family:'Montserrat',Helvetica]"
        keysNumbericLightDivClassName15="![font-family:'Montserrat',Helvetica] !left-[-3px]"
        keysNumbericLightDivClassName16="![font-family:'Montserrat',Helvetica]"
        keysNumbericLightDivClassName2="![font-family:'Montserrat',Helvetica] !left-px"
        keysNumbericLightDivClassName3="![font-family:'Montserrat',Helvetica] !left-[-9px]"
        keysNumbericLightDivClassName4="![font-family:'Montserrat',Helvetica] !left-px"
        keysNumbericLightDivClassName5="![font-family:'Montserrat',Helvetica]"
        keysNumbericLightDivClassName6="![font-family:'Montserrat',Helvetica] !left-px"
        keysNumbericLightDivClassName7="![font-family:'Montserrat',Helvetica] !-left-px"
        keysNumbericLightDivClassName8="![font-family:'Montserrat',Helvetica]"
        keysNumbericLightDivClassName9="![font-family:'Montserrat',Helvetica] !left-[-5px]"
        keysNumbericLightDivClassNameOverride="![font-family:'Montserrat',Helvetica]"
        keysNumbericLightFrameClassName="![font-family:'Montserrat',Helvetica] !left-[53px] !top-1.5"
        mode="light"
        type="numbers-and-punctuation"
      />
    </div>
  );
};
