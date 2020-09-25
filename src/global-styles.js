﻿import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 html,body {
    font-family: 'Inter', Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: #333333;
    font-size: 16px;
  }`;

export default GlobalStyle;
