import styled from "styled-components";
import WEEKDAYS from "../constants/weekdays";
import { IoTrashOutline } from "react-icons/io5";
import URL from "../constants/url";
import axios from "axios";
import { useAuth } from "../providers/auth";

function Habit({ habit, update, setUpdate }) {
  const { days, id, name } = habit;
  const { userLogin } = useAuth();

  function dayBackground(id) {
    if (days.includes(id)) {
      return "#cfcfcf";
    } else {
      return "#ffffff";
    }
  }

  function dayColor(id) {
    if (days.includes(id)) {
      return "#ffffff";
    } else {
      return "#dbdbdb";
    }
  }

  function deleteHabit() {
    const confirmDelete = window.confirm("Confirme");
    if (confirmDelete) {
      axios
        .delete(`${URL}/habits/${id}`, {
          headers: {
            Authorization: `Bearer ${userLogin.token}`,
          },
          data: {
            id: id,
          },
        })
        .then(() => {
          setUpdate(!update);
        })
        .catch((error) => console.log(error.response.data.message));
    }
  }

  return (
    <HabitContainer>
      <h3 data-identifier="habit-name">{name}</h3>
      <Weekdays>
        {WEEKDAYS.map((w, id) => (
          <Weekday
            key={id}
            id={id}
            background={dayBackground(id)}
            color={dayColor(id)}
          >
            {w}
          </Weekday>
        ))}
      </Weekdays>
      <Delete>
        <IoTrashOutline onClick={deleteHabit} data-identifier="delete-habit-btn"/>
      </Delete>
    </HabitContainer>
  );
}

export default Habit;

const HabitContainer = styled.div`
  width: 340px;
  min-height: 91px;
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  h3 {
    max-width: 234px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    margin-left: 15px;
    margin-top: 13px;
  }
`;

const Weekdays = styled.div`
  display: flex;
  margin-left: 19px;
  margin-top: 8px;
  margin-bottom: 15px;
`;

const Weekday = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 4px;
  background-color: ${(props) => props.background};
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => props.color};
`;

const Delete = styled.div`
  font-size: 15px;
  color: #666666;
  position: absolute;
  right: 10px;
  top: 11px;
  cursor: pointer;
`;
