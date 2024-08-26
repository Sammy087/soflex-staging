// src/components/HealthConnectScreen.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Paths } from "../../AppConstants";
import { checkHealthConnection } from "../../firebaseApis/healthApis";
import { GlobalContext } from "../../contexts/GlobalContext";
import Loading from "../Loading/Loading";

function HealthConnectScreen() {
  const navigate = useNavigate();
  const { username, uid } = useContext(UserContext);
  const { loading, setLoading } = useContext(GlobalContext);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    setLoading(true);
    checkHealthConnection({ uid })
      .then(({ data }) => {
        setConnected(data.result);
      })
      .catch((err) => console.log("err", err));
    setLoading(false);
  }, []);

  const handleSkip = () => {
    navigate(Paths.START_WEIGHT);
  };

  const handleConnect = () => {
    if (connected) {
      navigate(Paths.CHECK_CURRENT_WEIGHT);
    } else {
      navigate(Paths.START_WEIGHT);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center bg-white">
      <h1 className="text-2xl font-bold mb-2">
        But enough about me. This is about you!
      </h1>
      <p className="text-base mb-5 max-w-xs">
        Fill in, {username}! Connect your health, so I could synchronize your
        health data and show you all these useful charts and logs
      </p>
      <img
        src="static/img/middle.svg"
        className="w-1/2 mb-10"
        alt="middle"
      ></img>
      <div className="flex justify-between w-full max-w-xs mt-5">
        <button onClick={handleSkip} className="text-gray-500">
          Skip
        </button>
        <button
          onClick={handleConnect}
          className="px-6 py-3 text-lg text-white bg-[#50B498] rounded-full"
        >
          Connect to Health
        </button>
      </div>
    </div>
  );
}

export default HealthConnectScreen;
