import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { GlobalContext } from "./GlobalContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { setAllowed } = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [auth, setAuth] = useState(null);
  const [uid, setUid] = useState();

  useEffect(() => {
    const sessionUid = sessionStorage.getItem("uid");
    if (uid === sessionUid) setAllowed(true);
  }, [uid, setAllowed]);

  const memorizedValues = useMemo(() => {
    return { username, setUsername, uid, setUid, auth, setAuth };
  }, [username, setUsername, uid, setUid, auth, setAuth]);

  return (
    <UserContext.Provider value={memorizedValues}>
      {children}
    </UserContext.Provider>
  );
};
