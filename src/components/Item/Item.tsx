import React, { useState } from 'react';
import styled from 'styled-components';
import { Game } from '../../domain/models/Game';
import { convertDate } from '../../utils/dates';
import noCoverImage from './assets/space-invaders.svg';
import Button from '../Button';

const Wrapper = styled.div`
  position: relative;
`;
const Container = styled.article`
  display: flex;
  align-items: flex-start;

  padding: 1rem;
  gap: 1rem;
  width: 100%;

  input,
  textarea {
    position: relative;
    width: 100%;
  }
  textarea {
    height: 5rem;
    font-family: 'Raleway', Helvetica, Sans-Serif;
    font-weight: 100;
    line-height: 1.4rem;
    font-size: 0.8rem;
  }
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    font-family: 'Press Start 2P', monospace, cursive;
    font-size: 1.2rem;
    margin: 0;
  }
  width: 80%;
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
  flex-grow: 1;

  .value {
    width: 6rem;
    margin: 1rem 0;
    font-size: 3rem;
    font-family: 'Press Start 2P', monospace, cursive;
  }
`;

type Props = {
  game: Game;
  onDelete?: () => void;
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
  width: 100%;
  div {
    margin: 4px 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  button {
    transition: background-color 300ms ease-in;

    &:hover {
      background-color: cyan;
    }
  }
`;

const Item = ({ game: { id, cover, firstReleaseDate, name, slug, summary, genres, rating }, onDelete }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const justNumbersOnKeyPress = (e) => {
    if (!e.key.match(/^[0-9]/g) && e.keyCode !== 8 && e.keyCode !== 46) {
      e.preventDefault();
    }
  };
  return (
    <Container id={`${slug}-${id}`}>
      <Image src={cover ? cover.url : noCoverImage} alt={name} />

      <Data>
        <FirstBlock>
          {editMode ? <input className="title" name="title" value={name} /> : <h3 className="title">{name}</h3>}
          <div>
            <small>{!!genres?.length && genres.map((genre) => genre.name).join(', ')}</small>
          </div>
          <div>
            <small>Release date {firstReleaseDate ? convertDate(firstReleaseDate) : ' - No release date'}</small>
          </div>
        </FirstBlock>

        {editMode ? (
          <textarea defaultValue={summary} name="summary" />
        ) : (
          <Collapsible {...{ editMode }}>{summary}</Collapsible>
        )}
      </Data>

      <Rating>
        Rating{' '}
        {editMode ? (
          <input className="value" name="rating" onKeyPress={justNumbersOnKeyPress} value={rating} />
        ) : (
          <span className="value">{rating}</span>
        )}
      </Rating>
      <Buttons>
        {editMode ? (
          <>
            <Button
              variant="confirm"
              onClick={() => {
                setEditMode(false);
              }}
            />
            <Button
              variant="cancel"
              onClick={() => {
                setEditMode(false);
              }}
            />
          </>
        ) : (
          <>
            <Button
              variant="edit"
              onClick={() => {
                setEditMode(true);
              }}
            />
            <Button variant="remove" onClick={onDelete} />
          </>
        )}
      </Buttons>
    </Container>
  );
};

export default Item;
