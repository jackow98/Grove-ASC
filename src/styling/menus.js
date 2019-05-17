import styled from "styled-components";
import {Close} from "styled-icons/evil";
import {MenuAltLeft} from "styled-icons/boxicons-regular";
import {Person} from "styled-icons/octicons";

export const SideMenuContainer = styled.div`
    height: 100%;
    width: ${props => props.open ? "100%;" : "0;"};
    position: fixed;
    z-index: 20;
    
    top: 0;
    left: 0;
    background-color: #000040;
    
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 2%;
    
    text-align: center; 
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-height: 450px) {
        padding-top: 15px;
    }
`;


export const MenuLinkList = styled.div`
    height: 80%
    width: 100%;
    
    position: absolute;
    bottom: 2%;
  
    background: #000040;
`;

export const MenuLink = styled.a`
    height: 3.6%;
    width: 30%;
    
    text-align: center;
    display: block;
    padding-top: 8%
    margin-left: 35%
    margin-right: 35%
    
    color: #A0DDF1;
    font-family: "Myriad Pro Light";
    font-size: 48px;
    line-height: 24px;
    transition: 0.3s;
    
    :hover {
        cursor: pointer;
    }
    
    @media screen and (max-width: 600px) {
        padding-top: 12%
    }
    
    @media screen and (max-width: 800px) {
        width: 70%;
        margin-left: 15%
        margin-right: 15%
        padding-top: 20%
    }
    
`;

export const TopMenuContainer = styled.div`
    height: 12%;
    width: 100%;
    top: 0
    z-index: 10;
    
    text-align: center; 
    display: flex;
    justify-content: space-between;
    position: fixed;
    clear: both;
    
    background-color: #FFF;
    
    @media only screen and (max-width: 600px) {
        height: 10%;
    }
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

export const AvatarIcon = styled(Person)`
    width: 49.03px;
    height: 49.03px;
    margin: 2%;
    
    color: #000040;
`;