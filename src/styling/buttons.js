import styled from "styled-components";

//Big light blue button
export const MainButton = styled.button`
    padding: 15px 48px;
    border: none;
    position: ${props => (props.photo ? "absolute" : "relative")}
    bottom: ${props => (props.photo ? "2%" : "0%")}
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    border-radius: 10px;
    outline:none;
    
    background-color: #2FB6E1;
    color: white;
    
    font-family: "Myriad Pro Light";
    font-weight: bold;
        
    text-decoration: none;
    font-size: 32px;
    
    width: 22%;
    margin: ${props => (props.photo ? "0" : "1% 39%")}
        
   :hover {
         opacity: 0.7;
         cursor:pointer;
    }
    
    @media only screen and (max-width: 800px) {
        width: 80%
        margin: ${props => (props.photo ? "0" : "5% 10%")}
    }
`;