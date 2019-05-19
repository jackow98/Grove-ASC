import styled from "styled-components";

export const SideMenuContainer = styled.div`
    background-color: #000040;
    display: flex;
    height: 100%;
    justify-content: space-between;
    overflow-x: hidden;
    padding-top: 2%;
    position: fixed;
    text-align: center; 
    transition: 0.5s;
    width: ${props => props.open ? "100%;" : "0;"};
    z-index: 2;
    
    @media screen and (max-height: 450px) {
        padding-top: 15px;
    }
`;

export const TopMenuContainer = styled.div`
    background: #FFFF;
    display: flex;
    clear: both;
    height: 12%;
    justify-content: space-between;
    position: fixed;
    text-align: center; 
    width: 100%;
    z-index: 1;
   
    @media only screen and (max-width: 800px) {
        height: 9%;
    }
   
    @media only screen and (max-width: 600px) {
        height: 10%;
    }
`;

export const FooterContainer = styled.div`
    background-color: #000040;
    display: flex;
    height: 100%;
    padding: 2% 0;
    width: 100%;
    z-index: 0;  
`;

//Links
export const MenuLinkList = styled.div`
    background: #000040;
    bottom: 2%;
    height: 80%
    position: ${props => props.menuType === "SideMenu" ? "absolute" : "relative"};
    width: 100%; 
`;

export const MenuLink = styled.a`
    color: #A0DDF1;
    display: block;
    font-family: "PT Sans";
    font-size: ${props => props.menuType === "SideMenu" ? "48px" : "24px"};
    line-height: 100%;
    margin-left: 35%
    margin-right: 35%
    padding-top: ${props => props.menuType === "SideMenu" ? "4%" : "1%"};
    text-align: center;
    transition: 0.3s;
    width: 30%;
       
    :hover {
        cursor: pointer;
    }
    
    @media screen and (max-width: 600px) {
        padding-top: ${props => props.menuType === "SideMenu" ? "12%" : "6%"};
    }
    
    @media screen and (max-width: 800px) {
        margin-left: 15%
        margin-right: 15%

        width: 70%;
    }
`;

