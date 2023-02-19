import React from 'react';
import styled from 'styled-components';
import icon from './assets/space-invaders.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 1rem;
  bottom: 1rem;

  .text {
    font-family: 'Press Start 2P', monospace, cursive;
    padding-left: 2rem;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  img {
    width: 2rem;
    height: 2rem;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    filter: contrast(0%) brightness(0);
  }
`;

const Loading = () => (
  <Container>
    <img src={icon} alt="An invader from space invader spinning" />
    <span className="text">Loading ...</span>
  </Container>
);

export default Loading;
