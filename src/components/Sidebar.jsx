import React from "react";
import styled from "styled-components";
import {
  HomeRounded,
  CloseRounded,
  SearchRounded,
  LightModeRounded,
  UploadRounded,
  LogoutRounded,
  FavoriteRounded,
} from "@mui/icons-material";
import LogoImage from "/Images/podcasts.svg";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  flex: 0.25; // changed from 0.5
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
  text-decoration: none !important;
  !important
  &: hover {
    background: ${({ theme }) => theme.text_secondary + 50};
    border-redius: 50%;
  }
`;
const NavText = styled.div`
  padding: 12px 0px;
  text-decoration: none !important;
`;

const HRLine = styled.div`
width: 100%;
height: 1px
margin: 10px 0px;
border: 1px solid ${({ theme }) => theme.text_secondary};
`;

const menuItems = [
  {
    link: "/dashboard",
    name: "Dashboard",
    icon: <HomeRounded />,
  },
  {
    link: "/search",
    name: "Search",
    icon: <SearchRounded />,
  },
  {
    link: "/favourites",
    name: "Favourites",
    icon: <FavoriteRounded />,
  },
];

const button = [
  {
    fun: () => console.log("upload"),
    name: "Upload",
    icon: <UploadRounded />,
  },
  {
    fun: () => console.log("Light Mode"),
    name: "Light Mode",
    icon: <LightModeRounded />,
  },
  {
    fun: () => console.log("Log Out"),
    name: "Log Out",
    icon: <LogoutRounded />,
  },
];

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
      {menuItems.map((item) => (
        <Link
          to={item.link}
          key={item.name}
          styled={{ textDecoration: "none" }}
        >
          <Elements>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}
      <HRLine />
      {button.map((item) => (
        <Elements onClick={item.fun} key={item.name}>
          {item.icon}
          <NavText>{item.name}</NavText>
        </Elements>
      ))}
    </MenuContainer>
  );
};

export default Sidebar;
