import gameReducer, { GameActionType, ActionType, StateShape } from '../reducers/reducer';
import { getGames } from '../apiclient/apiclient';

import React, { createContext, useReducer, Dispatch } from 'react';

export const loadGames = (dispatch: Dispatch<ActionType>) => {
  return async () => {
    // adjust args to your needs
    dispatch({ type: GameActionType.REQUEST });
    const games = await getGames();
    dispatch({ type: GameActionType.LOAD, payload: games });
  };
};
