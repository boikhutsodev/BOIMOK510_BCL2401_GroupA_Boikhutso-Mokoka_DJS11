import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";

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
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 20px;
  font-weight: bold;
  margin: 16px 0px;
`;
const Elements = styled.div``;
const NavTex = styled.div``;

const Sidebar = () => {
  return (
    <MenuContainer>
      <Flex>
        <Logo>Cinematic</Logo>
        <close>
          <CloseRounded />
        </close>
      </Flex>
      <Elements>
        <HomeRounded />
        <NavTex>Dashboard</NavTex>
      </Elements>
    </MenuContainer>
  );
};

export default Sidebar;
