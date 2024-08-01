import React from "react";

export const Frame = () => {
  return (
    <div className="flex flex-col items-end gap-4 p-6 relative bg-ccwhite-ff">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Cancel
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Today, July 16
          </div>
        </div>
        <img className="relative flex-[0_0_auto]" alt="Frame" src="/img/frame-966.svg" />
      </div>
      <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Today Weight
          </div>
          <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base tracking-[0] leading-[normal]">
              73
            </div>
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-color text-base tracking-[0] leading-[normal]">
              KG
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Start Weight
          </div>
          <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base tracking-[0] leading-[normal]">
              102
            </div>
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-color text-base tracking-[0] leading-[normal]">
              KG
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Last Read
          </div>
          <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base text-center tracking-[0] leading-[normal]">
              76
            </div>
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-color text-base tracking-[0] leading-[normal]">
              KG
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Dream Weight
          </div>
          <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base text-center tracking-[0] leading-[normal]">
              62
            </div>
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-color text-base tracking-[0] leading-[normal]">
              KG
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            KG since start
          </div>
          <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base text-center tracking-[0] leading-[normal]">
              -29
            </div>
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-color text-base tracking-[0] leading-[normal]">
              KG
            </div>
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
