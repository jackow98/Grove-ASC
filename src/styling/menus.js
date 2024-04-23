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
  transition: 0.3s;
  width: ${(props) => (props.open ? "100%;" : "0;")};
  z-index: 2;

  @media screen and (max-height: 450px) {
    padding-top: 15px;
  }
`;

export const TopMenuContainer = styled.div`
  background: #ffff;
  display: flex;
  clear: both;
  justify-content: space-between;
  position: fixed;
  text-align: center;
  width: 100%;
  height: 70px;
  z-index: 1;
`;

export const returnToMainsite = styled.div`
  background: #000040;
  display: flex;
  clear: both;
  justify-content: space-between;
  position: fixed;
  text-align: center;
  width: 100%;
  height: 70px;
  z-index: 1;
`;

export const FooterContainer = styled.div`
  background-color: #000040;
  display: flex;
  height: 100%;
  padding: 2% 0;
  width: 100%;
  z-index: 0;
`;

export const SlidingMenuContainer = styled.div`
  align-items: center;
  background-color: #ffff;
  display: flex;
  height: 45px;
  margin: 3.5%;
  text-align: center;
  width: 93%;
`;

export const SliderText = styled.div`
  background-color: #fff;
  border-bottom: ${(props) =>
    props.selected ? "5px solid #2FB6E1" : "1px solid #2FB6E1"};
  display: flex;
  font-family: "PT Sans";
  font-size: 24px;
  height: 35px;
  justify-content: center;
  line-height: 24px;
  margin: 2%;
  text-align: center;
  text-decoration: none;
  color: #2fb6e1;
  width: 45%;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

//Links
export const MenuLinkList = styled.div`
    background: #000040;
    bottom: 2%;
    height: 80%
    position: ${(props) =>
      props.menuType === "SideMenu" ? "absolute" : "relative"};
    width: 100%; 
`;

export const MenuLink = styled.a`
    color: #A0DDF1;
    display: block;
    font-family: "PT Sans";
    font-size: ${(props) => (props.menuType === "SideMenu" ? "24px" : "24px")};
    line-height: 100%;
    margin-left: 35%;
    margin-right: 35%;
    padding-top: ${(props) => (props.menuType === "SideMenu" ? "4%" : "1%")};
    text-align: center;
    width: 30%;
       
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
    
    @media screen and (max-width: 600px) {
        padding-top: ${(props) =>
          props.menuType === "SideMenu" ? "10%" : "6%"};
    }
    
    @media screen and (max-width: 800px) {
        font-size: ${(props) =>
          props.menuType === "SideMenu" ? "24px" : "24px"};
        margin-left: 15%
        margin-right: 15%

        width: 70%;
    }
`;
