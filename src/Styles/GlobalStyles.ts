import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--background);
  }
  
  *, button, input {
    border: none;
    background: none;
    font-family: Nunito, sans-serif;
  }

  :root {
    --primary: #F6413D;

    --lightWhite: #ffffff;
    --white: #f0f0f0;
    --darkWhite: #D9D9D9;
    --darkerWhite: #bdbdbd;
    --lightGrey: #A9A9A9;
    --grey: #4d4d4d;
    --darkGrey: #303030;
    --darkerGrey: #2b2a2a;
    --background: #242424;
  }
`;