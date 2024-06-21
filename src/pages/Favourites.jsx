import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

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

const FavouriteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const DisplayPodcast = ({ podcast, onFavouriteClick, isFavourite }) => (
  <Card>
    <div>
      <Top>
        <Favourite onClick={() => onFavouriteClick(podcast)}>
          <FavoriteIcon
            style={{
              width: "16px",
              height: "16px",
              color: isFavourite ? "red" : "white",
            }}
          />
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
);

export const Favourites = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        // Initial sorting when data is fetched
        setPodcasts(data.sort((a, b) => a.title.localeCompare(b.title)));
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleFavouriteClick = (podcast) => {
    setFavourites((prevFavourites) => {
      const isFavourite = prevFavourites.some((fav) => fav.id === podcast.id);
      if (isFavourite) {
        return prevFavourites.filter((fav) => fav.id !== podcast.id);
      } else {
        return [...prevFavourites, podcast];
      }
    });
  };

  const sortAZ = () => {
    setPodcasts([...podcasts].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const sortZA = () => {
    setPodcasts([...podcasts].sort((a, b) => b.title.localeCompare(a.title)));
  };

  const sortByRecent = () => {
    setPodcasts(
      [...podcasts].sort((a, b) => new Date(b.updated) - new Date(a.updated))
    );
  };

  const sortByOldest = () => {
    setPodcasts(
      [...podcasts].sort((a, b) => new Date(a.updated) - new Date(b.updated))
    );
  };

  return (
    <Container>
      <Topic>
        Favourites 
        <div className="sortingContainer">
          <button onClick={sortAZ} className="sortingBtn">
            Sort A-Z
          </button>
          <button onClick={sortZA} className="sortingBtn">
            Sort Z-A
          </button>
          <button onClick={sortByRecent} className="sortingBtn">
            Recently Updated
          </button>
          <button onClick={sortByOldest} className="sortingBtn">
            Furthest Updated
          </button>
        </div>
      </Topic>
      <FavouriteContainer>
        {favourites.map((podcast) => (
          <DisplayPodcast
            key={podcast.id}
            podcast={podcast}
            onFavouriteClick={handleFavouriteClick}
            isFavourite={true}
          />
        ))}
      </FavouriteContainer>
      <Topic>All Podcasts</Topic>
      <FavouriteContainer>
        {podcasts.map((podcast) => (
          <DisplayPodcast
            key={podcast.id}
            podcast={podcast}
            onFavouriteClick={handleFavouriteClick}
            isFavourite={favourites.some((fav) => fav.id === podcast.id)}
          />
        ))}
      </FavouriteContainer>
    </Container>
  );
};

export default Favourites;
