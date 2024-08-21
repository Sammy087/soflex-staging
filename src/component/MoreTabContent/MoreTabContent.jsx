import React, { useContext, useState } from "react";
import MeasurementSystemModal from "../MeasurementSystemModal/MeasurementSystemModal";
import AddMedicineModal from "../AddMedicineModal/AddMedicineModal";
import UpdateWeightModal from "../UpdateWeightModal/UpdateWeightModal";
import { useNavigate } from "react-router-dom";
import ContactUsModal from "../ContactUsModal/ContactUsModal";
import RateUsModal from "../RateUsModal/RateUsModal";
import { Paths } from "../../AppConstants";
import { mutationUserWeights } from "../../firebaseApis/healthApis";
import { GlobalContext } from "../../contexts/GlobalContext";
import { UserContext } from "../../contexts/UserContext";
import Loading from "../../pages/Loading/Loading";

const MoreTabContent = ({ medicinesList, handleMedicineConfirm }) => {
  const [isMeasurementModalOpen, setIsMeasurementModalOpen] = useState(false);
  const [isAddMedicineModalOpen, setIsAddMedicineModalOpen] = useState(false);
  const [isUpdateWeightModalOpen, setIsUpdateWeightModalOpen] = useState(false);
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const [isRateUsModalOpen, setIsRateUsModalOpen] = useState(false);
  const [dreamWeight, setDreamWeight] = useState("70");
  const { uid } = useContext(UserContext);
  const { loading, setLoading } = useContext(GlobalContext);
  const navigate = useNavigate();

  const openRateUsModal = () => setIsRateUsModalOpen(true);
  const closeRateUsModal = () => setIsRateUsModalOpen(false);

  const openContactUsModal = () => setIsContactUsModalOpen(true);
  const closeContactUsModal = () => setIsContactUsModalOpen(false);

  const openMeasurementModal = () => setIsMeasurementModalOpen(true);
  const closeMeasurementModal = () => setIsMeasurementModalOpen(false);

  const openAddMedicineModal = () => setIsAddMedicineModalOpen(true);
  const closeAddMedicineModal = () => setIsAddMedicineModalOpen(false);

  const openUpdateWeightModal = () => {
    setIsUpdateWeightModalOpen(true);
  };
  const closeUpdateWeightModal = () => setIsUpdateWeightModalOpen(false);

  const handleConfirm = async () => {
    setLoading(true);
    await mutationUserWeights({
      uid,
      key: "dream_weight",
      value: dreamWeight,
    })
      .then((res) => {
        if (res.data.result) console.log(res.data.result);
      })
      .catch((err) => console.error(err));
    setLoading(false);
    closeUpdateWeightModal();
  };

  const handlePrivacyPolicyClick = () => {
    navigate(Paths.PRIVACY_POLICY);
  };

  const handleTermsOfUseClick = () => {
    navigate(Paths.TERMS_OF_USE);
  };

  const handleSignOut = () => {
    navigate(Paths.LOGIN);
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-white p-4 w-full">
      <div className="flex flex-col items-center">
        <img
          className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
          alt="Profile"
          src="static/img/avatar.svg"
        />
        <h2 className="text-xl font-bold mt-4">Maria Adams</h2>
      </div>
      <div className="mt-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <button
            className="w-full text-left py-2 border-b flex justify-between items-center"
            onClick={() => navigate(Paths.CHANGE_PASSWORD)}
          >
            <span>Change Password</span>
            <img src="static/img/right-arrow-green.svg" className="w-6 h-6" />
          </button>
          <button
            className="w-full text-left py-2 border-b flex justify-between items-center"
            onClick={openMeasurementModal}
          >
            <span>Measurement system</span>
            <img src="static/img/right-arrow-green.svg" className="w-6 h-6" />
          </button>
          <button
            className="w-full text-left py-2 border-b flex justify-between items-center"
            onClick={openAddMedicineModal}
          >
            <span>Edit shot schedule</span>
            <img src="static/img/right-arrow-green.svg" className="w-6 h-6" />
          </button>
          <button
            className="w-full text-left py-2 border-b flex justify-between items-center"
            onClick={openUpdateWeightModal}
          >
            <span>Change weight goals</span>
            <img src="static/img/right-arrow-green.svg" className="w-6 h-6" />
          </button>
          <button className="w-full text-left py-2 border-b flex justify-between items-center">
            <span>Health Connect</span>
            <img src="static/img/right-arrow-green.svg" className="w-6 h-6" />
          </button>
          <div className="flex justify-between items-center py-2 border-b">
            <span>Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#50B498] peer-focus:ring-4 peer-focus:ring-[#50B498]"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></div>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <button
            className="w-full text-left py-2 border-b flex justify-between items-center"
            onClick={openContactUsModal}
          >
            <span>Contact us</span>
            <img src="static/img/right-arrow-green.svg" className="w-6 h-6" />
          </button>
          <button
            className="w-full text-left py-2 border-b flex justify-between items-center"
            onClick={openRateUsModal}
          >
            <span>Rate Us</span>
            <img src="static/img/right-arrow-green.svg" className="w-6 h-6" />
          </button>
          <button
            className="w-full text-left py-2 border-b flex justify-between items-center"
            onClick={handlePrivacyPolicyClick}
          >
            <span>Privacy policy</span>
            <img src="static/img/right-arrow-green.svg" className="w-6 h-6" />
          </button>
          <button
            className="w-full text-left py-2 border-b flex justify-between items-center"
            onClick={handleTermsOfUseClick}
          >
            <span>Terms of use</span>
            <img src="static/img/right-arrow-green.svg" className="w-6 h-6" />
          </button>
          <button
            className="w-full text-left py-2 text-red-500 flex justify-between items-center"
            onClick={handleSignOut}
          >
            <span>Sign out</span>
            <img src="static/img/right-arrow-green.svg" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <MeasurementSystemModal
        isOpen={isMeasurementModalOpen}
        onClose={closeMeasurementModal}
      />
      {medicinesList.length > 0 && (
        <AddMedicineModal
          medicinesList={medicinesList}
          isOpen={isAddMedicineModalOpen}
          onRequestClose={closeAddMedicineModal}
          onConfirm={handleMedicineConfirm}
        />
      )}
      <UpdateWeightModal
        isOpen={isUpdateWeightModalOpen}
        onRequestClose={closeUpdateWeightModal}
        weight={dreamWeight}
        setWeight={setDreamWeight}
        onConfirm={handleConfirm}
        title={"Change Weight Goals"}
      />
      <ContactUsModal
        isOpen={isContactUsModalOpen}
        onClose={closeContactUsModal}
      />
      <RateUsModal isOpen={isRateUsModalOpen} onClose={closeRateUsModal} />
    </div>
  );
};

export default MoreTabContent;
