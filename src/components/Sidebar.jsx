import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";

const MenuContainer = styled.div``;
const Logo = styled.div``;
const Elements = styled.div``;
const NavTex = styled.div``;

const Sidebar = () => {
  return (
    <MenuContainer>
      <Logo></Logo>
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
