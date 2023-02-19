import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Table from './Table';
import { EXAMPLE_GAME } from '../../types/Game/mock/data';

const GAMES = [EXAMPLE_GAME, EXAMPLE_GAME, EXAMPLE_GAME, EXAMPLE_GAME, EXAMPLE_GAME];

describe('Item', () => {
  it('renders the games', async () => {
    render(<Table games={GAMES} />);
    expect(await screen.findAllByText(EXAMPLE_GAME.name)).toHaveLength(GAMES.length);
  });
  it('shows game over if no games', () => {
    render(<Table games={[]} />);
    expect(screen.getByText('Game over')).toBeInTheDocument();
  });
});
