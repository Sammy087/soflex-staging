import React, { useState } from "react";
import UpdateWeightModal from "../../component/UpdateWeightModal/UpdateWeightModal";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startWeight, setStartWeight] = useState(102);
  const [dreamWeight, setDreamWeight] = useState(62);
  const [lastRead, setLastRead] = useState(76);
  const [sinceStart, setSinceStart] = useState(29);
  const [currentWeight, setCurrentWeight] = useState(73);

  const handleConfirm = () => {
    // Handle the confirm action (e.g., send the updated weight to the backend)
    closeModal();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-4 bg-gradient-to-b from-[#FEC180] via-[#F5F0F0] to-[#F5F0F0] min-h-screen">
      <div className="flex flex-col items-start max-w-md mx-auto p-4mb-2">
        <div className="flex justify-between items-center w-full mt-10">
          <h2 className="text-xl font-bold text-white">Summary</h2>
          <img alt="Frame" src="static/img/frame-932.svg" className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 pb-10 mb-2">
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
            <button className="mt-4 w-full bg-[#50B498] text-white py-2 rounded-lg">
              See More
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Shots Management</h3>
              <button className="text-sm text-[#50B498]">Edit schedule</button>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center text-2xl text-[#50B498] font-bold mb-2 px-1">
                9
              </div>
              <div className="text-center text-2xl font-bold mb-2">Days</div>
            </div>
            <div className="text-center text-sm text-gray-500 mb-4">
              Days Left for next Shot
            </div>
            <button className="w-full bg-[#50B498] text-white py-2 rounded-lg">
              Mark as Taken
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg">
        <div className="flex justify-around py-2">
          <button className="text-black font-bold ">
            <div className="flex flex-col items-center">
              <img
                className="w-7 h-7"
                alt="Heart icon"
                src="static/img/heart-svgrepo-com.svg"
              />
              <span className="text-xs">Summary</span>
            </div>
          </button>
          <button
            className="text-gray-500"
            onClick={() => navigate("/management")}
          >
            <div className="flex flex-col items-center">
              <img
                className="relative w-7 h-7"
                alt="Weight svgrepo com"
                src="static/img/weight-svgrepo-com.svg"
              />
              <span className="text-xs">Weight</span>
            </div>
          </button>
          <button className="text-gray-500">
            <div className="flex flex-col items-center">
              <img
                className="relative w-7 h-7"
                alt="Medicine svgrepo"
                src="static/img/medicine-10-svgrepo-com.svg"
              />
              <span className="text-xs">Shots</span>
            </div>
          </button>
          <button className="text-gray-500">
            <div className="flex flex-col items-center">
              <img
                className="relative w-7 h-7"
                alt="More svgrepo com"
                src="static/img/more-svgrepo-com.svg"
              />
              <span className="text-xs">More</span>
            </div>
          </button>
        </div>
      </div>
      <UpdateWeightModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        startWeight={startWeight}
        setStartWeight={setStartWeight}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default Summary;
