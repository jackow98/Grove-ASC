import React from 'react'
import {FooterContainer} from "../../styling/menus";
import MenuLinkContainer from "./MenuLinkContainer";

//TODO: Fix padding

//Footer with same contents as side menu
class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <MenuLinkContainer menuType="Footer"/>
            </FooterContainer>
        )
    }
}

export default Footer
