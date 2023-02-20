import React, { createContext, useReducer, Dispatch } from 'react';
import gameReducer, { ActionType, StateShape } from './reducer';
import { useDataService } from '../service/useDataService';
import { Game } from '../models/Game';

const initialState: StateShape = { games: [], loading: false };

type ContextType = StateShape & {
  loadGames: () => void;
  updateGame: (game: Game) => void;
  deleteGame: (game: Game) => void;
  createGame: () => void;
  searchGames: (q?: string) => void;
};

const AppContext = createContext<ContextType>({
  ...initialState,
  loadGames: () => null,
  updateGame: () => null,
  deleteGame: () => null,
  createGame: () => null,
  searchGames: () => null,
});

const AppProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const { loadGames, updateGame, removeGame, newGame, searchGames: searchByTextGames } = useDataService();

  const value = {
    ...state,
    loadGames: loadGames(dispatch),
    updateGame: (game: Game) => {
      updateGame(dispatch, game);
    },
    deleteGame: (game: Game) => {
      removeGame(dispatch, game);
    },
    createGame: () => {
      newGame(dispatch);
    },
    searchGames: (q?: string) => {
      searchByTextGames(dispatch, q);
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
