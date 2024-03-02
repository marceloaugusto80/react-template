import {createGlobalStyle} from "styled-components";
import "@fontsource/roboto";

export const GlobalStyle = createGlobalStyle`
    
    body {
        margin: 0px !important;
        padding: 0px !important;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 16px;
        background-color: ${p => p.theme.colors.background};
        color: ${p => p.theme.colors.foreground};
    }

    a {
        text-decoration: none;

        &:visited {
            color: unset;
        }
    }

    button {
        border-width: 0;
        border-radius: 2px;
        padding: 4px 8px;
        background-color: ${p => p.theme.colors.primary.main};
        color: ${p => p.theme.colors.primary.contrast};
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        &:disabled {
            opacity: 0.5;
            cursor: auto;
        }
    }

`;
