import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,800;1,400;1,500&display=swap');

    *, html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: -0.5px;
        font-family: 'Montserrat', sans-serif;
    }

    body {
      background-color: #F2F2F2;
    }

    :root {
      font-size: 10px;
    }
`;
export default GlobalStyle;
