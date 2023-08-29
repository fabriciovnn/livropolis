import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: -0.5px
    }

    body {
      background-color: #F2F2F2;
    }

    :root {
      font-size: 10px;
    }
`;
export default GlobalStyle;
