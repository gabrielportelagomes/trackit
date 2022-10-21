import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

function HabitToday({ habit }) {
  const { currentSequence, done, highestSequence, id, name } = habit;

  return (
    <Habit>
      <h3>{name}</h3>
      <div>
        <p>
          Sequência atual:{" "}
          <Current /* check={check} */>{currentSequence} dia</Current>{" "}
          {/* tornar dinânico */}
        </p>
        <p>
          Seu recorde:{" "}
          <Record /* check={check} */>{highestSequence} dia</Record>{" "}
          {/* mudar parâmetro */}
        </p>
      </div>
      <CheckButton done={done}>
        <FaCheck />
      </CheckButton>
    </Habit>
  );
}

export default HabitToday;

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
  background-color: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  position: absolute;
  right: 13px;
  top: 13px;
  font-size: 35px;
  color: #ffffff;
  cursor: pointer;
`;
