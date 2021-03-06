//GLOBAL STYLES

//IMPORTING
import { createGlobalStyle } from 'styled-components';

//GLOBAL STYLE
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html, body {
    overflow-x:hidden;
  }
`;

export default GlobalStyle;
