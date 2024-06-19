import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: colum;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div``;
const Elements = styled.div``;
const NavTex = styled.div``;

const Sidebar = () => {
  return (
    <MenuContainer>
      <Logo>Cinematic</Logo>
      <close>
        <CloseRounded />
      </close>
      <Elements>
        <HomeRounded />
        <NavTex>Dashboard</NavTex>
      </Elements>
    </MenuContainer>
  );
};

export default Sidebar;
