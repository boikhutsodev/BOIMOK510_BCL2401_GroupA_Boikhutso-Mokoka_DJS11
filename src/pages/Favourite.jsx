import React from "react";
import PodcastCard from "../components/PodcastCard";
import styled from "styled-components";

const Container = styled.div``;
const Topic = styled.div``;
const FavouriteContainer = styled.div``;

const Favourite = () => {
  return (
    <Container>
      <Topic>Favourite</Topic>
      <FavouriteContainer>
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
      </FavouriteContainer>
    </Container>
  );
};

export default Favourite;
