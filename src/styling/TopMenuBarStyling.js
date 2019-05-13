import styled from 'styled-components'
import logo from '../assets/GroveNavyLogoLong.png'
import menuBars from '../assets/MenuBars.svg'

export const TopMenuBar = styled.div`
    height: 4.64%;
    width: 90%;
    
    margin-top: 5%;
    margin-bottom: 5%;
    margin-right: 5%;
    margin-left: 5%;
    
    text-align: center; 
        
    display: flex;
    justify-content: space-between;
    background-color: #FFF;
`;

export const MainHeader = styled.h1`
    height: 7.17%;
    width: 85.65%;
    color: #000040;
    font-family: "Myriad Pro Light";
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
`;

export const LongNavyLogo = styled.img`
    
    height: 2.55%;
    width: 60%;
    
    margin-bottom: 5%;
    margin-top: 2%;

    content: url(${logo});
`;

export const MenuBarsIcon = styled.img`
  height: 2.55%;
  width: 10.00%;
  
  margin-bottom: 5%;
  margin-top: 5%;

  content: url(${menuBars});
`;
