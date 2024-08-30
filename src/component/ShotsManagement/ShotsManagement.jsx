import React, { useState } from "react";
import Table from "../Table/Table";
import FilterModal from "../FilterModal/FilterModal";
import WeekCalendar from "../WeekCalendar/WeekCalendar";
import WeightModal from "../WeightModal/WeightModal";

const ShotsManagement = ({
  nextShot,
  medLog,
  shotscolumns,
  openMedicineModal,
  openShotModal,
  currentWeight,
  startWeight,
  dreamWeight,
  onMarkAsTaken,
  onNextMark,
  shotTaken,
  shotTakenTime,
}) => {
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWeightModalOpen, setIsWeightModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const currentDate = new Date();
  const [formData, setFormData] = useState({
    WedWeight: currentWeight,
    StartWeight: startWeight,
    LastRead: currentWeight,
    DreamWeight: dreamWeight,
    SinceStart: startWeight - currentWeight,
  });
  const [pickedMonth, setPickedMonth] = useState("Select a month");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    const filtered = medLog.filter((row) => {
      const date = new Date(row.date); // Assuming 'date' is the accessor for the date column
      return (
        date.toLocaleString("default", { month: "long" }) === selectedMonth
      );
    });
    setFilteredData(filtered);
    handleCloseModal();
  };
  const handleOpenWeightModal = () => {
    setIsWeightModalOpen(true);
  };

  const handleCloseWeightModal = () => {
    setIsWeightModalOpen(false);
  };

  const handleWeightConfirm = (data) => {
    setFormData(data);
    // You can also update the state or perform other actions here
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Shots Management</h3>
        <button className="text-sm text-[#50B498]" onClick={openMedicineModal}>
          Edit schedule
        </button>
      </div>
      <WeekCalendar
        currentDate={currentDate}
        handleOpenWeightModal={handleOpenWeightModal}
      />
      <div className="text-center text-sm text-gray-500 mb-4 mt-4">
        {nextShot.days_left > 0
          ? "Days Left for next Shot"
          : "It's time to make a shot!"}
      </div>
      <div className="text-center text-2xl text-[#50B498] font-bold mb-4">
        {nextShot.days_left} Days
      </div>
      <div className="mb-4">
        <div className="flex flex-col items-start p-4 bg-white rounded-lg border">
          <div className="flex w-full items-center justify-center ">
            <span className="text-lg font-semibold mb-2">
              Name : {nextShot.shot_name}
            </span>
          </div>
          <div className="flex justify-between w-full">
            <span className="bg-gray-100 text-sm text-gray-500 p-2 rounded-lg">
              Dosage: {nextShot.dosage} {nextShot.dosage_unit}
            </span>
            <span className="bg-gray-100 text-sm text-gray-500 p-2 rounded-lg">
              Frequency: {nextShot.frequency}
            </span>
          </div>
        </div>
        {shotTaken ? (
          <div className="text-center">
            <div className="text-[#50B498] text-2xl font-bold mb-2">
              Nice Job!
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl cursor-pointer ${
                    index < rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => setRating(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Shot taken today at {shotTakenTime}
            </div>
            <button
              className="w-full bg-[#50B498] text-white py-2 rounded-lg mb-2"
              onClick={onMarkAsTaken}
            >
              Enter Today's Data
            </button>
          </div>
        ) : (
          <>
            <button
              className={`w-full py-2 rounded-lg ${
                nextShot.days_left > 0
                  ? "bg-[#50B498] text-white mb-2"
                  : "bg-red-500 text-white mb-2"
              }`}
              onClick={onNextMark}
            >
              Mark as Taken
            </button>
          </>
        )}
        <button
          className="w-full border border-[#50B498] text-[#50B498] py-2 rounded-lg"
          onClick={openShotModal}
        >
          Add new shot
        </button>
      </div>
      <div className="flex justify-between items-center mb-4 mt-4">
        <h2 className="text-xl font-bold">Med Entry Log</h2>
        <div className="text-[#50B498] text-sm" onClick={handleOpenModal}>
          {pickedMonth}
        </div>
      </div>
      <Table
        columns={shotscolumns}
        data={filteredData ? filteredData : medLog}
      />
      <FilterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Month
          </label>
          <select
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value);
              setPickedMonth(e.target.value);
            }}
          >
            <option value="">Select a month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
      </FilterModal>
      <WeightModal
        isOpen={isWeightModalOpen}
        onClose={handleCloseWeightModal}
        onConfirm={handleWeightConfirm}
        initialData={formData}
      />
    </>
  );
};

export default ShotsManagement;
