import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import SpineSansRegWoff from '../../vendor/fonts/SplineSans-Regular.woff';
import SpineSansRegWoff2 from '../../vendor/fonts/SplineSans-Regular.woff2';
import SpineSansBoldWoff from '../../vendor/fonts/SplineSans-Bold.woff';
import SpineSansBoldWoff2 from '../../vendor/fonts/SplineSans-Bold.woff2';
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Spline Sans';
    font-weight: 400;
    src: local('Spline Sans'),
    url(${SpineSansRegWoff}) format('woff'),
    url(${SpineSansRegWoff2}) format('woff2');
  }
  
  @font-face {
    font-family: 'Spline Sans';
    font-weight: 700;
    src: local('Spline Sans'),
    url(${SpineSansBoldWoff}) format('woff'),
    url(${SpineSansBoldWoff2}) format('woff2');
  }

  html {
    box-sizing: border-box;
  }

  body {
      margin: 0;
      font-family: 'Spline Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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