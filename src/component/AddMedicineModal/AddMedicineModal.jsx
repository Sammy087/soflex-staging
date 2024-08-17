import React, { useState } from "react";
import Modal from "react-modal";

const AddMedicineModal = ({ isOpen, onRequestClose, onConfirm }) => {
  const [medicineName, setMedicineName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("Everyday");
  const [times, setTimes] = useState([{ time: "1:35PM", dosage: "1 Capsule" }]);

  const addTime = () => {
    setTimes([...times, { time: "", dosage: "1 Capsule" }]);
  };

  const handleTimeChange = (index, value) => {
    const newTimes = [...times];
    newTimes[index].time = value;
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
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />
        <span className="ml-2 text-lg">mg</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Frequency
        </label>
        <div className="border border-gray-300 rounded-lg p-2 w-full flex justify-between items-center">
          <span>{frequency}</span>
          <button className="text-sm text-[#50B498]">Edit</button>
        </div>
      </div>
      <div className="mb-4">
        {times.map((time, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-full mr-2"
              value={time.time}
              onChange={(e) => handleTimeChange(index, e.target.value)}
            />
            <span className="text-sm text-gray-500">{time.dosage}</span>
          </div>
        ))}
        <button className="text-sm text-[#50B498]" onClick={addTime}>
          + Add a time
        </button>
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
