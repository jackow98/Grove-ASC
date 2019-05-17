import React from "react";
import {MenuLink, MenuLinkList} from "../../styling/menus";
import {withRouter} from "react-router-dom";

//Generic container used in footer and side menu with a link to each public page
class MenuLinkContainer extends React.Component{

    menuItems = {
        "Home": {
            "name": "Home",
            "link": "/"
        },
        "About-Us": {
            "name": "About Us",
            "link": "/About-us"
        },
        "Members": {
            "name": "Members",
            "link": "/Members"
        },
        "Contact-Us": {
            "name": "Contact-Us",
            "link": "/Contact-Us"
        }
    };

    renderLinks = () =>{
      return Object.values(this.menuItems).map((key, index) => {
          return(
              <MenuLink menuType = {this.props.menuType} onClick={() => this.props.history.push(key.link)}>
                  {key.name}
              </MenuLink>
          )
      })
    };

    render(){
        return(
            <MenuLinkList menuType = {this.props.menuType}>
                {this.renderLinks()}
            </MenuLinkList>
        )
    }
}

export default withRouter(MenuLinkContainer)
