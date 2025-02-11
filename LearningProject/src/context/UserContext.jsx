import React, { createContext } from "react";

// 6:
export const DataContext = createContext();

//4:
const UserContext = ({ children }) => {
    const userName = "Rajesh Pal"
  return (
    //7:
    <DataContext.Provider value={userName}>
      {/* 5: */}
      {children}
    </DataContext.Provider>

    //8: go to App.jsx
  );
};

export default UserContext;
