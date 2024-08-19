import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../AppConstants";

export function MedicineNameScreen() {
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState("");
  const handleNext = () => {
    navigate(Paths.MEDICINE_DOSAGE);
  };
  const handleSkip = () => {
    navigate(Paths.MEDICINE_DOSAGE);
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
          className="w-full p-2 mb-3 h-12 border border-gray-300 rounded"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
        >
          <option value="custom">custom</option>
          <option value="medicine1">Medicine 1</option>
          <option value="medicine2">Medicine 2</option>
          <option value="medicine3">Medicine 3</option>
        </select>
      </div>
      <div className="flex justify-between w-full max-w-xs mt-9">
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

export default MedicineNameScreen;
