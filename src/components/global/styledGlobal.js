import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  body {
      margin: 0;
      color: #1C383C;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6, p {
      margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #1C383C;
  }
`;