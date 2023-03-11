import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Inter';
    max-width: 100vw;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: 'Inter';
    max-width: 540px;
    margin: 0 auto;
    font-family: 'Inter';
    overflow-x: hidden;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }

`
export { GlobalStyles }
