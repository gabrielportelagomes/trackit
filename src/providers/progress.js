import { createContext, useContext, useState } from "react";

const ProgressContext = createContext({});

export const ProgressProvider = (props) => {
  const [totalOfHabits, setTotalOfHabits] = useState(0);
  const [habitsPerformed, setHabitsPerformed] = useState(0);

  return (
    <ProgressContext.Provider value={{ totalOfHabits, setTotalOfHabits, habitsPerformed, setHabitsPerformed }}>
      {props.children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
