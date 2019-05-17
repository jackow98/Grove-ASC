import styled from "styled-components";

export const MainHeader = styled.h1`
    margin: ${props => (props.left ? "5% 0 5% 0" : "5%")}
    text-align: ${props => (props.left ? "left" : "center")}
    
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

export const Description = styled.p`
    height: 211.84px;
    width: 329px;
    color: #000040;
    font-family: "Myriad Pro Light";
    font-size: 24px;
    line-height: 24px;    
`;