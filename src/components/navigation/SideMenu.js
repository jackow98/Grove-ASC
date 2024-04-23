import React from "react";
import { SideMenuContainer } from "../../styling/menus";
import { withRouter } from "react-router-dom";
import MenuLinkContainer from "./MenuLinkContainer";
import { CloseIcon } from "../../styling/icons";

//Side menu available on all pages
class SideMenu extends React.Component {
  render() {
    return (
      <SideMenuContainer open={this.props.open}>
        <CloseIcon onClick={this.props.closeSideMenu()} />
        <MenuLinkContainer user={this.props.user} menuType="SideMenu" />
      </SideMenuContainer>
    );
  }
}

export default withRouter(SideMenu);
