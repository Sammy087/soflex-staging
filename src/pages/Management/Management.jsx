import React, { useState, useEffect, useContext } from "react";
import CurrentWeight from "../../component/CurrentWeight/CurrentWeight";
import UpdateWeightModal from "../../component/UpdateWeightModal/UpdateWeightModal";
import ShotsManagement from "../../component/ShotsManagement/ShotsManagement";
import AddMedicineModal from "../../component/AddMedicineModal/AddMedicineModal";
import MoreTabContent from "../../component/MoreTabContent/MoreTabContent";
import Summary from "../../component/Summary/Summary";
import AddShotModal from "../../component/AddShotModal/AddShotModal";
import { UserContext } from "../../contexts/UserContext";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  getAllMedicines,
  getUserShots,
  getUserWeights,
  mutationShotsInfoTimes,
  mutationUserWeights,
} from "../../firebaseApis/healthApis";
import Loading from "../Loading/Loading";
import { timestampToDate } from "../../component/dateConverter";
import ManagementLayout from "./ManagementLayout";

const Management = () => {
  const { uid } = useContext(UserContext);
  const { loading, setLoading, activeTab, setActiveTab } =
    useContext(GlobalContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startWeight, setStartWeight] = useState("102");
  const [dreamWeight, setDreamWeight] = useState("62");
  const [currentWeight, setCurrentWeight] = useState("70");
  const [lastRead, setLastRead] = useState("76");
  const [sinceStart, setSinceStart] = useState("29");
  const [medicinesList, setMedicinesList] = useState([]);
  const [isAddMedicineModalOpen, setIsAddMedicineModalOpen] = useState(false);
  const [isAddShotModalOpen, setIsAddShotModalOpen] = useState(false);
  const [medLog, setMedLog] = useState([]);
  const [nextShot, setNextShot] = useState({
    days_left: null,
    dosage: null,
    dosage_unit: null,
    frequency: null,
    next_shot_date: null,
    shot_name: null,
  });
  const [shotTaken, setShotTaken] = useState(false);
  const [shotTakenTime, setShotTakenTime] = useState();

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
    setIsAddMedicineModalOpen(false);
  };

  const handleConfirm = async (key, value) => {
    setLoading(true);
    await mutationUserWeights({
      uid,
      key,
      value,
    })
      .then((res) => {
        if (res.data.result) console.log(res.data.result);
      })
      .catch((err) => console.error(err));
    await fetchData();
    setLoading(false);
    closeModal();
  };

  const handleShotConfirm = () => {
    fetchData();
    setIsAddShotModalOpen(false);
  };

  const openShotModal = () => {
    setIsAddShotModalOpen(true);
  };

  const closeShotModal = () => {
    setIsAddShotModalOpen(false);
  };
  const seeMore = () => {
    setActiveTab("weight");
  };

  const [weightData, setWeightData] = useState([
    { date: "2023-01-01", weight: 70 },
    { date: "2023-02-01", weight: 71 },
    { date: "2023-03-01", weight: 69 },
  ]);

  const [chartData, setChartData] = useState({
    dates: ["2023-01-01", "2023-02-01", "2023-03-01"],
    weights: [70, 71, 69],
  });

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

  function getNextShotDate(lastShotDate, frequency) {
    const date = new Date(lastShotDate);
    switch (frequency) {
      case "Daily":
        date.setDate(date.getDate() + 1);
        break;
      case "Weekly":
        date.setDate(date.getDate() + 7);
        break;
      case "Monthly":
        date.setMonth(date.getMonth() + 1);
        break;
      case "Yearly":
        date.setFullYear(date.getFullYear() + 1);
        break;
      default:
        throw new Error("Unknown frequency: " + frequency);
    }
    return date.toISOString().split("T")[0];
  }

  function calculateDaysBetween(date1, date2) {
    const diffTime = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  function findEarliestNextShot(data) {
    const shots = data.data.data.shots;
    let earliestShot = null;

    shots.forEach((shot) => {
      const nextShotDate = getNextShotDate(shot.last_shot_date, shot.frequency);
      if (
        !earliestShot ||
        new Date(nextShotDate) < new Date(earliestShot.next_shot_date)
      ) {
        earliestShot = {
          shot_name: shot.shot_name,
          next_shot_date: nextShotDate,
          dosage: shot.dosage,
          dosage_unit: shot.dosage_unit,
          frequency: shot.frequency,
        };
      }
    });

    if (earliestShot) {
      const today = new Date().toISOString().split("T")[0];
      earliestShot.days_left = calculateDaysBetween(
        today,
        earliestShot.next_shot_date
      );
    }

    setNextShot(earliestShot);
    return earliestShot;
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const f_user_weights = await getUserWeights({ uid });
      const f_user_shots = await getUserShots({ uid });
      const f_medicines_list = await getAllMedicines({ uid });
      findEarliestNextShot(f_user_shots);

      if (f_user_weights.data && f_user_weights.data.data) {
        const userWeightData = f_user_weights.data.data.today_weight;
        const userShotsData = f_user_shots.data.data.shots;
        setMedicinesList(f_medicines_list.data.data);

        const convertedUserWeightData = userWeightData.map((wData, _index) => ({
          date: timestampToDate(wData.timestamp),
          weight: wData.value,
          change:
            _index > 0
              ? userWeightData[_index].value - userWeightData[_index - 1].value
              : 0,
          sinceStart:
            f_user_weights.data.data.start_weight -
            userWeightData[_index].value,
        }));

        const convertedUserShotsData = userShotsData.flatMap((sData) => {
          if (sData.shoted_dates) {
            return sData.shoted_dates.flatMap((shotDate) => {
              return shotDate.times.map((timeData) => ({
                date: shotDate.date,
                time: timeData.time,
                medicineName: sData.shot_name,
                dosage: `${sData.dosage} ${sData.dosage_unit}`,
                frequency: sData.frequency,
              }));
            });
          }
          return [];
        });

        setMedLog(convertedUserShotsData);
        setWeightData(convertedUserWeightData);
        setStartWeight(f_user_weights.data.data.start_weight);
        setDreamWeight(f_user_weights.data.data.dream_weight);
        setCurrentWeight(f_user_weights.data.data.current_weight);
        setLastRead(userWeightData[userWeightData.length - 1].value);
        setSinceStart(
          f_user_weights.data.data.start_weight -
            f_user_weights.data.data.current_weight
        );
        const dates = userWeightData.map((entry) =>
          timestampToDate(entry.timestamp)
        );
        const weights = userWeightData.map((entry) => entry.value);
        setChartData({ dates, weights });
      } else {
        console.error(
          "User weights data is not available",
          f_user_weights.data
        );
      }
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const onNextMark = () => {
    setShotTaken(true);
    setShotTakenTime(getCurrentTime());
  };

  const onMarkAsTaken = async () => {
    setLoading(true);
    try {
      await mutationShotsInfoTimes({
        uid,
        shot_name: nextShot.shot_name,
        last_shot_date: nextShot.next_shot_date,
        time: getCurrentTime(),
        shoted: true,
      });
      await fetchData();
      setShotTaken(false); // Set shotTaken to true when the shot is marked as taken
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <ManagementLayout>
      <div
        className={
          activeTab === "summary"
            ? "bg-gradient-to-b from-[#50B498] via-[#FEB389] to-[#FFFFFF] h-screen"
            : "bg-gray-100"
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
            <h2 className="text-xl font-bold mb-4 ml-4 flex items-center justify-between w-full">
              <span>Weight Management</span>
              <img
                src="static/img/share-ico.svg"
                alt="share"
                className="ml-auto mr-10"
              ></img>
            </h2>
          )}
          <div
            className={`${
              activeTab === "summary" ? "" : "bg-white"
            } rounded-lg p-4 w-full`}
          >
            {activeTab === "summary" && (
              <Summary
                daysLeft={nextShot.days_left}
                currentWeight={currentWeight}
                startWeight={startWeight}
                dreamWeight={dreamWeight}
                lastRead={lastRead}
                sinceStart={sinceStart}
                openMedicineModal={openMedicineModal}
                openModal={openModal}
                seeMore={seeMore}
                onMarkAsTaken={onMarkAsTaken}
                onNextMark={onNextMark}
                shotTaken={shotTaken}
                shotTakenTime={shotTakenTime}
              />
            )}
            {activeTab === "weight" && (
              <CurrentWeight
                currentWeight={currentWeight}
                startWeight={startWeight}
                dreamWeight={dreamWeight}
                chartData={chartData}
                weightData={weightData}
                lastRead={lastRead}
                columns={columns}
                openModal={openModal}
              />
            )}

            {activeTab === "shots" && (
              <ShotsManagement
                daysLeft={nextShot.daysLeft}
                nextShot={nextShot}
                medLog={medLog}
                shotscolumns={shotsColumns}
                openMedicineModal={openMedicineModal}
                currentWeight={currentWeight}
                startWeight={startWeight}
                dreamWeight={dreamWeight}
                openShotModal={openShotModal}
                onMarkAsTaken={onMarkAsTaken}
                onNextMark={onNextMark}
                shotTaken={shotTaken}
                shotTakenTime={shotTakenTime}
              />
            )}
            {activeTab === "more" && (
              <MoreTabContent
                onConfirm={handleConfirm}
                medicinesList={medicinesList}
                handleMedicineConfirm={handleMedicineConfirm}
              />
            )}
          </div>
        </div>

        <UpdateWeightModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          startWeight={currentWeight}
          setStartWeight={setCurrentWeight}
          onConfirm={handleConfirm}
          title={"Update today Weight"}
        />
        {medicinesList.length > 0 && (
          <>
            <AddMedicineModal
              medicinesList={medicinesList}
              isOpen={isAddMedicineModalOpen}
              onRequestClose={closeMedicineModal}
              onConfirm={handleMedicineConfirm}
            />
            <AddShotModal
              medicinesList={medicinesList}
              isOpen={isAddShotModalOpen}
              onRequestClose={closeShotModal}
              onConfirm={handleShotConfirm}
            />
          </>
        )}
      </div>
    </ManagementLayout>
  );
};

export default Management;
