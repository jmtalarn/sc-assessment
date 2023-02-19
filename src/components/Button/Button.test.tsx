import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Button from './Button';

const BUTTON_LABEL = 'BUTTON_LABEL';

describe('Button', () => {
  it('renders the label', () => {
    render(<Button label={BUTTON_LABEL} />);
    expect(screen.getByText(BUTTON_LABEL)).toBeInTheDocument();
  });

  it('handles the click', () => {
    const mockHandleClick = vi.fn();
    render(<Button label={BUTTON_LABEL} onClick={mockHandleClick} />);
    screen.getByText(BUTTON_LABEL).click();
    expect(mockHandleClick).toHaveBeenCalledOnce();
  });
});
