import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--color-yellow-dark);
  height: 56px;
  border-radius: 8px;
  border: 0;
  padding: 0 16px;
  color: #373535;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#DDA927')};
  }
`;
