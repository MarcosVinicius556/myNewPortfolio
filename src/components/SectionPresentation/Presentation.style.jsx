import styled from "styled-components";
import PresentationBackground from '../../assets/img/PresentationBackground.jpg';
export const PresentationContent = styled.div`

    background: url(${PresentationBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    -webkit-box-shadow: inset 0px 4px 153px 45px rgba(0,0,0,1);
    -moz-box-shadow: inset 0px 4px 153px 45px rgba(0,0,0,1);
    box-shadow: inset 0px 4px 153px 45px rgba(0,0,0,1);

    height: 50em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5em;
        width: 15em;
        cursor: pointer;
        & a {
            margin-left: 1em;
            font-size: 15px;
            font-weight: bold;
            letter-spacing: 1px;
        }
        
        border-radius: 10px;
        background: #7d13e0;
        transition: all .3s ease-in-out;
        border: none;

        &:hover{
            background: #590e9e;
        }
    }

`;

export const PresentationText = styled.div`
    width: 100%;
    height: 50%;
    padding: 4em;
    & p {
        font-size: 4.5em;
        line-height: 1.5em;
        text-shadow: black -1px -1px;
    }

`;