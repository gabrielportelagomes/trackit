import styled from "styled-components";
import TopBar from "../../components/TopBar";
import { useAuth } from "../../providers/auth";
import LoadingPage from "../../assets/styles/LoadingPage";
import Menu from "../../components/Menu";
import { useHistoryDay } from "../../providers/historyDay";
import HistoryHabit from "../../components/HistoryHabit";

function HistoryDayPage() {
  const { userLogin } = useAuth();
  const { historyDay } = useHistoryDay();

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
        <Title>Histórico do dia {historyDay.day}</Title>
      </Heading>
      <HistoryContainer>
        {historyDay.habits.map((habit, id) => (
          <HistoryHabit key={id} habit={habit} />
        ))}
      </HistoryContainer>
      <Menu />
    </PageContainer>
  );
}

export default HistoryDayPage;

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

const HistoryContainer = styled.div`
  max-height: 400px;
  margin-top: 20px;
  margin-left: 17px;
  margin-right: 18px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h2`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #126ba5;
  margin-bottom: 5px;
`;
