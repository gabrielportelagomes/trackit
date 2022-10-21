import axios from "axios";
import styled from "styled-components";
import URL from "../constants/url";
import WEEKDAYS from "../constants/weekdays";

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
  function cancelAdd() {
    setAddHabitButton(false);
  }

  function handleForm(event) {
    const { name, value } = event.target;
    setFormNewHabit({ ...formNewHabit, [name]: value });
  }

  function saveHabit(event) {
    event.preventDefault();
    if (days.length > 0) {
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
        .catch((error) => console.log(error.response.data.message));
    } else {
      alert("Selecione ao menos um dia!");
    }
  }

  function selectDay(id) {
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

  return (
    <FormAddHabit onSubmit={saveHabit}>
      <NewHabit
        name="name"
        value={formNewHabit.name}
        onChange={handleForm}
        type="text"
        placeholder="nome do hábito"
        required
      ></NewHabit>
      <Weekdays>
        {WEEKDAYS.map((w, id) => (
          <Weekday
            key={id}
            id={id}
            onClick={() => selectDay(id)}
            includes={days.includes(id)}
          >
            {w}
          </Weekday>
        ))}
      </Weekdays>
      <OptionsButtons>
        <p onClick={cancelAdd}>Cancelar</p>
        <SaveButton type="submit">Salvar</SaveButton>
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
    cursor: pointer;
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
  cursor: pointer;
`;
