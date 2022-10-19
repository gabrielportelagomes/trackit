import { MutatingDots } from "react-loader-spinner";
import styled from "styled-components";

function LoadingPage() {
  return (
    <LoadingContainer>
      <MutatingDots
        height="100"
        width="100"
        color="#126BA5"
        secondaryColor="#52B6FF"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p>Carregando...</p>
    </LoadingContainer>
  );
}

export default LoadingPage;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
  }
`;
