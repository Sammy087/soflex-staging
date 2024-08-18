import React from "react";
import WeightChart from "../WeightChart/WeightChart";
import Table from "../Table/Table";

const CurrentWeight = ({
  currentWeight,
  startWeight,
  dreamWeight,
  chartData,
  weightData,
  columns,
  openModal,
}) => {
  return (
    <>
      <div
        className="flex justify-between items-center mb-2"
        onClick={openModal}
      >
        <h3 className="text-lg font-semibold">Current Weight</h3>
        <button
          className="flex items-center text-sm text-[#50B498]"
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
      <div
        className="flex justify-between items-center bg-gray-200 rounded-lg"
        onClick={openModal}
      >
        <div className="text-2xm font-bold ml-4 mt-2 mb-2">
          {currentWeight} KG
        </div>
        <div className="text-right text-sm text-[#50B498] mr-4">KG</div>
      </div>
      <div className="flex justify-between items-center mt-2 bg-gray-100 p-4 rounded-lg">
        <div className="text-center">
          <div className="text-[#50B498] font-bold">-3 KG</div>
          <div className="text-xs text-gray-500">
            Progress than your last read
          </div>
        </div>
        <div className="border-l-2 border-gray-400 h-full mx-4"></div>
        <div className="text-center">
          <div className="text-[#50B498] font-bold">12 KG</div>
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
          <div className="font-bold bg-gray-100 p-2 rounded-lg">76 KG</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500">Since Start</div>
          <div className="font-bold bg-gray-100 p-2 rounded-lg">29 KG</div>
        </div>
      </div>
      <div className="mt-4">
        <WeightChart dates={chartData.dates} weights={chartData.weights} />
      </div>

      <div className="flex justify-between items-center mb-4 mt-4">
        <h2 className="text-xl font-bold">Weight Entry Log</h2>
        <div className="text-[#50B498] text-sm">July'24</div>
      </div>
      <Table columns={columns} data={weightData} />
    </>
  );
};

export default CurrentWeight;
