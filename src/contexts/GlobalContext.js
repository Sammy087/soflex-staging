import { createContext, useMemo, useState } from "react";
import { mutationUserWeights } from "../firebaseApis/healthApis";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userWeights, setUserWeights] = useState(null);
  const [userShotsInfo, setUserShotsInfo] = useState(null);
  const [shots, setShots] = useState({});
  const [loading, setLoading] = useState(false);
  const memorizeValues = useMemo(() => {
    return {
      userWeights,
      setUserWeights,
      userShotsInfo,
      setUserShotsInfo,
      mutationUserWeights,
      shots,
      setShots,
      loading,
      setLoading,
    };
  }, [
    userWeights,
    setUserWeights,
    userShotsInfo,
    setUserShotsInfo,
    shots,
    setShots,
    loading,
    setLoading,
  ]);
  return (
    <GlobalContext.Provider value={memorizeValues}>
      {children}
    </GlobalContext.Provider>
  );
};
