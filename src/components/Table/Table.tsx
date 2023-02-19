import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Game } from '../../domain/models/Game';
import { Props as ItemProps } from '../Item/Item';
type Props = {
  games: Game[];
  renderRow: React.FunctionComponent<ItemProps>;
  errorMessage?: string;
};
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const EmptyTableMessage = styled.p`
  font-family: 'Press Start 2P', monospace, cursive;
  color: salmon;
`;

const Table = ({ games, renderRow, errorMessage }: Props) => {
  return (
    <Container>
      {errorMessage && <EmptyTableMessage>{errorMessage}. Please reload page to continue.</EmptyTableMessage>}
      {!!games.length &&
        !errorMessage &&
        games
          .map<React.ReactNode>((game, index) => (
            <Fragment key={`${game.slug}-${index}`}>{renderRow({ game })}</Fragment>
          ))
          .reduce((prev, curr, index) => [prev, <hr key={`separator-${index}`} />, curr])}
      {!games.length && <EmptyTableMessage>Game over</EmptyTableMessage>}
    </Container>
  );
};

export default Table;
