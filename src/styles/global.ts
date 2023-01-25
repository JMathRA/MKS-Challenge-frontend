import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body{
    overflow-x: hidden;
    -webkit-font-smoothing: antialised;
  };
  body, input textarea, button{
    font-family: Montserrat;
    font-weight: 400;
  };
  button {
    cursor: pointer;
  }
`