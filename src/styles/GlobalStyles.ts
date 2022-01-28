import { createGlobalStyle } from "styled-components";

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
  }
  body{
    background: #fefefe;
    min-height: 100vh;
    width: 100%;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

export { GlobalStyle };
