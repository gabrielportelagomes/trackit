import { createContext, useContext, useState } from "react";

const HabitsContext = createContext({});

export const HabitsProvider = (props) => {
  const [userHabits, setUserHabits] = useState(undefined);

  return (
    <HabitsContext.Provider value={{ userHabits, setUserHabits }}>
      {props.children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
