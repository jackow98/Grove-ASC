import React from 'react'
import styled from 'styled-components'
import logo from '../assets/GroveNavyLogoLong.png'
import {Person} from 'styled-icons/octicons/Person'
import {MenuAltLeft} from "styled-icons/boxicons-regular/MenuAltLeft";
import SideNavBar from "./SideNavBar";

//Uses styled Components and styled icons to display top navigation bar
//TODO: Add functionality to menu icon
//TODO: Add functionality to avatar icon
//TODO: Add functionality to logo

export const Rectangle = styled.div`
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

export const LongNavyLogo = styled.img`
    height: 49.03px;
    margin: 2%;
    
    content: url(${logo});
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

class TopMenuBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sideMenuOpen: false };
    }

    openSideMenu = () =>{
        this.setState({sideMenuOpen: true})
    };

    closeSideMenu = () =>{
        this.setState({sideMenuOpen: false})
    };

    render() {
        return (
            <Rectangle>
                <SideNavBar open={this.state.sideMenuOpen} closeSideMenu = {() => this.closeSideMenu}/>
                <MenuBarsIcon onClick={this.openSideMenu}/>
                <LongNavyLogo/>
                <AvatarIcon/>
            </Rectangle>
        )
    }
        }

export default TopMenuBar