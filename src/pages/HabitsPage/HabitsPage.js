import styled from "styled-components";
import TopBar from "../../components/TopBar";
import { useAuth } from "../../providers/auth";
import LoadingPage from "../../assets/styles/LoadingPage";
import Menu from "../../components/Menu";

function HabitsPage() {
  const { userLogin } = useAuth();

  if (userLogin === undefined) {
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
        <Title>Meus hábitos</Title>
        <AddButton>+</AddButton>
      </Heading>
      <HabitsContainer>
        {/* <Habit>
          <h3>Ler 1 capítulo de livro</h3>
          <div>
            <p>D</p>
            <p>S</p>
            <p>T</p>
            <p>Q</p>
            <p>Q</p>
            <p>S</p>
            <p>S</p>
          </div>
        </Habit> */}
       {/*  <AddHabit>
          <NewHabit placeholder="nome do hábito"></NewHabit>
          <Weekdays>
            <Weekday>D</Weekday>
            <Weekday>S</Weekday>
            <Weekday>T</Weekday>
            <Weekday>Q</Weekday>
            <Weekday>Q</Weekday>
            <Weekday>S</Weekday>
            <Weekday>S</Weekday>
          </Weekdays>
          <OptionsButtons>
            <p>Cancelar</p>
            <SaveButton>Salvar</SaveButton>
          </OptionsButtons>
        </AddHabit> */}
      </HabitsContainer>
      <Report>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Report>
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
  /* display: none; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Habit = styled.div`
  width: 340px;
  height: 94px;
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  h3 {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    margin-left: 15px;
    margin-top: 13px;
  }
  div {
    display: flex;
    margin-left: 14px;
    margin-top: 8px;
    p {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 4px;
      background-color: #ffffff;
      border: 1px solid #d4d4d4;
      border-radius: 5px;
      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      font-size: 20px;
      color: #dbdbdb;
    }
  }
`;

const AddHabit = styled.div`
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
`;

const NewHabit = styled.input`
  width: 303px;
  height: 45px;
  margin-left: 19px;
  margin-top: 18px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  padding: 11px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  &::placeholder {
    color: #dbdbdb;
  }
`;

const Weekdays = styled.div`
  display: flex;
  margin-left: 19px;
  margin-top: 8px;
`;

const Weekday = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 4px;
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #dbdbdb;
  cursor: pointer;
`;

const OptionsButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 29px;
  margin-right: 16px;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #52b6ff;
    margin-right: 23px;
  }
`;

const SaveButton = styled.button`
  width: 84px;
  height: 35px;
  background-color: #52b6ff;
  border: none;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
`;

const Report = styled.div`
  margin-left: 17px;
  margin-top: 28px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #666666;
`;
