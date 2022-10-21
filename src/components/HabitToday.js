import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../providers/auth";
import URL from "../constants/url";

function HabitToday({ habit, update, setUpdate }) {
  const { currentSequence, done, highestSequence, id, name } = habit;
  const { userLogin } = useAuth();

  function checkHabit() {
    if (!done) {
      const body = {};
      const config = {
        headers: {
          Authorization: `Bearer ${userLogin.token}`,
        },
      };

      axios
        .post(`${URL}/habits/${id}/check`, body, config)
        .then(() => {
          setUpdate(!update);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  }

  function checkBacground(done) {
    if (done) {
      return "#8fc549";
    } else {
      return "#ebebeb";
    }
  }

  return (
    <Habit>
      <h3>{name}</h3>
      <div>
        <p>
          Sequência atual: <Current>{currentSequence} dia</Current>{" "}
        </p>
        <p>
          Seu recorde: <Record>{highestSequence} dia</Record>{" "}
        </p>
      </div>
      <CheckButton onClick={checkHabit} background={checkBacground(done)}>
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
  background-color: ${(props) => props.background};
  border: ${(props) => (props.done ? "none" : "1px solid #e7e7e7")};
  border-radius: 5px;
  position: absolute;
  right: 13px;
  top: 13px;
  font-size: 35px;
  color: #ffffff;
  cursor: pointer;
`;
