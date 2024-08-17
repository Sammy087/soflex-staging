import React, { useState } from "react";
import Modal from "react-modal";

const AddMedicineModal = ({ isOpen, onRequestClose, onConfirm }) => {
  const [medicineName, setMedicineName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("Everyday");
  const [times, setTimes] = useState([
    { time: "1:35 PM", dosage: "1 Capsule" },
  ]);

  const addTime = () => {
    setTimes([...times, { time: "", dosage: "1 Capsule" }]);
  };

  const handleTimeChange = (index, value) => {
    const newTimes = [...times];
    newTimes[index].time = value;
    setTimes(newTimes);
  };

  const removeTime = (index) => {
    const newTimes = times.filter((_, i) => i !== index);
    setTimes(newTimes);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-lg shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="flex justify-between items-center mb-4">
        <button onClick={onRequestClose} className="text-gray-500">
          Cancel
        </button>
        <h2 className="text-lg font-semibold">Med Name</h2>
        <span></span>
      </div>
      <div className="text-center text-sm text-gray-500 mb-4">
        <img
          src="/static/img/calendar.svg"
          alt="Calendar"
          className="mx-auto mb-2"
        />
        When will you take this?
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Medicine Name
        </label>
        <select
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
        >
          <option value="">Choose Medicine</option>
          <option value="Medicine 1">Medicine 1</option>
          <option value="Medicine 2">Medicine 2</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Dosage
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full">
          <input
            type="text"
            className="flex-grow border-none outline-none"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
          <span className="ml-2 text-lg text-[#50B498]">mg</span>
        </div>
      </div>
      <div className="mb-4 flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer">
        <span className="text-sm font-medium text-gray-700">Frequency</span>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">
            {frequency || "Choose Frequency"}
          </span>
          <img
            src="/static/img/right-arrow.svg"
            alt="Right Arrow"
            className="w-4 h-4 text-[#50B498]"
          />
        </div>
      </div>
      <div className="mb-4">
        {times.map((time, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded-lg"
          >
            <div className="flex items-center">
              <button
                className="bg-[#50B498] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2"
                onClick={() => removeTime(index)}
              >
                <span className="text-lg">-</span>
              </button>
              <input
                type="time"
                className="text-lg font-semibold border-none outline-none bg-gray-100"
                value={time.time}
                onChange={(e) => handleTimeChange(index, e.target.value)}
              />
            </div>
            <span className="text-sm text-[#50B498]">{time.dosage}</span>
          </div>
        ))}
        <div
          className="flex justify-between items-center bg-gray-100 p-2 rounded-lg cursor-pointer"
          onClick={addTime}
        >
          <div className="flex items-center">
            <button className="bg-[#50B498] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <span className="text-lg">+</span>
            </button>
            <span className="text-lg font-semibold">Add a time</span>
          </div>
          <span className="text-sm text-[#50B498]">1 Capsule</span>
        </div>
      </div>
      <button
        className="w-full bg-[#50B498] text-white py-2 rounded-lg"
        onClick={onConfirm}
      >
        Confirm
      </button>
    </Modal>
  );
};

export default AddMedicineModal;
