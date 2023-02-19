import gameReducer, { GameActionType, ActionType, StateShape } from '../reducers/reducer';
import { getGames, editGame, deleteGame, createGame, searchGames as queryGames } from '../apiclient/apiclient';

import React, { createContext, useReducer, Dispatch } from 'react';
import { Game } from '../models/Game';

export const loadGames = (dispatch: Dispatch<ActionType>) => {
  return async () => {
    dispatch({ type: GameActionType.REQUEST });
    try {
      const games = await getGames();
      dispatch({ type: GameActionType.LOAD, payload: games });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
      dispatch({ type: GameActionType.ERROR, payload: errorMessage });
    }
  };
};
export const searchGames = async (dispatch: Dispatch<ActionType>, query?: string) => {
  dispatch({ type: GameActionType.REQUEST });
  try {
    const games = query ? await queryGames(query) : await getGames();
    dispatch({ type: GameActionType.LOAD, payload: games });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
    dispatch({ type: GameActionType.ERROR, payload: errorMessage });
  }
};

export const updateGame = async (dispatch: Dispatch<ActionType>, game: Game) => {
  dispatch({ type: GameActionType.REQUEST });
  try {
    const updatedGame = await editGame(game);
    dispatch({ type: GameActionType.EDIT, payload: updatedGame });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
    dispatch({ type: GameActionType.ERROR, payload: errorMessage });
  }
};

export const removeGame = async (dispatch: Dispatch<ActionType>, game: Game) => {
  dispatch({ type: GameActionType.REQUEST });
  try {
    const deletedGame = await deleteGame(game.id);
    dispatch({ type: GameActionType.DELETE, payload: deletedGame });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
    dispatch({ type: GameActionType.ERROR, payload: errorMessage });
  }
};

export const newGame = async (dispatch: Dispatch<ActionType>) => {
  dispatch({ type: GameActionType.REQUEST });
  try {
    const newGame = {
      id: Math.floor(Math.random() * 1000000000),
      slug: crypto.randomUUID(),
      name: 'Recently New game created',
      summary:
        'Nisi excepteur qui voluptate ad ad ex excepteur ea eiusmod enim pariatur mollit sint cillum. Nisi pariatur fugiat aliqua in non eu nulla. Velit mollit cillum velit dolor non nisi veniam sunt excepteur non magna occaecat. Exercitation mollit exercitation adipisicing dolore dolor consequat ut officia ex. Adipisicing ipsum nisi duis reprehenderit. Fugiat laboris aliqua quis laboris culpa cillum magna dolore aute officia esse. Aliquip consectetur cupidatat excepteur in amet veniam irure sit deserunt exercitation esse pariatur fugiat magna.',
      genres: [{ name: 'FunCodeAssessments' }],
    };

    const createdGame = await createGame(newGame);
    dispatch({ type: GameActionType.CREATE, payload: createdGame });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
    dispatch({ type: GameActionType.ERROR, payload: errorMessage });
  }
};
