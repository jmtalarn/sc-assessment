import { Reducer } from 'react';
import { Game } from '../models/Game';

export enum GameActionType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  LOAD = 'LOAD',
  REQUEST = 'REQUEST',
  ERROR = 'ERROR',
}
export type StateShape = { games: Game[]; loading: boolean; errorMessage?: string };

export type ActionType =
  | { type: GameActionType.REQUEST }
  | { type: GameActionType.ERROR; payload: string }
  | { type: GameActionType.CREATE; payload: Game }
  | { type: GameActionType.EDIT; payload: Partial<Game> & Pick<Game, 'id'> }
  | { type: GameActionType.DELETE; payload: Pick<Game, 'id'> }
  | { type: GameActionType.LOAD; payload: Game[] };

const gameReducer: Reducer<StateShape, ActionType> = (state: StateShape, action: ActionType): StateShape => {
  switch (action.type) {
    case GameActionType.REQUEST:
      return { games: [...state.games], loading: true };
    case GameActionType.ERROR:
      return { games: [...state.games], loading: false, errorMessage: action.payload };
    case GameActionType.CREATE:
      return { games: [action.payload, ...state.games], loading: false };
    case GameActionType.DELETE:
      return { games: state.games.filter((game) => game.id !== action.payload.id), loading: false };
    case GameActionType.EDIT: {
      const gameIndex = state.games.findIndex((game) => game.id === action.payload.id);
      return {
        games: [
          ...state.games.slice(0, gameIndex),
          { ...state.games[gameIndex], ...action.payload } as Game,
          ...state.games.slice(gameIndex + 1),
        ],
        loading: false,
      };
    }
    case GameActionType.LOAD:
      return { games: [...action.payload], loading: false };
    default:
      return state;
  }
};

export default gameReducer;
