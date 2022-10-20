import styled from "styled-components";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Menu() {
  const percentage = 0;
  return (
    <MenuContainer>
      <Option>Hábitos</Option>
      <Teste>
        <CircularProgressbarWithChildren
          value={percentage}
          background
          backgroundPadding={6}
          width="81px"
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        >
          <TextCicularProgress>Hoje</TextCicularProgress>
        </CircularProgressbarWithChildren>
      </Teste>
      <Option>Histórico</Option>
    </MenuContainer>
  );
}

export default Menu;

const MenuContainer = styled.div`
  width: 375px;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const Option = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #52b6ff;
  &:nth-child(1) {
    margin-left: 36px;
  }
  &:nth-child(3) {
    margin-right: 31px;
  }
`;

const TextCicularProgress = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
`;

const Teste = styled.div`
  width: 91px;
  position: absolute;
  left: calc(50% - 40.5px);
  bottom: 10px;
`;
