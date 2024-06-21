import React from "react";
import { Title as MuiTitle } from "@mui/icons-material";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, IconButton } from "@mui/material";

const Card = styled.div`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.Card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
  // @media (max-width: 768px) {
  //   width: 250px;
  // }
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;
const Favorite = styled(IconButton)``;
const CardImage = styled.img`
  object-fit: cover;
  width: 220px;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 0 4px 30px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;
const CardInfomation = styled.div``;
const MainInfo = styled.div``;
// const Title = styled.div``;
const Description = styled.div``;
const CreatersInfo = styled.div``;
const Creator = styled.div``;
// const Avatar = styled.div``;
const CreatorName = styled.div``;
const Views = styled.div``;

const PodcastCard = () => {
  return (
    <Card>
      <Top>
        <Favorite>
          <FavoriteIcon />
        </Favorite>
        <CardImage src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Top>
      <CardInfomation>
        <MainInfo>
          <MuiTitle>It`s a wonderful day!</MuiTitle>
          <Description>
            {" "}
            Looking at API Gateway and API Management tools? Wondering which
            fits your team's use case the best? Look no further! We've done the
            research for you.
          </Description>
          <CreatersInfo>
            <Creator>
              <Avatar>B</Avatar>
              <CreatorName>Boikhutso</CreatorName>
            </Creator>
            <Views>20 Views</Views>
          </CreatersInfo>
        </MainInfo>
      </CardInfomation>
    </Card>
  );
};

export default PodcastCard;
