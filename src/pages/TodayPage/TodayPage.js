import styled from "styled-components";
import TopBar from "../../components/TopBar";
import { useAuth } from "../../providers/auth";
import LoadingPage from "../../assets/styles/LoadingPage";
import Menu from "../../components/Menu";

function TodayPage() {
  const { userLogin } = useAuth();
  const percentage = 0; /* mudar parâmetro */
  const check = false; /* mudar parâmetro */

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
        <Day>Dia da semana, XX/XX</Day>
        {percentage === 0 ? (
          <Progress color={percentage}>Nenhum hábito concluído ainda</Progress>
        ) : (
          <Progress color={percentage}>
            {percentage}% dos hábitos concluídos
          </Progress>
        )}
      </Heading>
      <HabitsContainer>
        <Habit>
          <h3>Ler 1 capítulo de livro</h3>
          <div>
            <p>
              Sequência atual: <Current check={check}>1 dia</Current>{" "}
              {/* tornar dinânico */}
            </p>
            <p>
              Seu recorde: <Record check={check}>1 dia</Record>{" "}
              {/* mudar parâmetro */}
            </p>
          </div>
          <CheckButton></CheckButton>
        </Habit>
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
    margin-left: 15px;
    margin-top: 7px;
    p {
      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      font-size: 13px;
      color: #666666;
    }
  }
`;

const Current = styled.span`
  color: ${(props) => (props.check === false ? "#666666" : "#8fc549")};
`;

const Record = styled.span`
  color: ${(props) =>
    props.check === false ? "#666666" : "#8fc549"}; /* mudar condição */
`;

const CheckButton = styled.button`
  width: 69px;
  height: 69px;
  background-color: #8fc549;
  border: none;
  border-radius: 5px;
  position: absolute;
  right: 13px;
  top: 13px;
`;
