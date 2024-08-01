import React from "react";

export const MeasurementSystem = () => {
  return (
    <div className="flex flex-col items-end gap-6 p-6 relative bg-ccwhite-ff">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Cancel
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-lg text-center tracking-[0] leading-[normal]">
            Measurement system
          </div>
        </div>
        <div className="inline-flex items-center justify-center relative flex-[0_0_auto] opacity-0">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Cancel
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-ccinput-bg rounded-md">
        <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-[6px_6px_0px_0px]">
          <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Metric
          </div>
          <img className="relative w-4 h-4" alt="Correct signal" src="/img/correct-signal-svgrepo-com.svg" />
        </div>
        <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-[0px_0px_6px_6px]">
          <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            imperial
          </div>
          <div className="relative w-fit opacity-0 [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-xs tracking-[0] leading-[normal]">
            1 Capsule
          </div>
        </div>
      </div>
      <div className="flex w-[342px] items-start gap-3 relative flex-[0_0_auto]">
        <div className="flex flex-col h-[38px] items-center justify-center gap-0.5 relative flex-1 grow bg-main-shadesmain-color rounded-[10px]">
          <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-ccwhite-ff text-sm text-center tracking-[0] leading-[normal]">
            Confirm
          </div>
        </div>
      </div>
    </div>
  );
};
