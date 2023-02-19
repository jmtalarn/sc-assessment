import React, { useState } from 'react';
import styled from 'styled-components';
import { Game } from '../../types/Game';
import { convertDate } from '../../utils/dates';

const Container = styled.article`
  display: flex;
  align-items: flex-start;

  padding: 1rem;
  gap: 1rem;
  width: 100%;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  h3 {
    font-family: 'Press Start 2P', monospace, cursive;
    margin: 0;
  }
`;
const Image = styled.img`
  width: 90px;
  height: 90px;
`;
const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .value {
    margin: 1rem 0;
    font-size: 3rem;
    font-family: 'Press Start 2P', monospace, cursive;
  }
`;

type Props = {
  game: Game;
};

const Collapsible: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledCollapsibleContent>
      <button
        className={open ? 'open' : 'closed'}
        onClick={() => {
          setOpen(!open);
        }}
      >
        ‣
      </button>
      <p className={open ? 'open' : 'closed'}>{children}</p>
    </StyledCollapsibleContent>
  );
};

const StyledCollapsibleContent = styled.div`
  display: flex;
  align-items: flex-start;
  button {
    border: none;
    background: none;
    padding: none;
    transition: transform 100ms ease-in;

    &.open {
      transform: rotate(90deg);
    }
  }
  p {
    font-weight: 100;
    margin: 0;
    line-height: 1.4rem;
    font-size: 0.8rem;
    overflow: hidden;
    transition: max-height 500ms ease-in;
    &.closed {
      max-height: 1rem;
    }
    &.open {
      max-height: 20rem;
    }
  }
`;
const FirstBlock = styled.div`
  div {
    margin: 4px 0;
  }
`;

const Item = ({ game: { id, cover, firstReleaseDate, name, slug, summary, genres, rating } }: Props) => {
  return (
    <Container id={`${slug}-${id}`}>
      <Image src={cover.url} alt={name} />
      <Data>
        <FirstBlock>
          <h3>{name}</h3>
          <div>
            <small>{genres.map((genre) => genre.name).join(', ')}</small>
          </div>
          <div>
            <small>Release date {convertDate(firstReleaseDate)}</small>
          </div>
        </FirstBlock>

        <Collapsible>{summary}</Collapsible>
      </Data>

      <Rating>
        Rating <span className="value">{rating}</span>
      </Rating>
    </Container>
  );
};

export default Item;
