import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App, { DATA_TEST_ID } from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    expect(screen.getByTestId(DATA_TEST_ID)).toBeInTheDocument();
  });
});
