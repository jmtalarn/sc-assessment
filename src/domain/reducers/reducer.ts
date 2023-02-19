import { Reducer } from 'react';
import { Game } from '../models/Game';

export enum GameActionType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  LOAD = 'LOAD',
  REQUEST = 'REQUEST',
}
export type StateShape = { games: Game[]; loading: boolean };

export type ActionType =
  | { type: GameActionType.REQUEST }
  | { type: GameActionType.CREATE; payload: Game }
  | { type: GameActionType.EDIT; payload: Partial<Game> & Pick<Game, 'id'> }
  | { type: GameActionType.DELETE; payload: Pick<Game, 'id'> }
  | { type: GameActionType.LOAD; payload: Game[] };

const gameReducer: Reducer<StateShape, ActionType> = (state: StateShape, action: ActionType): StateShape => {
  switch (action.type) {
    case GameActionType.REQUEST:
      return { games: [...state.games], loading: true };
    case GameActionType.CREATE:
      return { games: [...state.games, action.payload], loading: false };
    case GameActionType.DELETE:
      return { games: state.games.filter((game) => game.id !== action.payload.id), loading: false };
    case GameActionType.EDIT: {
      const game = state.games.find((game) => game.id === action.payload.id);
      return {
        games: [...state.games.filter((game) => game.id !== action.payload.id), { ...game, ...action.payload } as Game],
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
