import styled from "styled-components";
import TopBar from "../../components/TopBar";
import { useAuth } from "../../providers/auth";
import LoadingPage from "../../assets/styles/LoadingPage";
import Menu from "../../components/Menu";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "../../constants/url";
import HabitToday from "../../components/HabitToday";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useProgress } from "../../providers/progress";

function TodayPage() {
  const { userLogin } = useAuth();
  const {
    totalOfHabits,
    setTotalOfHabits,
    habitsPerformed,
    setHabitsPerformed,
  } = useProgress();
  const [habitsToday, setHabitsToday] = useState(undefined);
  const [update, setUpdate] = useState(false);
  const today = dayjs().locale("pt-br").format("dddd, DD/MM");
  const day = today[0].toUpperCase() + today.substring(1);
  const percentage = parseInt(
    ((habitsPerformed / totalOfHabits) * 100).toFixed(0)
  );

  useEffect(() => {
    if (userLogin !== undefined) {
      axios
        .get(`${URL}/habits/today`, {
          headers: {
            Authorization: `Bearer ${userLogin.token}`,
          },
        })
        .then((response) => {
          setHabitsToday(response.data);
          setTotalOfHabits(response.data.length);
          habitCompleted(response.data);
        })
        .catch((error) => console.log(error.response));
    }
  }, [userLogin, update]);

  function habitCompleted(habits) {
    let newValue = 0;
    habits.forEach((habit) => {
      if (habit.done) {
        newValue++;
      }
    });
    setHabitsPerformed(newValue);
  }

  if (userLogin === undefined || habitsToday === undefined) {
    return (
      <PageContainer>
        <LoadingPage />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <TopBar />
      <Heading>
        <Day>
          {day}
        </Day>
        {percentage === 0 ? (
          <Progress color={percentage}>Nenhum hábito concluído ainda</Progress>
        ) : (
          <Progress color={percentage}>
            {percentage}% dos hábitos concluídos
          </Progress>
        )}
      </Heading>
      <HabitsContainer>
        {habitsToday.map((h, id) => (
          <HabitToday
            key={id}
            habit={h}
            update={update}
            setUpdate={setUpdate}
            habitsPerformed={habitsPerformed}
            setHabitsPerformed={setHabitsPerformed}
          />
        ))}
      </HabitsContainer>
      <Menu />
    </PageContainer>
  );
}

export default TodayPage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f2f2f2;
`;

const Heading = styled.div`
  margin-top: 98px;
  margin-left: 17px;
`;

const Day = styled.h2`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #126ba5;
  margin-bottom: 5px;
`;

const Progress = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: ${(props) => (props.color === 0 ? "#bababa" : "#8fc549")};
`;

const HabitsContainer = styled.div`
  align-items: center;
  margin-top: 28px;
  margin-bottom: 111px;
  margin-left: 18px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
