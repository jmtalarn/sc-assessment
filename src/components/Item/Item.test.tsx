import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Item from './Item';
import { convertDate } from '../../utils/dates';
import { EXAMPLE_GAME } from '../../domain/models/Game/mock/data';

describe('Item', () => {
  it('renders the game content', () => {
    render(<Item game={EXAMPLE_GAME} />);

    expect(screen.getByText(EXAMPLE_GAME.name)).toBeInTheDocument();
    expect(screen.getByText(EXAMPLE_GAME.summary)).toBeInTheDocument();
    expect(screen.getByText(EXAMPLE_GAME.rating)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', EXAMPLE_GAME.cover.url);
    expect(screen.getByText(`Release date ${convertDate(EXAMPLE_GAME.firstReleaseDate)}`)).toBeInTheDocument();
  });
});
