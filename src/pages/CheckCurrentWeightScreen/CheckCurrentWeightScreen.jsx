import React from "react";
import WeightInputScreen from "../../component/WeightInputScreen/WeightInputScreen";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../AppConstants";

function CheckCurrentWeightScreen() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(Paths.START_TODAY_WEIGHT);
  };
  const handleSkip = () => {
    navigate(Paths.START_TODAY_WEIGHT);
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <WeightInputScreen
      title="Let's check if Health data is correct!"
      subtitle="If something is wrong, please edit your current weight data"
      placeholder="Current Weight"
      buttonText="Done!"
      initialValue="80"
      onNext={handleNext}
      onSkip={handleSkip}
      onBack={handleBack}
    />
  );
}

export default CheckCurrentWeightScreen;
