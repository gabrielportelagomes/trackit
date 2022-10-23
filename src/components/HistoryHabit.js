import styled from "styled-components";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

function HistoryHabit({ habit }) {

  function habitBackground(done) {
    if(done) {
      return "#8fc549"
    } else {
      return "#ff1e00"
    }
  }

  return (
    <Habit>
      <HabitInfos>
        <h3>{habit.name}</h3>
        <div>
          {habit.done ? <p>Hábito concluído!</p> : <p>Hábito não realizado!</p>}
        </div>
      </HabitInfos>
      {habit.done ? (
        <Icon background={habitBackground(habit.done)}>
          <FaRegCheckCircle />
        </Icon>
      ) : (
        <Icon background={habitBackground(habit.done)}>
          <FaRegTimesCircle />
        </Icon>
      )}
    </Habit>
  );
}

export default HistoryHabit;

const Habit = styled.div`
  width: 340px;
  min-height: 94px;
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const HabitInfos = styled.div`
  h3 {
    max-width: 208px;
    overflow-wrap: break-word;
    word-wrap: break-word;
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
    margin-bottom: 26px;
    p {
      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      font-size: 13px;
      color: #666666;
    }
  }
`;

const Icon = styled.div`
  width: 69px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  border-radius: 5px;
  margin-right: 13px;
  font-size: 50px;
  color: #ffffff;
`;
