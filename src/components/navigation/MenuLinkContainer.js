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
            "name": "About the club",
            "link": "/About-us"
        },
        "Members": {
            "name": "Member Home",
            "link": "/Members/Home"
        },
        "Contact-Us": {
            "name": "Contact Us",
            "link": "/Contact-Us"
        }
    };

    memberPageItems = {
        "MemberHome": {
            "name": "Member Home",
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
        "News": {
            "name": "News",
            "link": "/Members/News"
        },
        "Calendar": {
            "name": "Calendar",
            "link": "/Members/Calendar"
        },
        "20 Min Swims": {
            "name": "20 Min Swims",
            "link": "/Members/TwentyMinSwims"
        },
        "Account": {
            "name": "Account",
            "link": "/Members/Account"
        }

    };

    handLeLinkClick = (key) => {
        //TODO: Make this close side bar if currently on that page
        //Reloads page if user is currently viewing that page
        // if (this.props.location.pathname === key.link) {
        //     window.location.reload();
        // } else {
            this.props.history.push(key.link)
        // }
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
