import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  #droppable div { 
    opacity: 100%;

   }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }

`
export { GlobalStyles }
