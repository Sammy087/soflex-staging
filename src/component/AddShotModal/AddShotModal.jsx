import React, { useState } from "react";
import Modal from "react-modal";
import AddMedicineModal from "../AddMedicineModal/AddMedicineModal";

const AddShotModal = ({ isOpen, onRequestClose, onConfirm, medicinesList }) => {
  const [medicineName, setMedicineName] = useState("");
  const [date, setDate] = useState("");
  const [dosage, setDosage] = useState("");
  const [timeTaken, setTimeTaken] = useState("1:26 PM");
  const [injectionSite, setInjectionSite] = useState("Stomach - Upper Left");
  const [isAddMedicineModalOpen, setIsAddMedicineModalOpen] = useState(false);

  const openAddMedicineModal = () => {
    setIsAddMedicineModalOpen(true);
  };

  const closeAddMedicineModal = () => {
    setIsAddMedicineModalOpen(false);
  };

  return (
    <>
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
          <h2 className="text-lg font-semibold">Add New Shot</h2>
          <span></span>
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
            {medicinesList.map((medicine) => (
              <option key={medicine.name} value={medicine.name}>
                {medicine.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dosage
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full">
            <input
              type="text"
              className="flex-grow outline-none"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
            />
            <span className="text-[#50B498] ml-2">mg</span>
          </div>
        </div>
        <div className="mb-4 flex-row justify-between items-center bg-gray-100 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time Taken
            </label>
            <div className="bg-[#50B498] text-white text-sm p-2 rounded-lg">
              {timeTaken}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Injection Site
            </label>
            <div className="text-sm text-gray-500 p-2 rounded-lg flex items-center">
              <select
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={injectionSite}
                onChange={(e) => setInjectionSite(e.target.value)}
              >
                <option value="">Choose Site</option>
                <option value="Stomach - Upper Left">
                  Stomach - Upper Left
                </option>
                <option value="Stomach - Upper Right">
                  Stomach - Upper Right
                </option>
                <option value="Stomach - Lower Left">
                  Stomach - Lower Left
                </option>
                <option value="Stomach - Lower Right">
                  Stomach - Lower Right
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-sm text-[#50B498] border border-[#50B498] py-2 px-4 rounded-lg"
            onClick={openAddMedicineModal}
          >
            Edit schedule
          </button>
          <button
            className="bg-[#50B498] text-white py-2 px-4 rounded-lg ml-2"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </Modal>
      <AddMedicineModal
        isOpen={isAddMedicineModalOpen}
        onRequestClose={closeAddMedicineModal}
        onConfirm={closeAddMedicineModal}
      />
    </>
  );
};

export default AddShotModal;
