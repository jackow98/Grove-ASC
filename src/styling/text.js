import styled from "styled-components";

export const MainHeader = styled.h1`
    color: ${props => (props.white ? "#FFFFFF" : "#000040")}
    font-family: "PT Sans";
    font-size: 54px;
    font-weight: bold;
    flex: 1 1 100%;
    margin: ${props => (props.left ? "3% 0 1% 0" : "5%")}
    line-height: 54px;
    text-align: ${props => (props.left ? "left" : "center")}
    
    @media only screen and (max-width: 1024px) {
        font-size: 32px;
    }
    
    @media only screen and (max-width: 980px) {
        font-size: 32px;
    }
    
    @media only screen and (max-width: 800px) {
        font-size: 48px;
    }
    
    @media only screen and (max-width: 540px) {
        font-size: 32px;
    }
    
    @media only screen and (max-width: 270px) {
        font-size: 18px;
    }
`;


export const SecondaryHeader = styled.h2`
    
    color: ${props =>
    (props.color === 'blue' && '#2FB6E1') ||
    (props.color === 'white' && '#FFFFFF') ||
    (props.color === 'navy' && '#000040')
    }
    
    display: flex;
    font-family: "PT Sans";
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;    
    margin 1%;
    text-align: ${props => (props.left ? "left" : "center")}
`;

export const TertiaryHeader = styled.h3`
    color: ${props => (props.white ? "#FFFFFF" : "#000040")};
    display: flex;
    font-family: "PT Sans";
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;    
    margin: ${props => (props.left ? "1.5%" : "10%")};
    text-align: ${props => (props.left ? "left" : "center")};
    justify-content: center;
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
        font-size: 52px;
        line-height: 56px;   
    } 
    
    @media only screen and (max-width: 600px) {
        font-size: 48px;
        line-height: 48px;   
    } 
`;

export const Description = styled.p`
    align-items: ${props => (props.center ? "center" : "left")};
    color: #000040;
    display: flex;
    font-family: "PT Sans";
    font-size: ${props => (props.small ? "18px" : "24px")}
    height: 100%;
    justify-content: center;
    line-height: 24px;    
    margin: ${props => (props.small ? "4%" : "0")}
    text-align: left;
    text-decoration: none;
    width: ${props => (props.small ? "40%" : "100%")} ;

    @media only screen and (max-width: 800px) {
        font-size: ${props => (props.small ? "14px" : "20px")}
        margin: 0%;
        text-align: ${props => (props.small ? "center" : "left")}
        width: 93%;
    }
    
    @media only screen and (max-width: 400px) {
        font-size: ${props => (props.small ? "10px" : "18px")}
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
    
    @media only screen and (max-width: 800px) {
        font-size: 18px;
        line-height: 18px;   
     
    }
`;

export const SimpleLink = styled.a`
    text-decoration: none;
    color: #2FB6E1;
`;