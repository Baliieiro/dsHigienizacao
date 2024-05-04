import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    height: 100%;
  }
  :root{
    --background-color:rgba(34, 51, 59, 1)
  }
  a{
    color: #FFF;
  }
  
`;
