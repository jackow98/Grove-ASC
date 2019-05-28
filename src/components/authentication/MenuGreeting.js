import React from 'react'
import {AvatarIcon} from "../../styling/icons";
import {withRouter} from "react-router-dom";
import {Auth} from 'aws-amplify'

//Renders conditionally the icon in top left of page depednding on user auth status
class MenuGreeting extends React.Component {
    render() {
        return (
            <div>
                {this.props.authState === "signIn" ?
                    <div>
                        Sign In
                    </div> :
                    <AvatarIcon onClick={() => Auth.signOut()}/>
                }
            </div>

        )
    }
}

export default withRouter(MenuGreeting)