import React from "react";
import { Title as MuiTitle, PlayArrow, Headphones } from "@mui/icons-material";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, IconButton } from "@mui/material";

const PlayIcon = styled.div`
  position: absolute !important;
  border-radius: 50%;
  z-index: 100;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 10px;
  top: 60%; // 45
  right: 10%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;
`;

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

  &: hover ${PlayIcon} {
    display: flex;
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
const Favorite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-redius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95};
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
`;
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
const CardInfomation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;
const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;
const MainTitle = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`;
const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
`;
const CreatersInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`;
const Creator = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const CreatorName = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
`;
const Views = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  width: max-content;
`;

const PodcastCard = () => {
  return (
    <Card>
      <div>
        <Top>
          <Favorite>
            <FavoriteIcon style={{ width: "16px", height: "16px" }} />
          </Favorite>
          <CardImage src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Top>
        <CardInfomation>
          <MainInfo>
            <MainTitle>It`s a wonderful day!</MainTitle>
            <Description>
              {" "}
              Looking at API Gateway and API Management tools? Wondering which
              fits your team's use case the best? Look no further! We've done
              the research for you.
            </Description>
            <CreatersInfo>
              <Creator>
                <Avatar style={{ width: "26px", height: "26px" }}>B</Avatar>
                <CreatorName>Boikhutso</CreatorName>
              </Creator>
              <Views>20 Views</Views>
            </CreatersInfo>
          </MainInfo>
        </CardInfomation>
      </div>
      <PlayIcon>
        {"video" === "video" ? (
          <PlayArrow style={{ width: "28px", height: "28px" }} />
        ) : (
          <Headphones style={{ width: "28px", height: "28px" }} />
        )}
      </PlayIcon>
    </Card>
  );
};

export default PodcastCard;
