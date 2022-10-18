import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScreenContainer>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </ScreenContainer>
    </BrowserRouter>
  );
}

export default App;

const ScreenContainer = styled.div`
  width: 375px;
  height: 667px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
`;
