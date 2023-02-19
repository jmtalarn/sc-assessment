import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Loading from './Loading';

const LOADING_TEXT = 'Loading...';

describe('Loading', () => {
  it('renders the loading', () => {
    render(<Loading />);

    expect(screen.getByText(LOADING_TEXT)).toBeInTheDocument();
  });
});
