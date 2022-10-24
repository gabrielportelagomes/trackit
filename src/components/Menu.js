import styled from "styled-components";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useProgress } from "../providers/progress";
import { useAuth } from "../providers/auth";
import axios from "axios";
import { useEffect } from "react";
import URL from "../constants/url";

function Menu() {
  const {
    totalOfHabits,
    setTotalOfHabits,
    habitsPerformed,
    setHabitsPerformed,
    change,
  } = useProgress();
  const percentage = parseInt(
    ((habitsPerformed / totalOfHabits) * 100).toFixed(0)
  );
  const { userLogin } = useAuth();

  useEffect(() => {
    if (userLogin !== undefined) {
      axios
        .get(`${URL}/habits/today`, {
          headers: {
            Authorization: `Bearer ${userLogin.token}`,
          },
        })
        .then((response) => {
          setTotalOfHabits(response.data.length);
          habitCompleted(response.data);
        })
        .catch((error) => console.log(error.response));
    }
  }, [userLogin, change]);

  function habitCompleted(habits) {
    let newValue = 0;
    habits.forEach((habit) => {
      if (habit.done) {
        newValue++;
      }
    });
    setHabitsPerformed(newValue);
  }

  return (
    <MenuContainer>
      <Link to="/habitos">
        <HabitOption data-identifier="habit-page-action">Hábitos</HabitOption>
      </Link>
      <ProgressContainer>
        <Link to="/hoje">
          <CircularProgressbarWithChildren
            value={percentage}
            background
            backgroundPadding={6}
            width="81px"
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          >
            <TextCicularProgress>Hoje</TextCicularProgress>
          </CircularProgressbarWithChildren>
        </Link>
      </ProgressContainer>
      <Link to="/historico">
        <HistoryOption data-identifier="historic-page-action">Histórico</HistoryOption>
      </Link>
    </MenuContainer>
  );
}

export default Menu;

const MenuContainer = styled.div`
  width: 375px;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const HabitOption = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #52b6ff;
  text-decoration: none;
  margin-left: 36px;
`;

const HistoryOption = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #52b6ff;
  text-decoration: none;
  margin-right: 31px;
`;

const TextCicularProgress = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
`;

const ProgressContainer = styled.div`
  width: 91px;
  position: absolute;
  left: calc(50% - 40.5px);
  bottom: 10px;
`;
