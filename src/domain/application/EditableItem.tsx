import React, { useContext } from 'react';
import Item from '../../components/Item';
import { Game } from '../models/Game';
import { AppContext } from '../reducers/context';

const EditableItem = ({ game }: { game: Game }) => {
  const { updateGame, deleteGame } = useContext(AppContext);

  return <Item game={game} onUpdate={updateGame} onDelete={deleteGame} />;
};

export default EditableItem;
