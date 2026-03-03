import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;

        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: #C8CBD2;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100vh;
    }
`;
