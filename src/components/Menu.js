import styled from "styled-components";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

function Menu({ percentage }) {
  return (
    <MenuContainer>
      <Link to="/habitos">
        <HabitOption>Hábitos</HabitOption>
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
        <HistoryOption>Histórico</HistoryOption>
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
