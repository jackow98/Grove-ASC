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
            "link": "/Members"
        },
        "Contact-Us": {
            "name": "Contact Us",
            "link": "/Contact-Us"
        }
    };

    memberPageItems = {
        "Home": {
            "name": "Home",
            "link": "/Members/Home"
        },
        "Timings": {
            "name": "Timings",
            "link": "/Members/Timings"
        },
        "Achievements": {
            "name": "Achievements",
            "link": "/Members/Achievements"
        },
        "TwentyMinSwims": {
            "name": "20 Min Swims",
            "link": "/Members/TwentyMinSwims"
        },
        "News": {
            "name": "News",
            "link": "/Members/News"
        },
        "PublicHome": {
            "name": "Visitor Site",
            "link": "/"
        }
    };

    renderLinks = () => {

        const menuItems = this.props.user === "public" ? this.publicPageItems : this.memberPageItems;

        return Object.values(menuItems).map((key, index) => {
            return (
                <MenuLink menuType={this.props.menuType} onClick={() => this.props.history.push(key.link)}>
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
