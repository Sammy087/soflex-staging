import { createContext, useMemo, useState } from "react";
import { mutationUserWeights } from "../firebaseApis/healthApis";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userWeights, setUserWeights] = useState(null);
  const [userShotsInfo, setUserShotsInfo] = useState(null);
  const memorizeValues = useMemo(() => {
    return {
      userWeights,
      setUserWeights,
      userShotsInfo,
      setUserShotsInfo,
      mutationUserWeights,
    };
  }, [
    userWeights,
    setUserWeights,
    userShotsInfo,
    setUserShotsInfo,
  ]);
  return (
    <GlobalContext.Provider value={memorizeValues}>
      {children}
    </GlobalContext.Provider>
  );
};
