import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  body {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    background: #141628;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
