import React from "react";

export const Iphone = () => {
  return (
    <div className="bg-[#f7f7f7] flex flex-row justify-center w-full">
      <div className="bg-ccinput-bg w-[390px] h-[1336px] relative">
        <div className="flex flex-col w-[358px] items-start gap-10 absolute top-[76px] left-4">
          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-[357px] items-center gap-4 px-4 py-[7px] relative flex-[0_0_auto] bg-ccwhite-ff rounded-[20px] overflow-hidden">
              <div className="flex h-10 items-center justify-center gap-2.5 p-2.5 relative flex-1 grow bg-main-shadesmain-color rounded-[15px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccwhite-ff text-base text-center tracking-[0] leading-[normal]">
                  Weight
                </div>
              </div>
              <div className="flex h-10 items-center justify-center gap-2.5 p-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-greygrey-500 text-base text-center tracking-[0] leading-[normal]">
                  Shots
                </div>
              </div>
            </div>
            <div className="relative self-stretch w-full h-7">
              <img
                className="absolute w-6 h-6 top-0.5 left-[334px]"
                alt="Share svgrepo com"
                src="/img/share-svgrepo-com.svg"
              />
              <div className="absolute top-px left-0 font-bold text-ccblack-00 text-xl whitespace-nowrap [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                Weight Management
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 px-3.5 py-6 relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[20px]">
              <div className="flex items-start justify-around gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center justify-center gap-3 relative flex-1 grow">
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Current Weight
                    </div>
                    <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                      <img
                        className="relative w-4 h-4"
                        alt="Add circle svgrepo"
                        src="/img/add-circle-svgrepo-com.svg"
                      />
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-main-shadesmain-darker text-sm tracking-[0] leading-[normal]">
                        Add for today
                      </div>
                    </div>
                  </div>
                  <div className="flex h-10 items-center justify-between px-3 py-1.5 relative self-stretch w-full bg-ccinput-bg rounded-xl">
                    <div className="font-normal text-contrastblack text-base relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      73 KG
                    </div>
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-color text-base tracking-[0] leading-[normal]">
                      KG
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[62px] items-center justify-between px-[35px] py-0 relative self-stretch w-full bg-ccinput-bg rounded-xl">
                <div className="h-[46px] flex flex-col w-[100px] items-center justify-center gap-0.5 relative">
                  <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-bold text-main-shadesmain-color text-base tracking-[0] leading-[normal]">
                    -3 KG
                  </div>
                  <p className="relative w-[80.88px] [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-[10px] text-center tracking-[0] leading-[normal]">
                    Progress than your last read
                  </p>
                </div>
                <img className="relative w-px h-[36.15px] object-cover" alt="Line" src="/img/line-35.svg" />
                <div className="flex flex-col w-[100px] items-center justify-center gap-0.5 relative">
                  <div className="mt-[-0.48px] font-bold text-main-shadesmain-color text-base relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                    12 KG
                  </div>
                  <p className="relative w-[99.52px] [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-[10px] text-center tracking-[0] leading-[normal]">
                    Between you and your dream weight
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-[#8e8e93] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Start Weight
                  </div>
                  <div className="flex w-[74px] h-12 items-center gap-2.5 px-2.5 py-1.5 relative bg-ccinput-bg rounded-md">
                    <div className="mr-[-1.00px] font-semibold text-contrastblack text-base relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      102 KG
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-[#8e8e93] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Dream Weight
                  </div>
                  <div className="flex w-[74px] h-12 items-center justify-center gap-2.5 px-2.5 py-1.5 relative bg-ccinput-bg rounded-md">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-contrastblack text-base text-center tracking-[0] leading-[normal]">
                      62 KG
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-[#8e8e93] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Last Read
                  </div>
                  <div className="flex w-[74px] h-12 items-center justify-center gap-2.5 px-2.5 py-1.5 relative bg-ccinput-bg rounded-md">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-contrastblack text-base text-center tracking-[0] leading-[normal]">
                      76 KG
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-0.48px] [font-family:'Montserrat',Helvetica] font-semibold text-[#8e8e93] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                    since start
                  </div>
                  <div className="flex w-[74px] h-12 items-center justify-center gap-2.5 px-2.5 py-1.5 relative bg-ccinput-bg rounded-md">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-contrastblack text-base text-center tracking-[0] leading-[normal]">
                      29 KG
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[173.68px] items-center gap-[8.25px] relative self-stretch w-full">
                <div className="relative w-[354.92px] h-[173.68px] ml-[-12.46px] mr-[-12.46px] overflow-hidden">
                  <div className="relative w-[473px] h-[175px] -left-2.5">
                    <div className="absolute w-[473px] h-[143px] top-8 left-0">
                      <img className="absolute w-[355px] h-px top-[116px] left-2.5" alt="Line" src="/img/line.svg" />
                      <div className="absolute w-3 top-[129px] left-4 [font-family:'Poppins',Helvetica] font-normal text-greygrey-400 text-[9.7px] text-center tracking-[0.44px] leading-[9.7px]">
                        01
                      </div>
                      <div className="absolute top-[50px] left-[13px] [font-family:'Poppins',Helvetica] font-normal text-main-shadesmain-darker text-[9.7px] text-center tracking-[0.44px] leading-[9.7px] whitespace-nowrap">
                        80 KG
                      </div>
                      <div className="absolute top-[85px] left-[69px] [font-family:'Poppins',Helvetica] font-normal text-main-shadesmain-darker text-[9.7px] text-center tracking-[0.44px] leading-[9.7px] whitespace-nowrap">
                        72 KG
                      </div>
                      <div className="absolute top-[73px] left-[302px] [font-family:'Poppins',Helvetica] font-normal text-main-shadesmain-darker text-[9.7px] text-center tracking-[0.44px] leading-[9.7px] whitespace-nowrap">
                        75 KG
                      </div>
                      <div className="absolute top-0 left-36 [font-family:'Poppins',Helvetica] font-normal text-main-shadesmain-darker text-[9.7px] text-center tracking-[0.44px] leading-[9.7px] whitespace-nowrap">
                        102 KG
                      </div>
                      <div className="w-4 left-[76px] absolute top-[129px] [font-family:'Poppins',Helvetica] font-normal text-greygrey-400 text-[9.7px] text-center tracking-[0.44px] leading-[9.7px]">
                        02
                      </div>
                      <div className="w-4 left-[139px] absolute top-[129px] [font-family:'Poppins',Helvetica] font-normal text-greygrey-400 text-[9.7px] text-center tracking-[0.44px] leading-[9.7px]">
                        03
                      </div>
                      <div className="w-[17px] left-[201px] absolute top-[129px] [font-family:'Poppins',Helvetica] font-normal text-greygrey-400 text-[9.7px] text-center tracking-[0.44px] leading-[9.7px]">
                        04
                      </div>
                      <div className="w-[17px] left-[264px] absolute top-[129px] [font-family:'Poppins',Helvetica] font-normal text-greygrey-400 text-[9.7px] text-center tracking-[0.44px] leading-[9.7px]">
                        05
                      </div>
                      <div className="w-[17px] left-[326px] absolute top-[129px] [font-family:'Poppins',Helvetica] font-normal text-greygrey-400 text-[9.7px] text-center tracking-[0.44px] leading-[9.7px]">
                        06
                      </div>
                    </div>
                    <img className="absolute w-[355px] h-[115px] top-0 left-2.5" alt="Line" src="/img/line-34.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-[358px] items-center justify-between relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-ccblack-00 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Weight Entry Log
              </div>
              <div className="flex w-[125.5px] items-center justify-end gap-[19px] relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-main-shadesmain-darker text-sm tracking-[0] leading-[normal] underline">
                  July’24
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-between px-2 py-0 relative self-stretch w-full flex-[0_0_auto] bg-main-shadesmain-darker rounded-xl">
                <div className="flex w-[87px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                  <div className="relative w-fit mt-[-1.50px] [font-family:'Montserrat',Helvetica] font-medium text-ccwhite-ff text-base tracking-[0] leading-[normal]">
                    Date
                  </div>
                </div>
                <div className="w-[70px] flex h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                  <div className="relative w-fit mt-[-1.50px] font-medium text-ccwhite-ff text-base [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                    Weight
                  </div>
                </div>
                <div className="flex w-[78px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                  <div className="relative w-fit mt-[-1.50px] [font-family:'Montserrat',Helvetica] font-medium text-ccwhite-ff text-base tracking-[0] leading-[normal]">
                    Change
                  </div>
                </div>
                <div className="flex w-[87.5px] h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                  <div className="relative w-fit mt-[-1.50px] mr-[-0.50px] [font-family:'Montserrat',Helvetica] font-medium text-ccwhite-ff text-base tracking-[0] leading-[normal]">
                    Since Start
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[100px] h-[43px] items-center justify-center gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex w-[70px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="font-normal text-ccblack-00 text-sm relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      73 KG
                    </div>
                  </div>
                  <div className="flex w-[78px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      -3 KG
                    </div>
                  </div>
                  <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="w-[87.5px] justify-center mt-[-12.00px] mb-[-12.00px] flex h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        -29 KG
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[100px] h-[43px] items-center justify-center gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex w-[70px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="font-normal text-ccblack-00 text-sm relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      73 KG
                    </div>
                  </div>
                  <div className="flex w-[78px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      -3 KG
                    </div>
                  </div>
                  <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="w-[87.5px] justify-center mt-[-12.00px] mb-[-12.00px] flex h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        -29 KG
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[100px] h-[43px] items-center justify-center gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex w-[70px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="font-normal text-ccblack-00 text-sm relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      73 KG
                    </div>
                  </div>
                  <div className="flex w-[78px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      -3 KG
                    </div>
                  </div>
                  <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="w-[87.5px] justify-center mt-[-12.00px] mb-[-12.00px] flex h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        -29 KG
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[100px] h-[43px] items-center justify-center gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex w-[70px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="font-normal text-ccblack-00 text-sm relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      73 KG
                    </div>
                  </div>
                  <div className="flex w-[78px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      -3 KG
                    </div>
                  </div>
                  <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="w-[87.5px] justify-center mt-[-12.00px] mb-[-12.00px] flex h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        -29 KG
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[100px] h-[43px] items-center justify-center gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex w-[70px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="font-normal text-ccblack-00 text-sm relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      73 KG
                    </div>
                  </div>
                  <div className="flex w-[78px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      -3 KG
                    </div>
                  </div>
                  <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="w-[87.5px] justify-center mt-[-12.00px] mb-[-12.00px] flex h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        -29 KG
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[100px] h-[43px] items-center justify-center gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex w-[70px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="font-normal text-ccblack-00 text-sm relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      73 KG
                    </div>
                  </div>
                  <div className="flex w-[78px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      -3 KG
                    </div>
                  </div>
                  <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="w-[87.5px] justify-center mt-[-12.00px] mb-[-12.00px] flex h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        -29 KG
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[100px] h-[43px] items-center justify-center gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex w-[70px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="font-normal text-ccblack-00 text-sm relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      73 KG
                    </div>
                  </div>
                  <div className="flex w-[78px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      -3 KG
                    </div>
                  </div>
                  <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="w-[87.5px] justify-center mt-[-12.00px] mb-[-12.00px] flex h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        -29 KG
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[100px] h-[43px] items-center justify-center gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex w-[70px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="font-normal text-ccblack-00 text-sm relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      73 KG
                    </div>
                  </div>
                  <div className="flex w-[78px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      -3 KG
                    </div>
                  </div>
                  <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="w-[87.5px] justify-center mt-[-12.00px] mb-[-12.00px] flex h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        -29 KG
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-ccwhite-ff rounded-[10px]">
                  <div className="flex w-[100px] h-[43px] items-center justify-center gap-2.5 px-2 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      7/16/2024
                    </div>
                  </div>
                  <div className="flex w-[70px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="font-normal text-ccblack-00 text-sm relative w-fit [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                      73 KG
                    </div>
                  </div>
                  <div className="flex w-[78px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                      -3 KG
                    </div>
                  </div>
                  <div className="flex w-[87.5px] h-[43px] items-center justify-center gap-2.5 px-0 py-3 relative rounded-xl">
                    <div className="w-[87.5px] justify-center mt-[-12.00px] mb-[-12.00px] flex h-[43px] items-center gap-2.5 px-0 py-3 relative rounded-xl">
                      <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                        -29 KG
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed w-[390px] h-[76px] top-0 left-0">
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
        <div className="fixed w-[390px] h-[92px] top-[1244px] left-0 bg-ccwhite-ff shadow-[0px_4px_13px_#00000040]">
          <div className="absolute w-[137px] h-[5px] top-[75px] left-[127px] bg-[#72738e33] rounded-[2.5px]" />
          <div className="flex w-[319px] h-[50px] items-center justify-between absolute top-[11px] left-[35px]">
            <div className="inline-flex flex-col h-[50px] items-center justify-between relative flex-[0_0_auto] bg-ccwhite-ff">
              <img className="relative w-7 h-7" alt="Heart svgrepo com" src="/img/heart-svgrepo-com.svg" />
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-greygrey-400 text-sm tracking-[0] leading-[normal]">
                Summary
              </div>
            </div>
            <div className="flex flex-col w-[42px] h-[50px] items-center justify-between relative bg-ccwhite-ff">
              <img className="relative w-7 h-7" alt="Weight svgrepo com" src="/img/weight-svgrepo-com.svg" />
              <div className="relative w-fit ml-[-6.00px] mr-[-6.00px] [font-family:'Montserrat',Helvetica] font-semibold text-ccblack-00 text-sm tracking-[0] leading-[normal]">
                Weight
              </div>
            </div>
            <div className="inline-flex flex-col h-[50px] items-center justify-between relative flex-[0_0_auto] bg-ccwhite-ff">
              <img className="relative w-7 h-7" alt="Medicine svgrepo" src="/img/medicine-10-svgrepo-com.svg" />
              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-greygrey-400 text-sm tracking-[0] leading-[normal]">
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
