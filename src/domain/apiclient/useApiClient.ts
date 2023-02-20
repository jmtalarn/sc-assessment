import { useContext } from 'react';
import { Game } from '../models/Game';
import { PageContext, PageLinksType } from '../service/pagination.context';

const API_URL = 'http://localhost:3000/games';

export const useApiClient = () => {
  const {
    page,
    sort: { field, order },
  } = useContext(PageContext);

  const sortParams = `_sort=${field}&_order=${order}`;

  const getPageLinksFromHeader = ({ headers }: Response): PageLinksType => {
    for (const [key, value] of headers.entries()) {
      if (key === 'link') {
        const pageLinks = value
          .split(', ')
          .map((link: string) => link.split('; rel='))
          .map(([value, key]) => [key.replaceAll('"', ''), parseInt(value.split('_page=')[1])])
          .reduce((acc, [key, value]) => {
            return { ...acc, [key]: value };
          }, {});

        return pageLinks;
      }
    }
    return {};
  };

  async function getAllFromAPI<T, Q>(): Promise<{ games: T; pageLinks: Q }> {
    const response = await fetch(`${API_URL}?_page=${page}&${sortParams}`);
    if (!response.ok) {
      const message = `Something went wrong. There is an error with status code : ${response.status}.`;
      throw new Error(message);
    }

    const games = await response.json();

    return { games, pageLinks: getPageLinksFromHeader(response) as Q };
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
    const response = await fetch(`${API_URL}?q=${q}&${sortParams}`);
    if (!response.ok) {
      const message = `Something went wrong. There is an error with status code : ${response.status}.`;
      throw new Error(message);
    }
    const games = await response.json();

    return games;
  }

  return {
    getGames: getAllFromAPI<Game[], PageLinksType>,
    getGame: getFromAPI<Game>,
    createGame: postToAPI<Game>,
    deleteGame: deleteToAPI<Game>,
    editGame: putToAPI<Game>,
    searchGames: searchFromAPI<Game[]>,
  };
};
