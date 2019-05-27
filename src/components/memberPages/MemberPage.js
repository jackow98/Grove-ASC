import React from 'react'
import {withRouter} from "react-router-dom";
import {Authenticator, Greetings, SignUp, withAuthenticator} from "aws-amplify-react";
import {cognitoTheme} from "../../styling/authentication";
import Footer from "../navigation/Footer";
import TopMenu from "../navigation/TopMenu";
import {PageContainer} from "../../styling/pages";
import {MainButton} from "../../styling/buttons";

//Container for all pages that can be viewed by members
class MemberPage extends React.Component {

    //TODO: Refactor to not require use of local state, this is a temporary fix but I feel there is a better way
    constructor(props) {
        super(props);
        this.state = {authState: undefined};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        if(this.state.authState === "signedIn") {
            return (
                <PageContainer>
                    <TopMenu user={"member"}/>
                    {this.props.children}
                    <Footer user={"member"}/>
                </PageContainer>
            )

        }else {
            return (
                <div>
                    <MainButton small onClick = {() => this.props.history.push("/")}>
                        Back to visitor site
                    </MainButton>

                    <Authenticator
                        hide={[SignUp, Greetings]}
                        onStateChange={(authState) => this.setState({authState: authState})}
                        theme={cognitoTheme}
                    >
                    </Authenticator>
                </div>

            )
        }
    }
}

export default withRouter(MemberPage)