import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import UserInfoScreen from "./pages/UserInfoScreen/UserInfoScreen";
import ReminderScreen from "./pages/ReminderScreen/ReminderScreen";
import WeightLossScreen from "./pages/WeightLossScreen/WeightLossScreen";
import CommunityScreen from "./pages/CommunityScreen/CommunityScreen";
import HealthConnectScreen from "./pages/HealthConnectScreen/HealthConnectScreen";
import StartWeightScreen from "./pages/StartWeightScreen/StartWeightScreen";
import CurrentWeightScreen from "./pages/CurrentWeightScreen/CurrentWeightScreen";
import DreamWeightScreen from "./pages/DreamWeightScreen/DreamWeightScreen";
import CheckCurrentWeightScreen from "./pages/CheckCurrentWeightScreen/CheckCurrentWeightScreen";
import StartTodayWeightScreen from "./pages/StartTodayWeightScreen/StartTodayWeightScreen";
import MedicineNameScreen from "./pages/MedicineNameScreen/MedicineNameScreen";
import DosageScreen from "./pages/DosageScreen/DosageScreen";
import LastShotScreen from "./pages/LastShotScreen/LastShotScreen";
import ShotsFrequencyScreen from "./pages/ShotsFrequencyScreen/ShotsFrequencyScreen";
import LastReminderScreen from "./pages/LastReminderScreen/LastReminderScreen";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Management from "./pages/Management/Management";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import { UserProvider } from "./contexts/UserContext";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import { GlobalProvider } from "./contexts/GlobalContext";

const App = () => (
  <GlobalProvider>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<WelcomeScreen />} />
          <Route path="/user-info" element={<UserInfoScreen />} />
          <Route path="/reminder" element={<ReminderScreen />} />
          <Route path="/weight-loss" element={<WeightLossScreen />} />
          <Route path="/community" element={<CommunityScreen />} />
          <Route path="/health-connect" element={<HealthConnectScreen />} />
          <Route path="/start-weight" element={<StartWeightScreen />} />
          <Route path="/current-weight" element={<CurrentWeightScreen />} />
          <Route path="/dream-weight" element={<DreamWeightScreen />} />
          <Route
            path="/check-current-weight"
            element={<CheckCurrentWeightScreen />}
          />
          <Route
            path="/start-today-weight"
            element={<StartTodayWeightScreen />}
          />
          <Route path="/medicine-name" element={<MedicineNameScreen />} />
          <Route path="/medicine-dosage" element={<DosageScreen />} />
          <Route path="/last-shot" element={<LastShotScreen />} />
          <Route path="/shots-frequency" element={<ShotsFrequencyScreen />} />
          <Route path="/last-reminder" element={<LastReminderScreen />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/management" element={<Management />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </Router>
    </UserProvider>
  </GlobalProvider>
);

export default App;
