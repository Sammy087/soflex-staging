import React from "react";
import Table from "../Table/Table";

const ShotsManagement = ({ schedule, daysLeft, medLog, shotscolumns }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Shots Management</h2>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Edit schedule</h3>
        <button className="text-sm text-[#50B498]">Edit schedule</button>
      </div>
      <div className="text-center text-sm text-gray-500 mb-4">
        Days Left for next Shot
      </div>
      <div className="text-center text-2xl text-[#50B498] font-bold mb-4">
        {daysLeft} Days
      </div>
      <div className="mb-4">
        <div className="flex flex-col items-start p-4 bg-white rounded-lg border">
          <span className="text-lg font-semibold mb-2">Name</span>
          <div className="flex justify-between w-full">
            <span className="bg-gray-100 text-sm text-gray-500 p-2 rounded-lg">
              Dosage: {schedule.dosage}
            </span>
            <span className="bg-gray-100 text-sm text-gray-500 p-2 rounded-lg">
              Frequency: {schedule.frequency}
            </span>
          </div>
        </div>
        <button className="w-full bg-[#50B498] text-white py-2 rounded-lg mb-2 mt-2">
          Mark as Taken
        </button>
        <button className="w-full border border-[#50B498] text-[#50B498] py-2 rounded-lg">
          Add new shot
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4">Med Entry Log</h2>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <Table columns={shotscolumns} data={medLog} />
    </div>
  );
};

export default ShotsManagement;
