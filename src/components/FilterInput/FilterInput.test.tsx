import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import FilterInput from './FilterInput';

describe('Filter Input', () => {
  it('renders the input', () => {
    render(<FilterInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('handles the typing', async () => {
    const mockHandleTyping = vi.fn();
    render(<FilterInput onKeyDown={mockHandleTyping} />);
    const input = screen.getByRole('textbox');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(mockHandleTyping).toHaveBeenCalledOnce();
  });
});
