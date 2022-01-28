import { createGlobalStyle } from "styled-components";
import vars from "./vars";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
    font-family: ${vars.pr_font};
    cursor: pointer;
  }
  body{
    background: #fefefe;
    min-height: 100vh;
    width: 100%;
    font-family: ${vars.pr_font};
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  input {
    border: 0;
    outline: none;
  }
`;

export { GlobalStyle };
