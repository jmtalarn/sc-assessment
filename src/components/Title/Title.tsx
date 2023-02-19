import React from 'react';
import styled from 'styled-components';

const RetroTitle = styled.h1`
  font-family: 'Press Start 2P', monospace, cursive;
`;

type Props = {
  title: string;
};
const Title = ({ title }: Props) => <RetroTitle>{title}</RetroTitle>;

export default Title;
