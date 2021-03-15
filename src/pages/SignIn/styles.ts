import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc32d;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EDEDEE;
  color:#373535;
  flex: 1;
  margin: 0 6%;
  max-width: 720px;

  border-radius: 8px;
  padding: 16px;
  }

  h1{
    margin-bottom: 24px;
  }

  a {
    font-weight: 500;
    font-size: 12px;
    color: #373535;
    display: block;
    margin-top: 12px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#373535')};
    }
  }
`;
