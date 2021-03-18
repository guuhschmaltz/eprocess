import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import fadeBackground from '../../assets/fade-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12%;
  flex: 1;
`;
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-container);
  color: var(--color-text-black);
  border-radius: 8px;
  width: 100%;

  animation: ${appearFromLeft} 1s;

  h1 {
    margin-bottom: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex: 1;
    width: 100%;
    max-width: 720px;
    padding: 6%;
  }

  a {
    font-weight: 500;
    color: var(--color-text-black);
    display: block;
    margin-top: 0.8rem;
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

export const Background = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex: 1;
    background: url(${fadeBackground}) no-repeat center;
    background-size: cover;
  }
`;
