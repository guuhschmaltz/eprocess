import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6%;
  flex: 1;
`;
const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(250px);
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

  flex: 1;
  width: 100%;
  max-width: 720px;
  background-color: var(--color-text-white);
  color: var(--color-text-black);

  border-radius: 8px;

  animation: ${appearFromRight} 1s;

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
    font-size: 12px;
    color: var(--color-text-black);
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
