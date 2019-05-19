import styled from "styled-components";

//Big light blue button
export const MainButton = styled.button`
    background-color: #2FB6E1;
    border: none;
    border-radius: 10px;
    bottom: ${props => (props.photo ? "2%" : "0%")}
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    color: white;
    font-family: "PT Sans";
    font-size: 32px;
    font-weight: bold;
    margin: ${props => (props.photo ? "0" : "1% 39%")}
    outline:none;
    padding: 15px 48px;
    position: ${props => (props.photo ? "absolute" : "relative")}
    width: 22%;
    
   :hover {
         opacity: 0.7;
         cursor:pointer;
    }
    
    @media only screen and (max-width: 800px) {
        width: 80%
        margin: ${props => (props.photo ? "0" : "5% 10%")}
    }
`;


