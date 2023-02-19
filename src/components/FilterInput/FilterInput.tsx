import React, { KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';
import searchIcon from './assets/search.svg';

type Props = {
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  ref?: ForwardedRef<HTMLInputElement>;
};

const Input = styled.input<Props>`
  padding: 8px;
  padding-left: 2rem;
  background: white left center / contain no-repeat url(${searchIcon});
  border: 2px solid darkslategray;
  font-family: 'Raleway', Helvetica, Sans-Serif;
  width: 95%;
`;
Input.displayName = 'Input';

const FilterInput = forwardRef<HTMLInputElement, Props>(({ onKeyDown }, ref) => (
  <Input
    placeholder="Space Invaders, Pitfall, 1983, Activision...         press ↵ to search"
    type="text"
    defaultValue=""
    {...{ onKeyDown, ref }}
  />
));
FilterInput.displayName = 'FilterInput';

export default FilterInput;
