import React from 'react'
import SideMenu from "./SideMenu";
import {AvatarIcon, MenuBarsIcon, TopMenuContainer} from "../../styling/menus";
import {LongNavyLogo} from "../../styling/icons";

//Uses styled Components and styled icons to display top navigation bar
//TODO: Add functionality to avatar icon
//TODO: Add functionality to logo

class TopMenu extends React.Component {

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
            <TopMenuContainer>
                <SideMenu open={this.state.sideMenuOpen} closeSideMenu = {() => this.closeSideMenu}/>
                <MenuBarsIcon onClick={this.openSideMenu}/>
                <LongNavyLogo/>
                <AvatarIcon/>
            </TopMenuContainer>
        )
    }
        }

export default TopMenu