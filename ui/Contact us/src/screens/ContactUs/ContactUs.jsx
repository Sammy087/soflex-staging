import React from "react";

export const ContactUs = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-6 pb-2 px-6 relative bg-ccwhite-ff">
      <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
              Cancel
            </div>
          </div>
          <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Contact us
            </div>
          </div>
          <div className="inline-flex items-center justify-center relative flex-[0_0_auto] opacity-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
              Cancel
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[313px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
              Subject
            </div>
            <div className="flex h-12 items-center gap-2.5 px-3 py-1.5 relative self-stretch w-full rounded-md border border-solid border-greygrey-300">
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base text-center tracking-[0] leading-[normal]">
                Subject
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
              Message
            </div>
            <div className="flex h-[266px] items-start gap-2.5 px-3 py-4 relative self-stretch w-full rounded-xl border border-solid border-greygrey-300">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-greygrey-500 text-base text-center tracking-[0] leading-[normal]">
                Send us a message
              </div>
            </div>
          </div>
          <div className="flex h-[45px] items-center justify-center gap-14 relative self-stretch w-full bg-main-shadesmain-color rounded-[10px]">
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-ccwhite-ff text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Send Message
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[136.8px] h-[5px] bg-[#72738e33] rounded-[2.5px]" />
    </div>
  );
};
