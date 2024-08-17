import React from "react";
import WeightInputScreen from "../../component/WeightInputScreen/WeightInputScreen";
import { useNavigate } from "react-router-dom";

function DreamWeightScreen() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleNext = () => {
    navigate("/medicine-name");
  };
  const handleSkip = () => {
    navigate("/medicine-name");
  };
  return (
    <WeightInputScreen
      title="And what weight you'd like to achieve?"
      subtitle="Please tell me what is your dream weight"
      placeholder="Dream Weight"
      buttonText="Done!"
      initialValue="80"
      onBack={handleBack}
      onNext={handleNext}
      onSkip={handleSkip}
    />
  );
}

export default DreamWeightScreen;
