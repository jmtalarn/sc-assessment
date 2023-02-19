import React, { useContext, useEffect } from 'react';
import Table from '../../components/Table';
import { AppContext } from '../reducers/context';
import EditableItem from './EditableItem';

const Datatable = () => {
  const { loadGames, games, errorMessage } = useContext(AppContext);

  useEffect(() => {
    loadGames();
  }, []);

  return <Table games={games} renderRow={EditableItem} errorMessage={errorMessage} />;
};

export default Datatable;
