// src/components/HealthConnectScreen.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function HealthConnectScreen() {
  const navigate = useNavigate();
  const { username } = useContext(UserContext);

  const handleSkip = () => {
    navigate("/check-current-weight");
  };

  const handleConnect = () => {
    navigate("/start-weight");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center bg-white">
      <h1 className="text-2xl font-bold mb-2">
        But enough about me. This is about you!
      </h1>
      <p className="text-base mb-5 max-w-xs">
        Fill in, {username}! Connect your health, so I could synchronize your
        health data and show you all these useful charts and logs
      </p>
      <img src="static/img/middle.svg" className="w-1/2" alt="middle"></img>
      <div className="flex gap-3">
        <button
          onClick={handleSkip}
          className="px-6 py-3 text-lg font-semibold text-black bg-gray-300 rounded-full"
        >
          Skip
        </button>
        <button
          onClick={handleConnect}
          className="px-6 py-3 text-lg font-semibold text-white bg-black rounded-full"
        >
          Connect to Health
        </button>
      </div>
    </div>
  );
}

export default HealthConnectScreen;
