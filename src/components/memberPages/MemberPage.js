import React from 'react'
import {withRouter} from "react-router-dom";
import {Authenticator, Greetings, SignUp} from "aws-amplify-react";
import {API, Auth} from 'aws-amplify'
import {cognitoTheme} from "../../styling/authentication";
import Footer from "../navigation/Footer";
import TopMenu from "../navigation/TopMenu";
import {PageContainer} from "../../styling/pages";
import {MainButton} from "../../styling/buttons";
import connect from "react-redux/es/connect/connect";
import {loadUser} from "../../redux/actions";

//Container for all pages that can be viewed by members
class MemberPage extends React.Component {

    handleAuthStateChange = async (authState) => {

        if (authState === 'signedIn' && !(this.props.user)) {

            let currentUser = await Auth.currentAuthenticatedUser({
                bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
            }).then(user => {
                return user
            })
                .catch(err => console.log(err));


            console.log(currentUser.attributes.sub);
            let currentUserSub = currentUser.attributes.sub;
            this.get(currentUserSub)
            // this.post();
            // this.list();
        }

        this.setState({authState: authState})
    };

    post = async () => {
        console.log('calling api');
        const response = await API.post('groveRestapi', '/items', {
            body: {
                SASANumber: '6ba580db-c8a1-40b4-93b2-7e7ca64a31f4',
                forename: 'Jack'
            }
        });
        alert(JSON.stringify(response, null, 2));
    };

    get = async (currentUserSub) => {
        console.log('calling api');
        const response = await API.get('groveRestapi', '/items/object/6ba580db-c8a1-40b4-93b2-7e7ca64a31f4');
        alert(JSON.stringify(response, null, 2));
    };

    list = async () => {
        console.log('calling api');
        const response = await API.get('groveRestapi', '/items/1');
        alert(JSON.stringify(response, null, 2));
    };

    //TODO: Refactor to not require use of local state, this is a temporary fix but I feel there is a better way
    constructor(props) {
        super(props);
        this.state = {authState: undefined};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        //Renders aws cognito if not signed in otherwise displays content of member page
        if (this.state.authState === "signedIn") {
            return (
                <PageContainer>
                    <TopMenu user={"member"}/>
                    {this.props.children}
                    <Footer user={"member"}/>
                </PageContainer>
            )

        } else {
            return (
                <div>
                    <MainButton small onClick={() => this.props.history.push("/")}>
                        Back to visitor site
                    </MainButton>

                    {/*Diables sign up feature for users and applies custom theme*/}
                    <Authenticator
                        hide={[SignUp, Greetings]}
                        onStateChange={(authState) => this.handleAuthStateChange(authState)}
                        theme={cognitoTheme}
                    >
                    </Authenticator>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

export default withRouter(connect(mapStateToProps, {loadUser})(MemberPage))