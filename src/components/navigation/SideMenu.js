import React from 'react'
import {CloseIcon, MenuLink, MenuLinkList, SideMenuContainer} from "../../styling/menus";

class SideMenu extends React.Component{
    render(){
        return(
            <SideMenuContainer open={this.props.open}>]
                <CloseIcon onClick = {this.props.closeSideMenu()}/>
                <MenuLinkList>
                    <MenuLink>
                        Home
                    </MenuLink>
                    <MenuLink>
                        About Us
                    </MenuLink>
                    <MenuLink>
                        Members
                    </MenuLink>
                    <MenuLink>
                        Contact Us
                    </MenuLink>
                </MenuLinkList>
             </SideMenuContainer>
        )
    }
}

export default SideMenu