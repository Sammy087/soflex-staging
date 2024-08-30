import React, { useState } from "react";

const Summary = ({
  daysLeft,
  currentWeight,
  startWeight,
  dreamWeight,
  lastRead,
  sinceStart,
  openMedicineModal,
  openModal,
  seeMore,
  onMarkAsTaken,
  onNextMark,
  shotTaken,
  shotTakenTime,
}) => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <div className="flex flex-col items-start max-w-md mx-auto">
        <div className="flex justify-between items-center w-full mt-10">
          <h2 className="text-xl font-bold text-white">Summary</h2>
          <img alt="Frame" src="static/img/frame-932.svg" className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto bg-white rounded-lg p-4 pb-10 mb-2">
          <div className="p-4 rounded-lg mb-6 ">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Current Weight</h3>
              <button
                className="flex items-center text-sm text-[#4A7A7A]"
                onClick={openModal}
              >
                <img
                  className="w-4 h-4 mr-1"
                  src="static/img/plus_button.svg"
                  alt="Plus button"
                />
                Add for today
              </button>
            </div>
            <button
              className="flex justify-between items-center w-full p-2 bg-gray-100 rounded-lg"
              onClick={openModal}
            >
              <span className="text-1xl">{currentWeight} KG</span>
              <span className="text-sm text-[#50B498]">KG</span>
            </button>
            <div className="flex justify-between items-center mt-2 bg-gray-100 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-[#50B498] font-bold">
                  {currentWeight - lastRead} KG
                </div>
                <div className="text-xs text-gray-500">
                  Progress than your last read
                </div>
              </div>
              <div className="border-l-2 border-gray-400 h-full mx-4"></div>
              <div className="text-center">
                <div className="text-[#50B498] font-bold">
                  {currentWeight - dreamWeight} KG
                </div>
                <div className="text-xs text-gray-500">
                  Between you and your dream weight
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-center">
                <div className="text-xs text-gray-500">Start Weight</div>
                <div className="font-bold bg-gray-100 p-2 rounded-lg">
                  {startWeight} KG
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Dream Weight</div>
                <div className="font-bold bg-gray-100 p-2 rounded-lg">
                  {dreamWeight} KG
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Last Read</div>
                <div className="font-bold bg-gray-100 p-2 rounded-lg">
                  {lastRead} KG
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Since Start</div>
                <div className="font-bold bg-gray-100 p-2 rounded-lg">
                  {sinceStart} KG
                </div>
              </div>
            </div>
            <button
              className="mt-4 w-full bg-[#50B498] text-white py-2 rounded-lg"
              onClick={seeMore}
            >
              See More
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Shots Management</h3>
              <button
                className="text-sm text-[#50B498]"
                onClick={openMedicineModal}
              >
                Edit schedule
              </button>
            </div>
            {shotTaken ? (
              <div className="text-center">
                <div className="text-[#50B498] text-2xl font-bold mb-2">
                  Nice Job!
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-2xl cursor-pointer ${
                        index < rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onClick={() => setRating(index + 1)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  Shot taken today at {shotTakenTime}
                </div>
                <button
                  className="w-full bg-[#50B498] text-white py-2 rounded-lg"
                  onClick={onMarkAsTaken}
                >
                  Enter Today's Data
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-center items-center">
                  <div className="text-center text-2xl text-[#50B498] font-bold mb-2 px-1">
                    {daysLeft}
                  </div>
                  <div className="text-center text-2xl font-bold mb-2 text-[#50B498]">
                    Days
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500 mb-4">
                  {daysLeft > 0
                    ? "Days Left for next Shot"
                    : "It's time to make a shot!"}
                </div>
                <button
                  className={`w-full py-2 rounded-lg ${
                    daysLeft > 0
                      ? "bg-[#50B498] text-white"
                      : "bg-red-500 text-white"
                  }`}
                  onClick={onNextMark}
                >
                  Mark as Taken
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
