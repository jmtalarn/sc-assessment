import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Table from './Table';

import { EXAMPLE_GAME } from '../../domain/models/Game/mock/data';
import { Game } from '../../domain/models/Game';

const GAMES = [EXAMPLE_GAME, EXAMPLE_GAME, EXAMPLE_GAME, EXAMPLE_GAME, EXAMPLE_GAME];

const renderRow = ({ game }: { game: Game }) => <div>{game.name}</div>;

describe('Item', () => {
  it('renders the games', async () => {
    render(<Table games={GAMES} renderRow={renderRow} />);
    screen.debug();
    expect(await screen.findAllByText(EXAMPLE_GAME.name)).toHaveLength(GAMES.length);
  });

  it('shows game over if no games', () => {
    render(<Table games={[]} renderRow={renderRow} />);
    expect(screen.getByText('Game over')).toBeInTheDocument();
  });
});
