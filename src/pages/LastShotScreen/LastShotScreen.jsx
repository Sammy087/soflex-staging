import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateSelectionModal from "../../component/DateSelectionModal/DateSelectionModal";

function LastShotScreen() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const today = new Date();
  const formattedToday = `${today.toLocaleString("default", {
    month: "long",
  })} ${today.getDate()}, ${today.getFullYear()}`;
  const [selectedDate, setSelectedDate] = useState(formattedToday);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [clickedDate, setClickedDate] = useState(null);

  useEffect(() => {
    setSelectedDate(formattedToday);
  }, [formattedToday]);

  const handleNext = () => {
    navigate("/shots-frequency");
  };

  const handleSkip = () => {
    navigate("/shots-frequency");
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setIsModalOpen(false);
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDateClick = (date) => {
    setClickedDate(date);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md p-4">
        <div
          className="absolute top-5 left-5 cursor-pointer p-1"
          onClick={() => navigate(-1)}
        >
          <img src="static/img/black-arrow.svg" alt="black-arrow"></img>
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">
          When you got your last shot?
        </h1>
        <p className="text-center mb-5">
          Please choose a date when the last shot was taken
        </p>
        <div className="flex justify-center mb-5">
          <div className="w-full p-4 border border-gray-300 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">{selectedDate}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center w-full mb-2">
                <button className="p-2" onClick={handlePreviousMonth}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span className="text-lg font-semibold">
                  {monthNames[currentMonth]} {currentYear}
                </span>
                <button className="p-2" onClick={handleNextMonth}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 w-full">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day, index) => (
                    <div
                      key={index}
                      className="text-center font-semibold text-sm"
                    >
                      {day}
                    </div>
                  )
                )}
                {[...Array(daysInMonth(currentMonth, currentYear))].map(
                  (_, index) => (
                    <button
                      key={index}
                      className={`p-1 rounded text-sm ${
                        index + 1 === today.getDate()
                          ? "bg-gray-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() =>
                        handleDateClick(
                          `${monthNames[currentMonth]} ${
                            index + 1
                          }, ${currentYear}`
                        )
                      }
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={handleSkip}
            className="px-6 py-3 text-gray-700 rounded-full hover:bg-gray-300"
          >
            Skip
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-3 text-white bg-[#50B498] rounded-full hover:bg-gray-800"
          >
            Next →
          </button>
        </div>
      </div>
      {isModalOpen && (
        <DateSelectionModal
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleDateConfirm}
          date={clickedDate}
        />
      )}
    </div>
  );
}

export default LastShotScreen;
