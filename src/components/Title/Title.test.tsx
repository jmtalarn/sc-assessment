import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Title from './Title';

const TITLE_TEST = 'TITLE_TEST';

describe('Title', () => {
  it('renders title text', () => {
    render(<Title title={TITLE_TEST} />);

    expect(screen.getByText(TITLE_TEST)).toBeInTheDocument();
  });
});
