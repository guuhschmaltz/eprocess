import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #373535;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #373535;
  color: #565b5f;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
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
    color: #ffffffe5;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
