import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { Link } from "react-router-dom";

const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 45%;
  right: 10%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;
`;

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card || "#fff"};
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
  &:hover ${PlayIcon} {
    display: flex;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;

const Favourite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) =>
    theme.text_secondary + 95 || "#33395"} !important;
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;

const CardInformation = styled.div`
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

const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary || "#000"};
`;

const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary || "#666"};
  font-size: 12px;
`;

const SeasonsInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`;

const Season = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const SeasonNumber = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary || "#666"};
`;

const Updated = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary || "#666"};
  width: max-content;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  height: 100vh;
  overflow-y: auto;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary || "#000"};
  text-align: center;
  margin-top: 20px;
`;

export const DisplayPodcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        // Simulating a delay to show loading indicator
        setTimeout(() => {
          // Sort podcasts alphabetically by title
          const sortedPodcasts = data.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          setPodcasts(sortedPodcasts);
          setLoading(false); // Once data is fetched, set loading to false
        }, 1500); // Adjust delay time as per your preference
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false); // Ensure loading state is set to false on error
      });
  }, []);

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  return (
    <Container>
      {podcasts.map((podcast) => (
        <Link to={`/podcast/${podcast.id}`} style={{ textDecoration: "none" }}>
          <Card key={podcast.id}>
            <div>
              <Top>
                <Favourite>
                  <FavoriteIcon style={{ width: "16px", height: "16px" }} />
                </Favourite>
                <CardImage src={podcast.image} alt="podcast-image" />
              </Top>
              <CardInformation>
                <MainInfo>
                  <Title>{podcast.title}</Title>
                  <Description>{podcast.description}</Description>
                  <SeasonsInfo>
                    <Season>
                      <SeasonNumber>Seasons: {podcast.seasons}</SeasonNumber>
                    </Season>
                    <Updated>
                      Updated: {new Date(podcast.updated).toLocaleDateString()}
                    </Updated>
                  </SeasonsInfo>
                </MainInfo>
              </CardInformation>
            </div>
            <PlayIcon>
              <PlayArrow style={{ width: "28px", height: "28px" }} />
            </PlayIcon>
          </Card>
        </Link>
      ))}
    </Container>
  );
};
