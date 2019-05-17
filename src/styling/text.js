import styled from "styled-components";

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

export const OverlayHeader = styled.h2`
    text-align: center;
   
    opacity: 0.8;
    color: #FFF;
    font-family: "Myriad Pro Light";
    font-size: 72px;
    font-weight: 700;
    line-height: 72px;    
`;