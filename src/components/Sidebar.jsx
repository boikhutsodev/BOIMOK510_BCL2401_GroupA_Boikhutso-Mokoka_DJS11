import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";
import LogoImage from "/Images/podcasts.svg";

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 20px;
  font-weight: bold;
  margin: 16px 0px;
`;

const Image = styled.img`
  height: 40px;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;
const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  gap: 12px;
  color: ${({ theme }) => theme.secondary};
  width: 100%;
  &: hover {
    background: ${({ theme }) => theme.text_secondary};
  }
`;
const NavTex = styled.div`
  padding: 12px 0px;
`;

const Sidebar = () => {
  return (
    <MenuContainer>
      <Flex>
        <Logo>
          <Image src={LogoImage} />
          Cinematic
        </Logo>
        <Close>
          <CloseRounded />
        </Close>
      </Flex>
      <Elements>
        <HomeRounded />
        <NavTex>Dashboard</NavTex>
      </Elements>
    </MenuContainer>
  );
};

export default Sidebar;
