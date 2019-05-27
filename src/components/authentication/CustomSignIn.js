import React from 'react'
import {
    Authenticator, SignIn, SignUp
} from "aws-amplify-react";
import {cognitoTheme} from "../../styling/authentication";
import {withRouter} from "react-router-dom";

class CustomSignIn extends React.Component {
    render() {
        return (
                <SignIn/>
        )
    }
}

export default withRouter(CustomSignIn)