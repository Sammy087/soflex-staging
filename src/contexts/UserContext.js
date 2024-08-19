import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [uid, setUid] = useState("8Qw8d1u3HNgz6yXXTw694FD8Vc62");

  return (
    <UserContext.Provider value={{ username, setUsername, uid, setUid }}>
      {children}
    </UserContext.Provider>
  );
};
