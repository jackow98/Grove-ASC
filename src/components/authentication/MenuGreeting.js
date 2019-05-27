import React from 'react'
import {AvatarIcon, TextIcon} from "../../styling/icons";
import {withRouter} from "react-router-dom";
import {Auth} from 'aws-amplify'

class MenuGreeting extends React.Component {
    render() {
        return (
            <TextIcon>
                {this.props.authState === "signIn" ?
                    <div>
                        Sign In
                    </div> :
                    <AvatarIcon onClick={() => Auth.signOut()}/>
                }
            </TextIcon>

        )
    }
}

export default withRouter(MenuGreeting)