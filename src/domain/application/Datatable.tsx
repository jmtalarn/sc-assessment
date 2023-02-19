import React, { useContext, useEffect } from 'react';
import Table from '../../components/Table';
import { AppContext } from '../reducers/context';

const Datatable = () => {
  const { loadGames, games } = useContext(AppContext);

  useEffect(() => {
    loadGames();
  }, []);

  return <Table games={games} />;
};

export default Datatable;
