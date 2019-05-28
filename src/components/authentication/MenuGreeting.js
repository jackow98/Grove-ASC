import React from 'react'
import {AvatarIcon} from "../../styling/icons";
import {withRouter} from "react-router-dom";
import {Auth} from 'aws-amplify'
import connect from "react-redux/es/connect/connect";

//Renders conditionally the icon in top left of page depednding on user auth status
class MenuGreeting extends React.Component {
    render() {
        return (
            <div>
                {this.props.authState === "signIn" ?
                    <div>
                        Sign In
                    </div> :
                    <div onClick={() => Auth.signOut()}>
                        {this.props.user?this.props.user[0]['forename']:null}
                    </div>


                }
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

export default withRouter(connect(mapStateToProps, {})(MenuGreeting))