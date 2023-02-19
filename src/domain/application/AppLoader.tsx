import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import { AppContext } from '../reducers/context';

const AppLoader = () => {
  const { loading } = useContext(AppContext);

  return <>{loading && <Loading />}</>;
};

export default AppLoader;
