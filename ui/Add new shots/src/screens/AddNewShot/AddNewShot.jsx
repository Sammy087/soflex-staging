import React from "react";

export const AddNewShot = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-6 pb-2 px-6 relative bg-white">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
            Cancel
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-lg text-center tracking-[0] leading-[normal]">
            Add New Shot
          </div>
        </div>
        <div className="relative w-fit opacity-0 [font-family:'Montserrat',Helvetica] font-semibold text-[#2f2f2f] text-sm tracking-[0] leading-[normal]">
          Done
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
              medicine Name
            </div>
            <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base tracking-[0] leading-[normal]">
                Choose Medicine
              </div>
              <img className="relative w-6 h-6" alt="Down arrow svgrepo" src="/img/down-arrow-5-svgrepo-com-2.svg" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
              Date
            </div>
            <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base tracking-[0] leading-[normal]">
                7/19/2024
              </div>
              <img className="relative w-6 h-6" alt="Down arrow svgrepo" src="/img/down-arrow-5-svgrepo-com-2.svg" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
              Dosage
            </div>
            <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base text-center tracking-[0] leading-[normal]">
                50
              </div>
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-color text-base tracking-[0] leading-[normal]">
                mg
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto] bg-ccinput-bg rounded-xl border border-solid border-[#eaeaea]">
          <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full bg-ccinput-bg rounded-md">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-contrastblack text-base text-center tracking-[0] leading-[normal]">
              Time Taken
            </div>
            <div className="flex w-[71px] items-center justify-center gap-2.5 px-2 py-1.5 relative bg-main-shadesmain-color rounded-md">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccwhite-ff text-xs tracking-[0.36px] leading-[normal]">
                11:35 PM
              </div>
            </div>
          </div>
          <div className="flex h-12 items-center justify-between px-3 py-1.5 relative self-stretch w-full bg-ccinput-bg rounded-md">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-contrastblack text-base text-center tracking-[0] leading-[normal]">
              Injection Site
            </div>
            <div className="flex w-[78px] items-center justify-end relative">
              <div className="relative w-fit ml-[-76.00px] [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-xs tracking-[0] leading-[normal]">
                Stomach - Upper Left
              </div>
              <img className="relative w-6 h-6" alt="Down arrow svgrepo" src="/img/down-arrow-5-svgrepo-com-2.svg" />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col h-[38px] items-center justify-center gap-0.5 relative flex-1 grow rounded-[10px] border border-solid border-main-shadesmain-darker">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-darker text-sm text-center tracking-[0] leading-[normal]">
              Edit schedule
            </div>
          </div>
          <div className="flex flex-col h-[38px] items-center justify-center gap-0.5 relative flex-1 grow bg-main-shadesmain-color rounded-[10px]">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-ccwhite-ff text-sm text-center tracking-[0] leading-[normal]">
              Confirm
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[136.8px] h-[5px] bg-[#72738e33] rounded-[2.5px]" />
    </div>
  );
};
