import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }
  :root{
    --background-color:#22333b
  }
  a{
    color: #FFF;
  }
  
`;
