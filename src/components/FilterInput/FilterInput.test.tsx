import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';

import FilterInput from './FilterInput';

describe('Button', () => {
  it('renders the input', () => {
    render(<FilterInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('handles the typing', async () => {
    const mockHandleTyping = vi.fn();
    render(<FilterInput onChange={mockHandleTyping} />);
    const input = screen.getByRole('textbox');
    screen.debug();

    fireEvent.change(input, { target: { value: 'Space Invaders' } });

    expect(input).toHaveValue('Space Invaders');
    expect(mockHandleTyping).toHaveBeenCalledOnce();
  });
});
