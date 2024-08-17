import React from "react";
import WeightInputScreen from "../../component/WeightInputScreen/WeightInputScreen";
import { useNavigate } from "react-router-dom";

function CurrentWeightScreen() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/dream-weight");
  };
  const handleSkip = () => {
    navigate("/dream-weight");
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <WeightInputScreen
      title="What's your current progress?"
      subtitle="Please tell me what is your weight for today"
      placeholder="Current Weight"
      buttonText="Done!"
      initialValue="80"
      onNext={handleNext}
      onSkip={handleSkip}
      onBack={handleBack}
    />
  );
}

export default CurrentWeightScreen;
