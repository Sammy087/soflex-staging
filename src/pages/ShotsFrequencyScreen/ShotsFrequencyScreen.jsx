import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShotsFrequencyScreen() {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState("monthly");

  const handleNext = () => {
    navigate("/last-reminder");
  };

  const handleSkip = () => {
    navigate("/last-reminder");
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center bg-white">
      <div
        className="absolute top-5 left-5 cursor-pointer p-1"
        onClick={handleBack}
      >
        <img src="static/img/black-arrow.svg" alt="black-arrow"></img>
      </div>
      <img src="static/img/middle.svg" alt="middle"></img>
      <h1 className="text-2xl font-bold mb-2">
        Let's add your shots info for now:
      </h1>
      <p className="text-base mb-5 max-w-xs">
        First, choose your medicine name
      </p>
      <div className="relative w-full max-w-xs mb-5">
        <label
          htmlFor="weight-input"
          className="block text-left text-sm font-medium text-gray-700 mb-1"
        >
          medicine name
        </label>
        <select
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="flex justify-between w-full max-w-xs mb-5">
        <button onClick={handleSkip} className="text-gray-500">
          Skip
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 text-lg font-semibold text-white bg-black rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ShotsFrequencyScreen;
