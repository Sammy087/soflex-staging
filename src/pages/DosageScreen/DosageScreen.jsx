import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function DosageScreen() {
  const navigate = useNavigate();
  const [dosage, setDosage] = useState("");
  const [unit, setUnit] = useState("");
  const handleNext = () => {
    navigate("/last-Shot");
  };
  const handleSkip = () => {
    navigate("/last-shot");
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
      <h1 className="text-2xl font-bold mb-2">Now choose your dosage</h1>
      <p className="text-base mb-5 max-w-xs">
        Second, choose your medicine dosage
      </p>
      <div className="w-full">
        <label
          htmlFor="dosage"
          className="block text-left text-sm font-medium text-gray-700 mb-1"
        >
          Dosage
        </label>
        <div className="relative mt-2 rounded-md shadow-sm w-80">
          <input
            type="text"
            name="dosage"
            id="dosage"
            className="w-full h-12 p-3 text-base border border-gray-300 rounded-lg block py-1.5 pl-3 pr-20 mb-6 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="50"
            onChange={(e) => setDosage(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <select
              id="unit"
              name="unit"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              onChange={(e) => setUnit(e.target.value)}
            >
              <option>mg</option>
              <option>ml</option>
              <option>gr</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full max-w-xs mb-5">
        <button onClick={handleSkip} className="text-gray-500">
          Skip
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 text-lg text-white bg-[#50B498] rounded-full"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default DosageScreen;
