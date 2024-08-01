import React from "react";

export const Filter = () => {
  return (
    <div className="flex flex-col items-end gap-6 p-6 relative bg-ccwhite-ff">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Cancel
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Filter
          </div>
        </div>
        <div className="inline-flex items-center justify-center relative flex-[0_0_auto] opacity-0">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Cancel
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Month
          </div>
          <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base tracking-[0] leading-[normal]">
              May
            </div>
            <img className="relative flex-[0_0_auto]" alt="Frame" src="/img/frame-971.svg" />
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
