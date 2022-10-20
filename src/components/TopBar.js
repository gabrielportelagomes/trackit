import styled from "styled-components";
import { useAuth } from "../providers/auth";

function TopBar() {
  const { userLogin } = useAuth();

  return (
    <TopContainer>
      <Logo>TracKIt</Logo>
      <ProfilePicture src={userLogin.image} alt="Profile picture" />
    </TopContainer>
  );
}

export default TopBar;

const TopContainer = styled.div`
  width: 375px;
  height: 70px;
  background-color: #126ba5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  
`;

const Logo = styled.p`
  font-family: "Playball", cursive;
  font-weight: 400;
  font-size: 39px;
  color: #ffffff;
  margin-left: 18px;
`;

const ProfilePicture = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  margin-right: 18px;
`;
