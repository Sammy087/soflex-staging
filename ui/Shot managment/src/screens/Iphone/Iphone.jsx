import React from "react";
import { ShotsBlock } from "../../components/ShotsBlock";

export const Iphone = () => {
  return (
    <div className="bg-[#f7f7f7] flex flex-row justify-center w-full">
      <div className="bg-ccinput-bg w-[390px] h-[1154px] relative">
        <div className="flex flex-col w-[358px] items-start gap-8 absolute top-[76px] left-4">
          <div className="flex w-[357px] items-center gap-4 px-4 py-[7px] relative flex-[0_0_auto] bg-ccwhite-ff rounded-[20px] overflow-hidden">
            <div className="flex h-10 items-center justify-center gap-2.5 p-2.5 relative flex-1 grow">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-greygrey-500 text-base text-center tracking-[0] leading-[normal]">
                Weight
              </div>
            </div>
            <div className="flex h-10 items-center justify-center gap-2.5 p-2.5 relative flex-1 grow bg-main-shadesmain-color rounded-[15px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccwhite-ff text-base text-center tracking-[0] leading-[normal]">
                Shots
              </div>
            </div>
          </div>
          <ShotsBlock className="!self-stretch !flex-[0_0_auto] !w-full" property1="defualt" />
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-[358px] items-center justify-between relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Med Entry Log
              </div>
              <div className="flex w-[125.5px] items-center justify-end gap-[19px] relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-darker text-sm tracking-[0] leading-[normal] underline">
                  July’24
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] bg-main-shadesmain-darker rounded-xl">
                <div className="flex h-[43px] items-center justify-center gap-2.5 px-2 py-3 relative flex-1 grow rounded-xl">
                  <div className="relative w-fit mt-[-1.50px] [font-family:'Montserrat',Helvetica] font-normal text-ccinput-bg text-base tracking-[0] leading-[normal]">
                    Date
                  </div>
                </div>
                <div className="flex w-[130px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                  <div className="relative w-fit mt-[-1.50px] [font-family:'Montserrat',Helvetica] font-normal text-ccinput-bg text-base tracking-[0] leading-[normal]">
                    Medicine Name
                  </div>
                </div>
                <div className="flex h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative flex-1 grow rounded-xl">
                  <div className="relative w-fit mt-[-1.50px] [font-family:'Montserrat',Helvetica] font-normal text-ccinput-bg text-base tracking-[0] leading-[normal]">
                    Dosage
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[106px] h-[43px] items-center justify-around gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative flex-1 grow rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      Medicine Name
                    </div>
                  </div>
                  <div className="flex w-[106px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative mt-[-12.00px] mb-[-12.00px] rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        50 mg
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[106px] h-[43px] items-center justify-around gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative flex-1 grow rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      Medicine Name
                    </div>
                  </div>
                  <div className="flex w-[106px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative mt-[-12.00px] mb-[-12.00px] rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        50 mg
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[106px] h-[43px] items-center justify-around gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative flex-1 grow rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      Medicine Name
                    </div>
                  </div>
                  <div className="flex w-[106px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative mt-[-12.00px] mb-[-12.00px] rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        50 mg
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[106px] h-[43px] items-center justify-around gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative flex-1 grow rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      Medicine Name
                    </div>
                  </div>
                  <div className="flex w-[106px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative mt-[-12.00px] mb-[-12.00px] rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        50 mg
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[106px] h-[43px] items-center justify-around gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative flex-1 grow rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      Medicine Name
                    </div>
                  </div>
                  <div className="flex w-[106px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative mt-[-12.00px] mb-[-12.00px] rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        50 mg
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[106px] h-[43px] items-center justify-around gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative flex-1 grow rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      Medicine Name
                    </div>
                  </div>
                  <div className="flex w-[106px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative mt-[-12.00px] mb-[-12.00px] rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        50 mg
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[106px] h-[43px] items-center justify-around gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative flex-1 grow rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      Medicine Name
                    </div>
                  </div>
                  <div className="flex w-[106px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative mt-[-12.00px] mb-[-12.00px] rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        50 mg
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[106px] h-[43px] items-center justify-around gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative flex-1 grow rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      Medicine Name
                    </div>
                  </div>
                  <div className="flex w-[106px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative mt-[-12.00px] mb-[-12.00px] rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        50 mg
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed w-[390px] h-[76px] top-0 left-0 bg-ccwhite-ff">
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
        <div className="fixed w-[390px] h-[92px] top-[1062px] left-0 bg-ccwhite-ff shadow-[0px_4px_13px_#00000040]">
          <div className="absolute w-[137px] h-[5px] top-[75px] left-[127px] bg-[#72738e33] rounded-[2.5px]" />
          <div className="flex w-[319px] h-[50px] items-center justify-between absolute top-[11px] left-[35px]">
            <div className="inline-flex flex-col h-[50px] items-center justify-between relative flex-[0_0_auto]">
              <img className="relative w-7 h-7" alt="Heart svgrepo com" src="/img/heart-svgrepo-com.svg" />
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-400 text-sm tracking-[0] leading-[normal]">
                Summary
              </div>
            </div>
            <div className="flex flex-col w-[42px] h-[50px] items-center justify-between relative">
              <img className="relative w-7 h-7" alt="Weight svgrepo com" src="/img/weight-svgrepo-com.svg" />
              <div className="relative w-fit ml-[-5.00px] mr-[-5.00px] [font-family:'Montserrat',Helvetica] font-normal text-greygrey-400 text-sm tracking-[0] leading-[normal]">
                Weight
              </div>
            </div>
            <div className="inline-flex flex-col h-[50px] items-center justify-between relative flex-[0_0_auto]">
              <img className="relative w-7 h-7" alt="Medicine svgrepo" src="/img/medicine-10-svgrepo-com.svg" />
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                Shots
              </div>
            </div>
            <div className="inline-flex flex-col h-[50px] items-center justify-between relative flex-[0_0_auto]">
              <img className="relative w-8 h-[33.03px]" alt="More svgrepo com" src="/img/more-svgrepo-com.svg" />
              <div className="relative w-fit mt-[-0.03px] [font-family:'Montserrat',Helvetica] font-normal text-greygrey-400 text-sm tracking-[0] leading-[normal]">
                More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
