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
  background-color: #fff;
  color:#373535;

  border-radius: 8px;
  padding: 16px;
  }

  h1{
    margin-bottom: 24px;
  }

  a {
    font-weight: 500;
    font-size: 12px;
    color: #DDA927;
    display: block;
    margin-top: 12px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#DDA927')};
    }
  }
`;
