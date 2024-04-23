import React from "react";
import { FooterContainer } from "../../styling/menus";
import MenuLinkContainer from "./MenuLinkContainer";

//Footer with same contents as side menu
class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <MenuLinkContainer user={this.props.user} menuType="Footer" />
      </FooterContainer>
    );
  }
}

export default Footer;
