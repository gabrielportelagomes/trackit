import { createContext, useContext, useState } from "react";

const ProgressContext = createContext({});

export const ProgressProvider = (props) => {
  const [totalOfHabits, setTotalOfHabits] = useState(0);
  const [habitsPerformed, setHabitsPerformed] = useState(0);
  const [change, setChange] = useState(false);

  return (
    <ProgressContext.Provider
      value={{
        totalOfHabits,
        setTotalOfHabits,
        habitsPerformed,
        setHabitsPerformed,
        change,
        setChange,
      }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
