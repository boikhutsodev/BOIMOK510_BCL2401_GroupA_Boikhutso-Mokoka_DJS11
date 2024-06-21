import React from "react";
import { Title as MuiTitle } from "@mui/icons-material";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, IconButton } from "@mui/material";

const Card = styled.div``;
const Top = styled.div``;
const Favorite = styled(IconButton)``;
const CardImage = styled.div``;
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
        <CardImage />
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
