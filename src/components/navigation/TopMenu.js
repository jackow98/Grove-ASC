import React from "react";
import SideMenu from "./SideMenu";
import { TopMenuContainer } from "../../styling/menus";
import { LongNavyLogo, MenuBarsIcon, TextIcon } from "../../styling/icons";
import { withRouter } from "react-router-dom";

//Top menu bar fixed to top of all pages

class TopMenu extends React.Component {
  openSideMenu = () => {
    this.setState({ sideMenuOpen: true });
  };
  closeSideMenu = () => {
    this.setState({ sideMenuOpen: false });
  };

  constructor(props) {
    super(props);
    this.state = { sideMenuOpen: false };
  }

  render() {
    return (
      <TopMenuContainer>
        <SideMenu
          user={this.props.user}
          open={this.state.sideMenuOpen}
          closeSideMenu={() => this.closeSideMenu}
        />
        <MenuBarsIcon onClick={this.openSideMenu} />
        <LongNavyLogo onClick={() => this.props.history.push("/")} />
        <div />
      </TopMenuContainer>
    );
  }
}

export default withRouter(TopMenu);
