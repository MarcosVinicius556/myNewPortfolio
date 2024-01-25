import styled from "styled-components";

export const HeaderBar = styled.header`
    height: 7em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;


    
    & nav {
        -webkit-box-shadow: 0px 4px 14px -9px rgba(145,145,145,1);
        -moz-box-shadow: 0px 4px 14px -9px rgba(145,145,145,1);
        box-shadow: 0px 4px 14px -9px rgba(145,145,145,1);

        flex: 1;

        display: flex;
        justify-content: space-between;
        flex-direction: row;
        height: 100%;


    }
   
`;

export const NameContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: bold;

    width: 20%;
    
    & a {
        
        & span {
        font-size: 32px;
        height: 1em;
        color: #8400ff;
        }
    }
    
`;

export const ActionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1em;

    width: 65%;
    height: 100%;

    & ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;

        & li {
            font-size: .8em;
            margin: 0.5em;
            margin-left: 1.5em;  
            letter-spacing: 1px;
            font-weight: bold;
            & a {
                transition: all .3s ease-in-out;

                &:hover {
                color: #7d13e0;
                }
            }   
        }    
    }
`;

export const ContactButton = styled.div`
    background: #7d13e0;
    padding: .8em;
    transition: all .2s ease-in-out;

    border-radius: 10px;
    margin-left: 1em;
    cursor: pointer;
 
    & a{
        font-size: 1em;
        font-weight: bold;
        color: #ffffff;
        align-self: flex-end;
    }

    &:hover{
        background: #590e9e;
    }
`;