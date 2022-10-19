import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import trackit from "../../assets/images/trackit.png";
import Loading from "../../assets/styles/ThreeDots";
import URL from "../../constants/url";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

function SignUpPage() {
  const [signUpButton, setSignUpButton] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  function handleForm(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function closeModal() {
    setIsOpen(false);
    setSignUpButton(false);
  }

  function signUp(event) {
    event.preventDefault();
    setSignUpButton(true);

    const promise = axios.post(`${URL}/auth/sign-up`, form);
    promise.then(() => navigate("/"));
    promise.catch((error) => {
      setIsOpen(true);
      setError(error.response.data.message);
    });
  }

  return (
    <PageContainer>
      <Logo>
        <img src={trackit} alt="TrackIt" />
        <h1>TrackIt</h1>
      </Logo>
      <FormContainer onSubmit={signUp}>
        <Input
          name="email"
          value={form.email}
          onChange={handleForm}
          type="email"
          placeholder="email"
          disabled={signUpButton}
          required
        ></Input>
        <Input
          name="password"
          value={form.password}
          onChange={handleForm}
          type="password"
          placeholder="senha"
          disabled={signUpButton}
          required
        ></Input>
        <Input
          name="name"
          value={form.name}
          onChange={handleForm}
          type="text"
          placeholder="nome"
          disabled={signUpButton}
          required
        ></Input>
        <Input
          name="image"
          value={form.image}
          onChange={handleForm}
          type="url"
          placeholder="foto"
          disabled={signUpButton}
          required
        ></Input>
        {signUpButton === false ? (
          <Button type="submit" disabled={signUpButton}>
            Cadastrar
          </Button>
        ) : (
          <Button disabled={signUpButton}>
            <Loading />
          </Button>
        )}
      </FormContainer>
      <Link to="/">
        <LogInText>Já tem uma conta? Faça login!</LogInText>
      </Link>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AlertConteiner>
          <AlertText>{error}</AlertText>
          <Close onClick={closeModal}>X</Close>
        </AlertConteiner>
      </Modal>
    </PageContainer>
  );
}

export default SignUpPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  margin-top: 68px;
  margin-bottom: 33px;
  img {
    width: 155px;
    height: 92px;
  }
  h1 {
    font-family: "Playball", cursive;
    font-weight: 400;
    font-size: 69px;
    color: #126ba5;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 303px;
  height: 45px;
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  margin-bottom: 6px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  padding: 11px;
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  &::placeholder {
    color: #dbdbdb;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    -webkit-text-fill-color: #000000 !important;
  }
`;

const Button = styled.button`
  width: 303px;
  height: 45px;
  border: solid 1px #52b6ff;
  border-radius: 5px;
  margin-bottom: 25px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 21px;
  color: #ffffff;
  background-color: #52b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.disabled ? "0.7" : "1")};
  &:hover {
    cursor: pointer;
  }
`;

const LogInText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #52b6ff;
  text-decoration: underline;
`;

const AlertConteiner = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;

const AlertText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
`;

const Close = styled.button`
  width: 30px;
  height: 30px;
  border: solid 1px #52b6ff;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 21px;
  color: #ffffff;
  background-color: #52b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  content: {
    top: "10%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
