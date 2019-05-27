import styled from "styled-components";
import logo from "../assets/GroveNavyLogoLong.png";
import {Close} from "styled-icons/evil/Close";
import {MenuAltLeft} from "styled-icons/boxicons-regular/MenuAltLeft";
import {Person} from "styled-icons/material/Person";
import {Document} from "styled-icons/typicons/Document";


export const LongNavyLogo = styled.img`
    content: url(${logo});
    height: 49.03px;
    margin: 2%;
   
    :hover {
        cursor: pointer;
        opacity: 0.7;
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
    height: 49.03px;
    margin: 2%;
    width: 49.03px;
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

//Icon to be used once user is logged in
export const AvatarIcon = styled(Person)`
    color: #000040;
    height: 49.03px;
    margin: 2%;
    width: 49.03px;
`;

//Icon for displaying a short text
export const TextIcon = styled.p`
    color: ${props => (props.white ? "#FFFFFF" : "#000040")}
    font-family: "PT Sans";
    font-size: 24px;
    font-weight: 700;
    height: 49.03px;
    line-height: 24px;    
    margin: 2.5% 2%;
    text-align: ${props => (props.left ? "left" : "center")}
    width: 80.03px;
     
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
    
    @media screen and (max-width: 800px) {
        font-size: 16px;
        line-height: 16px;  
        margin: 4% 0;
    }
`;