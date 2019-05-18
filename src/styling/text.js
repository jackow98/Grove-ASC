import styled from "styled-components";

export const MainHeader = styled.h1`
    margin: ${props => (props.left ? "5% 0 3% 0" : "5%")}
    text-align: ${props => (props.left ? "left" : "center")}
    
    color: ${props => (props.white ? "#FFFFFF" : "#000040")}
    font-family: "Myriad Pro Light";
    font-size: 54px;
    font-weight: bold;
    line-height: 48px;
    
    @media only screen and (max-width: 600px) {
        font-size: 48px;
    }
    
    @media only screen and (max-width: 400px) {
        font-size: 32px;
    }
`;


export const SecondaryHeader = styled.h2`
    text-align: ${props => (props.left ? "left" : "center")}
    color: ${props => (props.white ? "#FFFFFF" : "#000040")}
    font-family: "Myriad Pro Light";
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;    
    margin 1%;
    display: flex;
`;

export const OverlayHeader = styled.h3`
    text-align: center;
   
    opacity: 0.8;
    color: #FFF;
    font-family: "Myriad Pro Light";
    font-size: 72px;
    font-weight: 700;
    line-height: 72px;   
    
    @media only screen and (max-width: 800px) {
        font-size: 56px;
        line-height: 56px;   
    } 
`;

export const Description = styled.p`
    height: 100%;
  
    width: ${props => (props.small ? "40%" : "99%")} ;
    color: #000040;
    font-family: "Myriad Pro Light";
    font-size: ${props => (props.small ? "18px" : "24px")}
    margin: ${props => (props.small ? "4%" : "0")}
    line-height: 24px;    
    text-align: left;
    display: flex;

    justify-content: center;
    align-items: center;
    
    @media only screen and (max-width: 800px) {
        width: 100%;
        margin: 0%;
        text-align: ${props => (props.small ? "center" : "left")}
        font-size: ${props => (props.small ? "14px" : "24px")}
    }
`;

export const InputLabel = styled.label`
    text-align: ${props => (props.left ? "left" : "center")}
    color: ${props => (props.white ? "#FFFFFF" : "#000040")}
    font-family: "Myriad Pro Light";
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;    
    margin 1%;
    display: flex;
    width: 20%
`;