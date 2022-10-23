import { createContext, useContext, useState } from "react";

const HistoryDayContext = createContext({});

export const HistoryDayProvider = (props) => {
  const [historyDay, setHistoryDay] = useState({});

  return (
    <HistoryDayContext.Provider value={{ historyDay, setHistoryDay }}>
      {props.children}
    </HistoryDayContext.Provider>
  );
};

export const useHistoryDay = () => useContext(HistoryDayContext);
