import styled from "styled-components";
import logo from "../assets/GroveNavyLogoLong.png";
import {Close} from "styled-icons/evil/Close";
import {MenuAltLeft} from "styled-icons/boxicons-regular/MenuAltLeft";
import {Person} from "styled-icons/material/Person";


export const LongNavyLogo = styled.img`
    height: 49.03px;
    margin: 2%;
    
    content: url(${logo});
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

export const LabelIcon = styled(Document)`
    width: 20%;
    height: 80%;  
    color: #2FB6E1;
`;


export const CloseIcon = styled(Close)`  
    width: 49.03px;
    height: 49.03px;
    margin: 3%;
    color: #FFFF;
    
    position: absolute;
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;
export const MenuBarsIcon = styled(MenuAltLeft)`  
    width: 49.03px;
    height: 49.03px;
    margin: 2%;
    
    color: #000040;
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

//Icon to be used once user is logged in
export const AvatarIcon = styled(Person)`
    width: 49.03px;
    height: 49.03px;
    margin: 2%;
    
    color: #000040;
`;

//Icon for displaying a short text
export const TextIcon = styled.p`
    width: 49.03px;
    height: 49.03px;
    margin: 2%;
    
    color: #000040;
    
    text-align: ${props => (props.left ? "left" : "center")}
    color: ${props => (props.white ? "#FFFFFF" : "#000040")}
    font-family: "PT Sans";
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;    
 
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
    
    @media screen and (max-width: 800px) {
        font-size: 18px;
        line-height: 18px;  
        margin: 4%;
    }
`;