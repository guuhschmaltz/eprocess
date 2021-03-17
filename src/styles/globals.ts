import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-background-black);
    color: var(--color-text-white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Poppins, sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: Nunito, sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  :root{
  --color-yellow: #FFC32D;
  --color-yellow-dark: #DDA927;
  --color-grey: #565B5F;
  --color-black: #373535;
  --color-red: #c53030;
  --color-orange: #D16A00;
  --color-grey-light: #DDDDDE;
  --color-background-white: #ffffee;
  --color-background-grey: #565B5F;
  --color-background-yellow: #FFC32D;
  --color-background-black: #212121;
  --color-text-white:#ffffffe5;
  --color-text-black:#373535;
  --color-text-grey: #666360;
  --color-container: #ededee;

}
`;
