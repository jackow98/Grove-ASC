import React from 'react'
import {CloseIcon, SideMenuContainer} from "../../styling/menus";
import {withRouter} from "react-router-dom";
import MenuLinkContainer from "./MenuLinkContainer";

//Side menu available on all pages
class SideMenu extends React.Component {
    render() {
        return (
            <SideMenuContainer open={this.props.open}>]
                <CloseIcon onClick={this.props.closeSideMenu()}/>
                <MenuLinkContainer menuType = "SideMenu"/>
            </SideMenuContainer>
        )
    }
}

export default withRouter(SideMenu)