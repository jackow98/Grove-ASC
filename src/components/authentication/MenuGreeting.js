import React from 'react'
import {withRouter} from "react-router-dom";
import {Auth} from 'aws-amplify'
import connect from "react-redux/es/connect/connect";
import {loadUser} from "../../redux/actions";
import {getUser} from "../../accountHandling/restFunctions";
import {AuthButton} from "../../styling/buttons";

//Renders conditionally the icon in top left of page depednding on user auth status
class MenuGreeting extends React.Component {

    //Load in user and store in redux
    getCurrentUser = async () => {
        let currentUser = await Auth.currentAuthenticatedUser({
            bypassCache: false
        }).then(user => {
            return user
        })
            .catch(err => console.log(err));

        if (currentUser) {
            let currentUserSub = currentUser.attributes.sub;
            this.props.loadUser(await getUser(currentUserSub));
        }

    };

    renderIcons = () => {

        if (this.props.authState === "signIn") {
            return (
                <AuthButton onClick={() => this.props.history.push("/Members/Home")}>
                    Sign In
                </AuthButton>
            )
            //If public page reloaded and user isn't loaded, load details
        } else if (this.props.authState === "signedIn" && this.props.user === null) {
            this.getCurrentUser()
        } else if (this.props.user) {
            //TODO: Improve error checking for missing dynamo data for a user
            if (this.props.user[0]) {
                return (
                    <AuthButton onClick={() => this.props.history.push("/Members/Home")}>
                        {this.props.user ? this.props.user[0]['forename'] : null}
                    </AuthButton>
                )
            } else {
                return (
                    <AuthButton onClick={() => Auth.signOut()}>
                        Sign Out
                    </AuthButton>
                )
            }

        }
    };

    render() {
        return (
            <div>
                {this.renderIcons()}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

export default withRouter(connect(mapStateToProps, {loadUser})(MenuGreeting))