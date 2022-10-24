import styled from "styled-components";
import TopBar from "../../components/TopBar";
import { useAuth } from "../../providers/auth";
import LoadingPage from "../../assets/styles/LoadingPage";
import Menu from "../../components/Menu";
import URL from "../../constants/url";
import { useEffect, useState } from "react";
import { useHabits } from "../../providers/habits";
import axios from "axios";
import AddHabit from "../../components/AddHabit";
import Habit from "../../components/Habit";

function HabitsPage() {
  const { userLogin } = useAuth();
  const { userHabits, setUserHabits } = useHabits();
  const [addHabitButton, setAddHabitButton] = useState(false);
  const [days, setDays] = useState([]);
  const [formNewHabit, setFormNewHabit] = useState({ name: "", days: [] });
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (userLogin !== undefined) {
      const promise = axios.get(`${URL}/habits`, {
        headers: {
          Authorization: `Bearer ${userLogin.token}`,
        },
      });

      promise.then((response) => {
        setUserHabits(response.data);
      });
      promise.catch((error) => console.log(error.response));
    }
  }, [userLogin, update]);

  if (userLogin === undefined || userHabits === undefined) {
    return (
      <PageContainer>
        <LoadingPage />
      </PageContainer>
    );
  }

  function addHabit() {
    setAddHabitButton(true);
  }

  return (
    <PageContainer>
      <TopBar />
      <Heading>
        <Title>Meus hábitos</Title>
        <AddButton onClick={addHabit} data-identifier="create-habit-btn">+</AddButton>
      </Heading>
      {addHabitButton === true && (
        <AddHabit
          setAddHabitButton={setAddHabitButton}
          userLogin={userLogin}
          days={days}
          setDays={setDays}
          formNewHabit={formNewHabit}
          setFormNewHabit={setFormNewHabit}
          update={update}
          setUpdate={setUpdate}
        />
      )}
      {userHabits.length === 0 ? (
        <Report>
          <p data-identifier="no-habit-message">
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </Report>
      ) : (
        <HabitsContainer>
          {userHabits.map((u, id) => (
            <Habit key={id} habit={u} update={update} setUpdate={setUpdate} />
          ))}
        </HabitsContainer>
      )}
      <Menu />
    </PageContainer>
  );
}

export default HabitsPage;

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
  margin-right: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #126ba5;
  margin-bottom: 5px;
`;

const AddButton = styled.button`
  width: 40px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 27px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HabitsContainer = styled.div`
  max-height: 400px;
  align-items: center;
  margin-top: 20px;
  margin-left: 17px;
  overflow-y: auto;
  margin-bottom:110px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Report = styled.div`
  margin-left: 17px;
  margin-top: 28px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #666666;
`;
