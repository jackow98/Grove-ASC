import styled from "styled-components";

export const SideMenuContainer = styled.div`
    height: 100%;
    width: ${props => props.open ? "100%;" : "0;"};
    position: fixed;
    z-index: 2;
  
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

export const TopMenuContainer = styled.div`
    height: 12%;
    width: 100%;
   
    z-index: 1;
    
    text-align: center; 
    display: flex;

    justify-content: space-between;
    clear: both;
  
    
    @media only screen and (max-width: 600px) {
        height: 10%;
    }
`;

export const FooterContainer = styled.div`
        height: 100%;
        width: 100%;
        z-index: 0;  
        background-color: #000040;
        display: flex;
        padding: 2% 0;
`;

//Links
export const MenuLinkList = styled.div`
    position: ${props => props.menuType === "SideMenu" ? "absolute" : "relative"};

    height: 80%
    width: 100%;
    
    bottom: 2%;
  
    background: #000040;
`;

export const MenuLink = styled.a`
    height: 3.6%;
    width: 30%;
    
    text-align: center;
    display: block;
    padding-top: ${props => props.menuType === "SideMenu" ? "8%" : "2%"};
    margin-left: 35%
    margin-right: 35%
    
    color: #A0DDF1;
    font-family: "PT Sans";
    font-size: ${props => props.menuType === "SideMenu" ? "48px" : "24px"};
    line-height: 24px;
    transition: 0.3s;
    
    :hover {
        cursor: pointer;
    }
    
    @media screen and (max-width: 600px) {
        padding-top: ${props => props.menuType === "SideMenu" ? "12%" : "6%"};
    }
    
    @media screen and (max-width: 800px) {
        width: 70%;
        margin-left: 15%
        margin-right: 15%
        padding-top: ${props => props.menuType === "SideMenu" ? "20%" : "10%"};
    }
    
`;

