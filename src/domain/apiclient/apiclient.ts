import { Game } from '../models/Game';

const API_URL = 'http://localhost:3000/games';

async function getAllFromAPI<T>(): Promise<T> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    const message = `Something went wrong. There is an error with status code : ${response.status}.`;
    throw new Error(message);
  }
  const games = await response.json();

  return games;
}
async function getFromAPI<T>(id: number): Promise<T> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    const message = `Something went wrong. There is an error with status code : ${response.status}.`;
    throw new Error(message);
  }
  const game = await response.json();

  return game;
}
async function postToAPI<T>(game: Game): Promise<T> {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  if (!response.ok) {
    const message = `Something went wrong. There is an error with status code : ${response.status}.`;
    throw new Error(message);
  }
  const newGame = await response.json();

  return newGame;
}

async function deleteToAPI<T>(id: number): Promise<T> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    const message = `Something went wrong. There is an error with status code : ${response.status}.`;
    throw new Error(message);
  }
  const deletedGame = await response.json();

  return deletedGame;
}

async function putToAPI<T>(game: Game): Promise<T> {
  const response = await fetch(`${API_URL}/${game.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  if (!response.ok) {
    const message = `Something went wrong. There is an error with status code : ${response.status}.`;
    throw new Error(message);
  }
  const updatedGame = await response.json();

  return updatedGame;
}
async function searchFromAPI<T>(q: string): Promise<T> {
  const response = await fetch(`${API_URL}?q=${q}`);
  if (!response.ok) {
    const message = `Something went wrong. There is an error with status code : ${response.status}.`;
    throw new Error(message);
  }
  const games = await response.json();

  return games;
}

export const getGames = getAllFromAPI<Game[]>;
export const getGame = getFromAPI<Game>;
export const createGame = postToAPI<Game>;
export const deleteGame = deleteToAPI<Game>;
export const editGame = putToAPI<Game>;
export const searchGames = searchFromAPI<Game[]>;
