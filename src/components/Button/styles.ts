import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color-yellow);
  height: 2.6rem;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: var(--color-black);
  width: 100%;
  font-weight: 700;
  margin-top: 16px;
  transition: background-color 0.2s;

  + button {
  margin-top: 8px;
  }

  &:hover {
    background: var(--color-yellow-dark);
    transition: 0.2s;
  }
`;
