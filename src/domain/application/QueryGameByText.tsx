import React, { KeyboardEvent, useContext, useRef } from 'react';
import FilterInput from '../../components/FilterInput';

import { AppContext } from '../reducers/context';

const QueryGameByTextInput = () => {
  const { searchGames } = useContext(AppContext);
  const inputElement = useRef<HTMLInputElement>(null);

  return (
    <FilterInput
      ref={inputElement}
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
          searchGames(inputElement?.current?.value);
        }
      }}
    />
  );
};

export default QueryGameByTextInput;
