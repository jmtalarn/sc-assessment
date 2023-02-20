import { describe, it, expect } from 'vitest';

import gameReducer, { GameActionType } from './reducer';
import { EXAMPLE_GAME } from '../../domain/models/Game/mock/data';

const DEMO_TEST = 'DEMO_TEST';

describe('Reducer', () => {
  it('loads the games', () => {
    const state = gameReducer(
      { games: [], loading: false },
      { type: GameActionType.LOAD, payload: [EXAMPLE_GAME, EXAMPLE_GAME, EXAMPLE_GAME] },
    );
    expect(state.games).toHaveLength(3);
  });
  it('adds a game', () => {
    const state = gameReducer({ games: [], loading: false }, { type: GameActionType.CREATE, payload: EXAMPLE_GAME });
    expect(state.games).toHaveLength(1);
  });
  it('deletes a game', () => {
    const state = gameReducer(
      { games: [EXAMPLE_GAME], loading: false },
      { type: GameActionType.DELETE, payload: EXAMPLE_GAME },
    );
    expect(state.games).toHaveLength(0);
  });
  it('updates a game', () => {
    const state = gameReducer(
      { games: [EXAMPLE_GAME], loading: false },
      {
        type: GameActionType.EDIT,
        payload: { id: EXAMPLE_GAME.id, name: DEMO_TEST },
      },
    );
    expect(state.games).toHaveLength(1);
    expect(state.games.find((game) => game.id === EXAMPLE_GAME.id)?.name).toBe(DEMO_TEST);
  });
});
