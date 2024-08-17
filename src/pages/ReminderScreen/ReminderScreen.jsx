// src/components/ReminderScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";

function ReminderScreen() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/weight-loss");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center bg-white">
      <h1 className="text-2xl font-bold mb-2">
        Never forget when your next shot is!
      </h1>
      <p className="text-base mb-5 max-w-xs">
        Share with me your injection schedule, and I'll remind you about an
        upcoming shot
      </p>
      <img src="static/img/middle.svg" alt="middle"></img>
      <button
        onClick={handleNext}
        className="px-6 py-3 text-lg font-semibold text-white bg-black rounded-full"
      >
        Next →
      </button>
    </div>
  );
}

export default ReminderScreen;
