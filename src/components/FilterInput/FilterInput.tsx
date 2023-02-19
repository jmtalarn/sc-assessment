import React from 'react';
import styled from 'styled-components';
import searchIcon from './assets/search.svg';

type Props = {
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = styled.input<Props>`
  padding: 8px;
  padding-left: 2rem;
  background: white left center / contain no-repeat url(${searchIcon});
  border: 2px solid darkslategray;
  font-family: 'Raleway', Helvetica, Sans-Serif;
  width: 95%;
`;

const FilterInput = ({ onChange }: Props) => (
  <Input placeholder="Space Invaders, Pitfall, 1983, Activision..." type="text" {...{ onChange }} />
);

export default FilterInput;
