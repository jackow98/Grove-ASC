import styled from "styled-components";
import logo from "../assets/GroveNavyLogoLong.png";
import {Close} from "styled-icons/evil/Close";
import {MenuAltLeft} from "styled-icons/boxicons-regular/MenuAltLeft";
import {Person} from "styled-icons/material/Person";
import {Document} from "styled-icons/typicons/Document";


export const LongNavyLogo = styled.img`
    content: url(${logo});
    height: 50px;
    width: auto;
    margin: 10px 0 10px 0;
   
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
    
    @media screen and (max-width: 400px){
        height: 40px;
        margin: 15px 0 15px 0;
    }

`;

export const LabelIcon = styled(Document)`
    color: #2FB6E1;
    height: 80%;  
    width: 20%;
`;


export const CloseIcon = styled(Close)`  
    color: #FFFF;
    height: 49.03px;
    margin: 3%;
    position: absolute;
    width: 49.03px;
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;
export const MenuBarsIcon = styled(MenuAltLeft)`  
    color: #000040;
    height: 50px;
    width: auto;
    margin: 10px 0 10px 20px;    
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

//Icon to be used once user is logged in
export const AvatarIcon = styled(Person)`
    color: #000040;
    height: 49.03px;
    
    width: 49.03px; 
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

//Icon for displaying a short text
export const TextIcon = styled.div`
    color: ${props => (props.white ? "#FFFFFF" : "#000040")}
    font-family: "PT Sans";
   
    height: 50px;
    width: auto;
    line-height: 50px;
    margin: 10px 20px 10px 0;
    border-radius: 10px;
    
    text-align: ${props => (props.left ? "left" : "center")}
    
     
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;