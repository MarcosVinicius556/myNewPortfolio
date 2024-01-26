import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        color: #fff;
        font-family: "Nunito", sans-serif;
    }
    
    body{
        background: #1b1b1b;
        & a {
                    text-decoration: none;
            }
    }

    section {
        height: 100vh;
    }

`;