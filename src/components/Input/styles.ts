import styled from 'styled-components';

export const Container = styled.div`
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
