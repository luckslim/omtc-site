import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font: 400 1rem Roboto , sans-serif;
        background-color: ${props=>props.theme['gray-800']};
        color:${props=>props.theme['gray-400']};
        -webkit-font-smoothing: antialiased;
    }
    :focus{
        outline:0;
        box-shadow: 0 0 0 2px transparent;
    }

`;