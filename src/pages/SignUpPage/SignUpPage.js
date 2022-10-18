import { useState } from "react";
import styled from "styled-components";
import trackit from "../../assets/images/trackit.png";
import Loading from "../../assets/styles/ThreeDots";

function SignUpPage() {
  const [signUpButton, setSignUpButton] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function handleForm(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function signUp(event) {
    event.preventDefault();
    alert("registrado");
  }

  return (
    <PageContainer>
      <Logo>
        <img src={trackit} alt="TrackIt" />
        <h1>TrackIt</h1>
      </Logo>
      <FormContainer onSubmit={signUp}>
        <input
          name="email"
          value={form.email}
          onChange={handleForm}
          type="email"
          placeholder="email"
          disabled={signUpButton}
          required
        ></input>
        <input
          name="password"
          value={form.password}
          onChange={handleForm}
          type="password"
          placeholder="senha"
          disabled={signUpButton}
          required
        ></input>
        <input
          name="name"
          value={form.name}
          onChange={handleForm}
          type="text"
          placeholder="nome"
          disabled={signUpButton}
          required
        ></input>
        <input
          name="image"
          value={form.image}
          onChange={handleForm}
          type="url"
          placeholder="foto"
          disabled={signUpButton}
          required
        ></input>
        {signUpButton === false ? (
          <button disabled={signUpButton}>Cadastrar</button>
        ) : (
          <button disabled={signUpButton}>
            <Loading />
          </button>
        )}
      </FormContainer>
      <SingInText>Já tem uma conta? Faça login!</SingInText>
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

const SingInText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #52b6ff;
  text-decoration: underline;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
