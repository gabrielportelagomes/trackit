import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import URL from "../constants/url";
import WEEKDAYS from "../constants/weekdays";
import Loading from "../assets/styles/Loading";

function AddHabit({
  setAddHabitButton,
  userLogin,
  days,
  setDays,
  formNewHabit,
  setFormNewHabit,
  update,
  setUpdate,
}) {
  const [addButton, setAddButton] = useState(false);

  function cancelAdd() {
    if (!addButton) {
      setAddHabitButton(false);
    }
  }

  function handleForm(event) {
    const { name, value } = event.target;
    setFormNewHabit({ ...formNewHabit, [name]: value });
  }

  function saveHabit(event) {
    event.preventDefault();
    if (days.length > 0) {
      setAddButton(true);
      const body = { ...formNewHabit, days: days };
      setFormNewHabit(body);

      axios
        .post(`${URL}/habits`, body, {
          headers: {
            Authorization: `Bearer ${userLogin.token}`,
          },
        })
        .then(() => {
          setFormNewHabit({ name: "", days: [] });
          setDays([]);
          setAddHabitButton(false);
          setUpdate(!update);
        })
        .catch((error) => {
          alert(error.response.data.message);
          setAddButton(false);
        });
    } else {
      alert("Selecione ao menos um dia!");
    }
  }

  function selectDay(id) {
    if (!addButton) {
      if (days.includes(id)) {
        const newList = days.filter((d) => {
          return d !== id;
        });
        setDays(newList);
      } else {
        const newList = [...days, id];
        setDays(newList);
      }
    }
  }

  function dayCursor(addButton) {
    if (addButton) {
      return "initial";
    } else {
      return "pointer";
    }
  }

  return (
    <FormAddHabit onSubmit={saveHabit}>
      <NewHabit
        name="name"
        value={formNewHabit.name}
        onChange={handleForm}
        type="text"
        placeholder="nome do hábito"
        disabled={addButton}
        required
      ></NewHabit>
      <Weekdays>
        {WEEKDAYS.map((w, id) => (
          <Weekday
            key={id}
            id={id}
            onClick={() => selectDay(id)}
            includes={days.includes(id)}
            cursor={dayCursor(addButton)}
          >
            {w}
          </Weekday>
        ))}
      </Weekdays>
      <OptionsButtons>
        <p onClick={cancelAdd}>Cancelar</p>
        {addButton === false ? (
          <SaveButton type="submit" disabled={addButton}>
            Salvar
          </SaveButton>
        ) : (
          <SaveButton disabled={addButton}>
            <Loading />
          </SaveButton>
        )}
      </OptionsButtons>
    </FormAddHabit>
  );
}

export default AddHabit;

const FormAddHabit = styled.form`
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-left: 17px;
  margin-top: 20px;
`;

const NewHabit = styled.input`
  width: 303px;
  height: 45px;
  margin-left: 19px;
  margin-top: 18px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  padding: 11px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  &::placeholder {
    color: #dbdbdb;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    -webkit-text-fill-color: #000000 !important;
  }
`;

const Weekdays = styled.div`
  display: flex;
  margin-left: 19px;
  margin-top: 8px;
`;

const Weekday = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  background-color: ${(props) => (props.includes ? "#cfcfcf" : "#ffffff")};
  border: ${(props) => (props.includes ? "none" : "1px solid #d4d4d4")};
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => (props.includes ? "#ffffff" : "#dbdbdb")};
  cursor: ${(props) => props.cursor};
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
    cursor: pointer;
  }
`;

const SaveButton = styled.button`
  width: 84px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #52b6ff;
  opacity: ${(props) => (props.disabled ? "0.7" : "1")};
  border: none;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};
`;
