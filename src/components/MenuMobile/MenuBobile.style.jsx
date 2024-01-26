import styled from "styled-components";

export const Container = styled.div`

    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgb(0,0,0);
    background: linear-gradient(32deg, rgba(0,0,0,0.819304435483871) 51%, rgba(235,0,255,0.46123991935483866) 99%);

    & svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

`;