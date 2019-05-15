import styled from "styled-components";

export const PageContent = styled.div`
    margin-top: 8%;
    
    @media only screen and (max-width: 800px) {
        margin-top: 14%;
    }
    
    @media only screen and (max-width: 600px) {
        margin-top: 20%;
    }
    
`;

export const MainHeader = styled.h1`
    margin: 5%;
    text-align: center;
    
    color: #000040;
    font-family: "Myriad Pro Light";
    font-size: 54px;
    font-weight: bold;
    line-height: 48px;
    
    @media only screen and (max-width: 600px) {
        font-size: 48px;
    }
`;