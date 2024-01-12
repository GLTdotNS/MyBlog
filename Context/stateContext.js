import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isPopupOpen,
        setPopupOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
