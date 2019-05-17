import styled from "styled-components";

export const MainHeader = styled.h1`
    margin: ${props => (props.left ? "5% 0 3% 0" : "5%")}
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

export const OverlayHeader = styled.h3`
    text-align: center;
   
    opacity: 0.8;
    color: #FFF;
    font-family: "Myriad Pro Light";
    font-size: 72px;
    font-weight: 700;
    line-height: 72px;    
`;

export const SecondaryHeader = styled.h2`
    text-align: center;
    color: #FFF;
    font-family: "Myriad Pro Light";
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;    
    margin 2%
`;

export const Description = styled.p`
    height: 100%;
    width: 100%;
    color: #000040;
    font-family: "Myriad Pro Light";
    font-size: 24px;
    line-height: 24px;    
    text-align: left;
`;