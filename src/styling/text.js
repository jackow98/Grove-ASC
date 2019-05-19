import styled from "styled-components";

export const MainHeader = styled.h1`
    color: ${props => (props.white ? "#FFFFFF" : "#000040")}
    font-family: "PT Sans";
    font-size: 54px;
    font-weight: bold;
    margin: ${props => (props.left ? "5% 0 3% 0" : "5%")}
    line-height: 48px;
    text-align: ${props => (props.left ? "left" : "center")}
    
    @media only screen and (max-width: 600px) {
        font-size: 48px;
    }
    
    @media only screen and (max-width: 400px) {
        font-size: 32px;
    }
`;


export const SecondaryHeader = styled.h2`
    color: ${props => (props.white ? "#FFFFFF" : "#000040")}
    display: flex;
    font-family: "PT Sans";
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;    
    margin 1%;
    text-align: ${props => (props.left ? "left" : "center")}
`;

export const OverlayHeader = styled.h3`
    color: #FFF;
    font-family: "PT Sans";
    font-size: 72px;
    font-weight: 700;
    line-height: 72px;   
    opacity: 0.8;
    text-align: center;
   
    @media only screen and (max-width: 800px) {
        font-size: 56px;
        line-height: 56px;   
    } 
`;

export const Description = styled.p`
    align-items: left;
    color: #000040;
    display: flex;
    font-family: "PT Sans";
    font-size: ${props => (props.small ? "18px" : "24px")}
    height: 100%;
    justify-content: left;
    line-height: 24px;    
    margin: ${props => (props.small ? "4%" : "0")}
    text-align: left;
    width: ${props => (props.small ? "40%" : "100%")} ;

    @media only screen and (max-width: 800px) {
        font-size: ${props => (props.small ? "14px" : "20px")}
        margin: 0%;
        text-align: ${props => (props.small ? "center" : "left")}
        width: 93%;
    }
`;

export const InputLabel = styled.label`
    color: ${props => (props.white ? "#FFFFFF" : "#000040")}
    display: flex;
    font-family: "PT Sans";
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;    
    margin 1%;
    text-align: ${props => (props.left ? "left" : "center")}
    width: 20%
`;