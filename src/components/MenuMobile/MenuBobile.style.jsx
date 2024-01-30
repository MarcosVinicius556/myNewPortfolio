import styled from "styled-components";

export const Container = styled.div`

    position: absolute;
    backdrop-filter: blur(4px);
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

    & nav {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 80%;
        height: 80%;

        -webkit-box-shadow: 0px 0px 0px 0px rgba(145,145,145,1);
        -moz-box-shadow: 0px 0px 0px 0px rgba(145,145,145,1);
        box-shadow: 0px 0px 0px 0px rgba(145,145,145,1);

         & a {
            padding: 1.5em;
            width: 70%;
            height: 10%;
            text-align: center;
            font-size: 28px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .3s ease-in-out;
            border-radius: 5px;

            & + a {
                border-top: 1px solid gray;
            }

            &:hover {
                background: #7500e284;
            }
         }
    }

    & svg {
        position: absolute;
        top: 2rem;
        right: 2rem;
    }

`;