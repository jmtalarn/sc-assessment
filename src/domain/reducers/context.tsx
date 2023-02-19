import React, { createContext, useReducer, Dispatch } from 'react';
import gameReducer, { ActionType, StateShape } from './reducer';
import { loadGames } from '../service';

const initialState: StateShape = { games: [], loading: false };

type ContextType = StateShape & { loadGames: () => void };
// const AppContext = createContext<{
//   state: StateShape;
//   dispatch: Dispatch<ActionType>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });

const AppContext = createContext<ContextType>({ ...initialState, loadGames: () => null });

const AppProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const value = {
    ...state,
    loadGames: loadGames(dispatch),
  };
  // return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
