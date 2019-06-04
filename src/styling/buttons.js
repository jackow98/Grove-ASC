import styled from "styled-components";

//Big light blue button
export const MainButton = styled.button`
    background-color: ${props => (props.red ? "red" : "#2FB6E1")};
    border: none;
    border-radius: 10px;
    bottom: ${props => (props.photo ? "2%" : "0%")}
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    color: #FFF;
    font-family: "PT Sans";
    font-size: ${props => (props.small ? '24px' : '32px')};
    font-weight: bold;
    margin: ${props => (props.photo ? "0" : "1% 36%")}
    outline:none;
    padding: 15px 48px;
    position: ${props => (props.photo ? "absolute" : "relative")}
    width: 28%;
    
   :hover {
         opacity: 0.7;
         cursor:pointer;
    }
    
    @media only screen and (max-width: 800px) {
        width: 80%
        margin: ${props => (props.photo ? "0" : "5% 10%")}
    }
`;


export const AuthButton = styled.div`

     font-size: 24px;
       color: #2FB6E1;
       font-weight: 700;
      :hover {
         opacity: 0.7;
         cursor:pointer;
    }
    
       @media screen and (max-width: 400px){
        font-size: 18px;
    }
`;