import React, { useContext } from 'react';
import Button from '../../components/Button';
import styled from 'styled-components';
import { AppContext } from '../reducers/context';

const BigFixedButton = styled.div`
  position: fixed;
  right: 4rem;
  top: calc(100vh - 5rem);

  button {
    transform: scale(2);

    transition: background-color 300ms ease-in;

    &:hover {
      background-color: lime;
    }
  }
`;

const CreateGameButton = () => {
  const { createGame } = useContext(AppContext);

  return (
    <BigFixedButton>
      <Button variant="create" onClick={createGame} />
    </BigFixedButton>
  );
};

export default CreateGameButton;
