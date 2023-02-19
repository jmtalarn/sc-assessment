import React from 'react';
import styled from 'styled-components';
import confirm from './assets/confirm.svg';
import cancel from './assets/cancel.svg';
import edit from './assets/edit.svg';
import remove from './assets/delete.svg';
import create from './assets/create.svg';

const buttonIconMap: Record<Variants, string> = {
  confirm,
  cancel,
  edit,
  remove,
  create,
};

type Variants = 'confirm' | 'cancel' | 'edit' | 'remove' | 'create';

type Props = {
  label?: string;
  variant?: Variants;
  onClick?: () => void;
};

const RetroButton = styled.button<Props>`
  padding: 8px;
  background-color: white;
  ${({ variant }) => variant && `background: white left center / contain no-repeat url(${buttonIconMap[variant]});`}
  ${({ variant, label }) => variant && label && `padding-left: 2rem;`}
  font-family: 'Press Start 2P', monospace, cursive;
  font-size: 0.8rem;
  min-height: 2.1rem;
  min-width: 2.1rem;
`;

const Button = ({ variant, label, onClick }: Props) => (
  <RetroButton {...{ variant, label, onClick }}>{label && <span>{label}</span>}</RetroButton>
);

export default Button;
