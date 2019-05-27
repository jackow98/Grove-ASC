import React from 'react'
import {withRouter} from "react-router-dom";
import {cognitoTheme} from "../../styling/authentication";
import {Authenticator} from "aws-amplify-react"

//Form for members to sign into account
class SignInForm extends React.Component {

    render() {
        return (
            <div>
                {this.props.authState === 'signIn' ?
                    <Authenticator
                        onStateChange={(authState) => console.log(authState)}
                        theme={cognitoTheme}
                    >
                    </Authenticator>
                    :
                    <div>
                        {() => this.props.history.push("/Members/Home")}
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(SignInForm);