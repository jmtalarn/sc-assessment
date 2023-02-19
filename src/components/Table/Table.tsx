import React from 'react';
import styled from 'styled-components';
import { Game } from '../../domain/models/Game';

import Item from '../Item';

type Props = {
  games: Game[];
};
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const EmptyTableMessage = styled.p`
  font-family: 'Press Start 2P', monospace, cursive;
  color: salmon;
`;

const Table = ({ games }: Props) => {
  return (
    <Container>
      {!!games.length &&
        games
          .map<React.ReactNode>((game, index) => <Item key={`${game.slug}-${index}`} {...{ game }} />)
          .reduce((prev, curr, index) => [prev, <hr key={`separator-${index}`} />, curr])}
      {!games.length && <EmptyTableMessage>Game over</EmptyTableMessage>}
    </Container>
  );
};

export default Table;
