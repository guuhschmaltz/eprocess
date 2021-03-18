import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  position: relative;

  @media only screen and (min-width: 768px) {
    display: flex;
    span {
      width: 7.5rem;
      background: var(--color-orange);
      padding: 0.6rem;
      border-radius: 4px;
      font-weight: 500;
      opacity: 0;
      transition: opacity 0.4s;
      visibility: hidden;

      position: absolute;
      bottom: calc(100% + 12px);
      left: 50%;
      transform: translateX(-50%);

      color: var(--color-black);

      &::before {
        content: '';
        border-style: solid;
        border-color: var(--color-orange) transparent;
        border-width: 6px 6px 0 6px;
        top: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &:hover span {
      visibility: visible;
      opacity: 1;
    }
  }
`;
