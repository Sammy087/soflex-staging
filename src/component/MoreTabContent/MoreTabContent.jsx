import React, { useState } from "react";
import MeasurementSystemModal from "../MeasurementSystemModal/MeasurementSystemModal";
import AddMedicineModal from "../AddMedicineModal/AddMedicineModal";
import UpdateWeightModal from "../UpdateWeightModal/UpdateWeightModal";
import { useNavigate } from "react-router-dom";
import ContactUsModal from "../ContactUsModal/ContactUsModal";
import RateUsModal from "../RateUsModal/RateUsModal";

const MoreTabContent = () => {
  const [isMeasurementModalOpen, setIsMeasurementModalOpen] = useState(false);
  const [isAddMedicineModalOpen, setIsAddMedicineModalOpen] = useState(false);
  const [isUpdateWeightModalOpen, setIsUpdateWeightModalOpen] = useState(false);
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const [isRateUsModalOpen, setIsRateUsModalOpen] = useState(false);
  const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] =
    useState(false);
  const [isTermsOfUseModalOpen, setIsTermsOfUseModalOpen] = useState(false);
  const [startWeight, setStartWeight] = useState("70");
  const navigate = useNavigate();

  const openRateUsModal = () => setIsRateUsModalOpen(true);
  const closeRateUsModal = () => setIsRateUsModalOpen(false);

  const openContactUsModal = () => setIsContactUsModalOpen(true);
  const closeContactUsModal = () => setIsContactUsModalOpen(false);

  const openMeasurementModal = () => setIsMeasurementModalOpen(true);
  const closeMeasurementModal = () => setIsMeasurementModalOpen(false);

  const openAddMedicineModal = () => setIsAddMedicineModalOpen(true);
  const closeAddMedicineModal = () => setIsAddMedicineModalOpen(false);

  const openUpdateWeightModal = () => setIsUpdateWeightModalOpen(true);
  const closeUpdateWeightModal = () => setIsUpdateWeightModalOpen(false);

  const handleConfirm = () => {
    // Handle the confirm action (e.g., send the updated weight to the backend)
    closeUpdateWeightModal();
  };

  const handlePrivacyPolicyClick = () => {
    navigate("/privacy-policy");
  };

  const handleTermsOfUseClick = () => {
    navigate("/terms-of-use");
  };

  return (
    <div className="bg-white p-4 w-full">
      <div className="flex flex-col items-center">
        <img
          className="w-20 h-20 rounded-full"
          alt="Profile"
          src="path_to_profile_image"
        />
        <h2 className="text-xl font-bold mt-4">Maria Adams</h2>
      </div>
      <div className="mt-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <button
            className="w-full text-left py-2 border-b"
            onClick={() => navigate("/change-password")}
          >
            Change Password
          </button>
          <button
            className="w-full text-left py-2 border-b"
            onClick={openMeasurementModal}
          >
            Measurement system
          </button>
          <button
            className="w-full text-left py-2 border-b"
            onClick={openAddMedicineModal}
          >
            Edit shot schedule
          </button>
          <button
            className="w-full text-left py-2 border-b"
            onClick={openUpdateWeightModal}
          >
            Change weight goals
          </button>
          <button className="w-full text-left py-2 border-b">
            Health Connect
          </button>
          <div className="flex justify-between py-2 border-b">
            <span>Notifications</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <button
            className="w-full text-left py-2 border-b"
            onClick={openContactUsModal}
          >
            Contact us
          </button>
          <button
            className="w-full text-left py-2 border-b"
            onClick={openRateUsModal}
          >
            Rate Us
          </button>
          <button
            className="w-full text-left py-2 border-b"
            onClick={handlePrivacyPolicyClick}
          >
            Privacy policy
          </button>
          <button
            className="w-full text-left py-2 border-b"
            onClick={handleTermsOfUseClick}
          >
            Terms of use
          </button>
          <button className="w-full text-left py-2 text-red-500">
            Sign out
          </button>
        </div>
      </div>
      <MeasurementSystemModal
        isOpen={isMeasurementModalOpen}
        onClose={closeMeasurementModal}
      />
      <AddMedicineModal
        isOpen={isAddMedicineModalOpen}
        onClose={closeAddMedicineModal}
      />
      <UpdateWeightModal
        isOpen={isUpdateWeightModalOpen}
        onRequestClose={closeUpdateWeightModal}
        startWeight={startWeight}
        setStartWeight={setStartWeight}
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
