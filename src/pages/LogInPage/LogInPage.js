import { useState } from "react";
import styled from "styled-components";
import trackit from "../../assets/images/trackit.png";
import Loading from "../../assets/styles/ThreeDots";

function LogInPage() {
  const [logInButton, setLogInButton] = useState(false)
  return (
    <PageContainer>
      <Logo>
        <img src={trackit} alt="TrackIt" />
        <h1>TrackIt</h1>
      </Logo>
      <input placeholder="email" disabled={logInButton}></input>
      <input placeholder="senha" disabled={logInButton}></input>
      {logInButton === false ?
        <button disabled={logInButton}>Entrar</button> :
      <button disabled={logInButton}>
        <Loading />
      </button>
      }
      <SingInText>Não tem uma conta? Cadastre-se!</SingInText>
    </PageContainer>
  );
}

export default LogInPage;

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
