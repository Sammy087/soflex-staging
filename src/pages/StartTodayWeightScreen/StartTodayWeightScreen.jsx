import React from "react";
import WeightInputScreen from "../../component/WeightInputScreen/WeightInputScreen";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../AppConstants";

function StartTodayWeightScreen() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(Paths.CURRENT_WEIGHT);
  };
  const handleSkip = () => {
    navigate(Paths.CURRENT_WEIGHT);
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <WeightInputScreen
      title="I need to know your weight to help you track the progress!"
      subtitle="Please enter your start weight"
      placeholder="Start Weight"
      buttonText="Done!"
      initialValue="102"
      onNext={handleNext}
      onSkip={handleSkip}
      onBack={handleBack}
    />
  );
}

export default StartTodayWeightScreen;
