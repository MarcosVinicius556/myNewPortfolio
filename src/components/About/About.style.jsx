import styled from "styled-components";

export const AboutSection = styled.section`

    height: 100vh;
    width: 100%;
    margin-bottom: 1em;

    & h1 {
        width: 100%;
        text-align: center;
        line-height: 2em;
        font-size: 40px;
        font-weight: bold;
        letter-spacing: 1px;
    }
`;

export const CardsContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 1em;
`;

export const AboutCard = styled.div`

    border: 2px solid yellow;
    width: 100%;
    height: 350px;
    margin-bottom: 1em;
    display: flex;
    padding: 1em;
    justify-content: space-around;

    & img {
        border: 2px solid purple;
        width: 40%;
    }

    & div {
        border: 2px solid violet;
        & h2 {
            border: 2px solid green;
            text-align: center;
            font-size: 28px;
            font-weight: bold;
            letter-spacing: 1px;
        }

        & p {
            border: 2px solid pink;
            padding: 1em;
        }
    }

`;

