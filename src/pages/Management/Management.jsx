import React, { useState, useEffect } from "react";
import CurrentWeight from "../../component/CurrentWeight/CurrentWeight";
import UpdateWeightModal from "../../component/UpdateWeightModal/UpdateWeightModal";
import ShotsManagement from "../../component/ShotsManagement/ShotsManagement";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddMedicineModal from "../../component/AddMedicineModal/AddMedicineModal";
import MoreTabContent from "../../component/MoreTabContent/MoreTabContent";
import Summary from "../../component/Summary/Summary";

const Management = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startWeight, setStartWeight] = useState("102");
  const [dreamWeight, setDreamWeight] = useState("62");
  const [currentWeight, setCurrentWeight] = useState("70");
  const [isAddMedicineModalOpen, setIsAddMedicineModalOpen] = useState(false);

  const closeMedicineModal = () => {
    setIsAddMedicineModalOpen(false);
  };

  const openMedicineModal = () => {
    setIsAddMedicineModalOpen(true);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleMedicineConfirm = () => {
    // handle the confirm action
    setIsAddMedicineModalOpen(false);
  };

  const handleConfirm = () => {
    // Handle the confirm action (e.g., send the updated weight to the backend)
    closeModal();
  };

  const [activeTab, setActiveTab] = useState("weight");
  const [weightData, setWeightData] = useState([
    { date: "2023-01-01", weight: 70 },
    { date: "2023-02-01", weight: 71 },
    { date: "2023-03-01", weight: 69 },
  ]);
  const [chartData, setChartData] = useState({
    dates: ["2023-01-01", "2023-02-01", "2023-03-01"],
    weights: [70, 71, 69],
  });
  const schedule = {
    dosage: "50mg",
    frequency: "Everyday",
  };

  const medLog = [
    { date: "7/16/2024", medicineName: "Medicine Name", dosage: "50 mg" },
    { date: "7/16/2024", medicineName: "Medicine Name", dosage: "50 mg" },
    { date: "7/16/2024", medicineName: "Medicine Name", dosage: "50 mg" },
    { date: "7/16/2024", medicineName: "Medicine Name", dosage: "50 mg" },
  ];

  const columns = [
    { header: "Date", accessor: "date" },
    { header: "Weight", accessor: "weight" },
    { header: "Change", accessor: "change" },
    { header: "Since Start", accessor: "sinceStart" },
  ];
  const shotsColumns = [
    { header: "Date", accessor: "date" },
    { header: "Medicine Name", accessor: "medicineName" },
    { header: "Dosage", accessor: "dosage" },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/weight-data");
        setWeightData(response.data);

        const dates = response.data.map((entry) => entry.date);
        const weights = response.data.map((entry) => entry.weight);
        setChartData({ dates, weights });
      } catch (error) {
        console.error("Error fetching weight data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={
        activeTab === "summary"
          ? "bg-gradient-to-b from-[#FEC180] via-[#F5F0F0] to-[#F5F0F0] min-h-screen"
          : "bg-gray-100 min-h-screen"
      }
    >
      <div className="flex flex-col items-start max-w-md mx-auto mb-2">
        {activeTab !== "more" && activeTab !== "summary" && (
          <div className="flex justify-around mb-4 mt-4 rounded-lg bg-white mx-auto w-full">
            <button
              className={`w-1/3 py-2 mt-2 mb-2 ml-2 ${
                activeTab === "weight"
                  ? "bg-[#50B498] text-white rounded-lg"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab("weight")}
            >
              Weight
            </button>
            <button
              className={`w-1/3 py-2 mt-2 mb-2 ${
                activeTab === "shots"
                  ? "bg-[#50B498] text-white rounded-lg"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab("shots")}
            >
              Shots
            </button>
          </div>
        )}
        {activeTab === "weight" && (
          <h2 className="text-xl font-bold mb-4 ml-4">Weight Management</h2>
        )}
        <div
          className={`${
            activeTab === "summary" ? "" : "bg-white"
          } rounded-lg p-4 w-full`}
        >
          {activeTab === "summary" && <Summary />}
          {activeTab === "weight" && (
            <CurrentWeight
              currentWeight={currentWeight}
              startWeight={startWeight}
              dreamWeight={dreamWeight}
              chartData={chartData}
              weightData={weightData}
              columns={columns}
              openModal={openModal}
            />
          )}

          {activeTab === "shots" && (
            <ShotsManagement
              schedule={schedule}
              daysLeft={9}
              medLog={medLog}
              shotscolumns={shotsColumns}
              openMedicineModal={openMedicineModal}
            />
          )}
          {activeTab === "more" && <MoreTabContent />}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg">
        <div className="flex justify-around py-2">
          <button
            className="text-gray-500"
            onClick={() => setActiveTab("summary")}
          >
            {activeTab === "summary" ? (
              <div className="flex flex-col items-center">
                <img
                  className="w-7 h-7"
                  alt="Heart icon"
                  src="static/img/heart-svgrepo-com.svg"
                />
                <span className="text-xs text-black font-bold">Summary</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <img
                  className="w-7 h-7"
                  alt="Heart icon"
                  src="static/img/heart-unactive.svg"
                />
                <span className="text-xs">Summary</span>
              </div>
            )}
          </button>
          <button
            className="text-gray-500"
            onClick={() => setActiveTab("weight")}
          >
            {activeTab === "weight" ? (
              <div className="flex flex-col items-center">
                <img
                  className="relative w-7 h-7"
                  alt="Weight svgrepo com"
                  src="static/img/weight-active.svg"
                />
                <span className="text-xs text-black font-bold">Weight</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <img
                  className="relative w-7 h-7"
                  alt="Weight svgrepo com"
                  src="static/img/weight-svgrepo-com.svg"
                />
                <span className="text-xs">Weight</span>
              </div>
            )}
          </button>
          <button
            className="text-gray-500"
            onClick={() => setActiveTab("shots")}
          >
            {activeTab === "shots" ? (
              <div className="flex flex-col items-center">
                <img
                  className="relative w-7 h-7"
                  alt="Medicine svgrepo"
                  src="static/img/medicine-active.svg"
                />
                <span className="text-xs text-black font-bold">Shots</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <img
                  className="relative w-7 h-7"
                  alt="Medicine svgrepo"
                  src="static/img/medicine-10-svgrepo-com.svg"
                />
                <span className="text-xs">Shots</span>
              </div>
            )}
          </button>
          <button className="text-gray-500">
            <div
              className="flex flex-col items-center"
              onClick={() => setActiveTab("more")}
            >
              {activeTab === "more" ? (
                <div
                  className="flex flex-col items-center"
                  onClick={() => setActiveTab("more")}
                >
                  <img
                    className="relative w-7 h-7"
                    alt="More svgrepo com"
                    src={
                      activeTab === "more"
                        ? "static/img/more-svgrepo-com-active.svg"
                        : "static/img/more-svgrepo-com.svg"
                    }
                  />
                  <span className="text-xs text-black font-bold">More</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <img
                    className="relative w-7 h-7"
                    alt="More svgrepo com"
                    src="static/img/more-svgrepo-com.svg"
                  />
                  <span className="text-xs">More</span>
                </div>
              )}
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
        title={"Update today Weight"}
      />
      <AddMedicineModal
        isOpen={isAddMedicineModalOpen}
        onRequestClose={closeMedicineModal}
        onConfirm={handleMedicineConfirm}
      />
    </div>
  );
};

export default Management;
