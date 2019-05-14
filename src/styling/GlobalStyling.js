import styled from "styled-components";

export const PageContent = styled.div`
    margin-top: 15%;
    
    @media only screen and (max-width: 800px) {
        margin-top: 20%;
    }
    
    @media only screen and (max-width: 600px) {
        margin-top: 25%;
    }
    
`;

export const MainHeader = styled.h1`
    margin: 50%;
    text-align: center;
    
    color: #000040;
    font-family: "Myriad Pro Light";
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
`;