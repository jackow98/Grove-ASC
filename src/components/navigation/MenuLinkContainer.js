import React from "react";
import {MenuLink, MenuLinkList} from "../../styling/menus";
import {withRouter} from "react-router-dom";

//Generic container used in footer and side menu with a link to each page rendered differently for logged in users
class MenuLinkContainer extends React.Component {

    publicPageItems = {
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
            "link": "/Members/Home"
        },
        "Contact-Us": {
            "name": "Contact Us",
            "link": "/Contact-Us"
        }
    };

    memberPageItems = {
        "MemberHome": {
            "name": "Member home",
            "link": "/Members/Home"
        },
        "Contact-Us": {
            "name": "Contact Us",
            "link": "/Contact-Us"
        },
        "PublicHome": {
            "name": "Visitor site",
            "link": "/"
        }
    };

    handLeLinkClick = (key) => {
        //Reloads page if user is currently viewing that page
        if(this.props.location.pathname = key){
            window.location.reload();
        }else{
            this.props.history.push(key.link)
        }
    };

    renderLinks = () => {

        const menuItems = this.props.user === "public" ? this.publicPageItems : this.memberPageItems;

        return Object.values(menuItems).map((key, index) => {
            return (
                <MenuLink
                    menuType={this.props.menuType}
                    key={index}
                    onClick={() => this.handLeLinkClick(key)}
                >
                    {key.name}
                </MenuLink>
            )
        })
    };

    render() {
        return (
            <MenuLinkList menuType={this.props.menuType}>
                {this.renderLinks()}
            </MenuLinkList>
        )
    }
}

export default withRouter(MenuLinkContainer)
