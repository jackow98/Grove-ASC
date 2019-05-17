import React from 'react'
import {CloseIcon, MenuLink, MenuLinkList, SideMenuContainer} from "../../styling/menus";
import {withRouter} from "react-router-dom";

class SideMenu extends React.Component {
    render() {
        return (
            <SideMenuContainer open={this.props.open}>]
                <CloseIcon onClick={this.props.closeSideMenu()}/>
                <MenuLinkList>
                    <MenuLink onClick={() => this.props.history.push("/")}>
                        Home
                    </MenuLink>
                    <MenuLink onClick={() => this.props.history.push("About-Us")}>
                        About Us
                    </MenuLink>
                    <MenuLink onClick={() => this.props.history.push("/Members")}>
                        Members
                    </MenuLink>
                    <MenuLink onClick={() => this.props.history.push("/Contact-Us")}>
                        Contact Us
                    </MenuLink>
                </MenuLinkList>
            </SideMenuContainer>
        )
    }
}

export default withRouter(SideMenu)