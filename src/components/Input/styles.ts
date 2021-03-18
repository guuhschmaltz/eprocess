import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-black);
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid var(--color-black);
  color: #565b5f;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--color-orange);
      color: var(--color-orange);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-yellow-dark);
      border-color: var(--color-yellow-dark);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--color-yellow-dark);
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-text-white);

    &::placeholder {
      color: var(--color-text-grey);
    }
  }

  svg {
    display: none;
  }
  @media only screen and (min-width: 425px) {
    svg {
      display: flex;
      margin-right: 16px;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    text-align: center;
    background: var(--color-orange);
    color: var(--color-text-white);

    &::before {
      border-color: var(--color-orange) transparent;
    }
  }
`;
