import React, { createContext, useState } from "react";

export const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};
