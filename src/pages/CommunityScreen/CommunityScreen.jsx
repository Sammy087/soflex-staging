// src/components/CommunityScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";

function CommunityScreen() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/health-connect");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center bg-white">
      <h1 className="text-2xl font-bold mb-2">
        Share your results with community!
      </h1>
      <p className="text-base mb-5 max-w-xs">
        Show other people how far you got with GLP medicine!
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

export default CommunityScreen;
