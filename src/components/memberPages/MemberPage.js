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
import testUsers from "../../assets/testUsers"

//Container for all pages that can be viewed by members
class MemberPage extends React.Component {

    handleAuthStateChange = async (authState) => {

        //If user signs in for first time, retrieve data from database and store in redux
        if (authState === 'signedIn' && !(this.props.user)) {

            let currentUser = await Auth.currentAuthenticatedUser({
                bypassCache: false
            }).then(user => {
                return user
            })
                .catch(err => console.log(err));

            let currentUserSub = currentUser.attributes.sub;
            this.props.loadUser(await this.get(currentUserSub))

            //If user signs out, remove data from redux
        } else if (authState === 'signIn' && this.props.user) {
            this.props.loadUser(null)
        }

        console.log(this.props.user);
        this.setState({authState: authState})
    };

    //Gets record of currently logged in user using rest api
    get = async (currentUserSub) => {
        console.log('calling api');
        const response = await API.get('groveRestapi', `/items/${currentUserSub}`);
        return response
    };

    //TODO: Remove post functionality, test purposes only
    post = async (user) => {
        console.log(user);
        console.log('calling api');
        const response = await API.post('groveRestapi', '/items', {
            body: user
        });
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
                    <button onClick={() => {
                        this.post(testUsers[1])
                    }}>POST
                    </button>
                </PageContainer>
            )

        } else {
            return (
                <div>
                    <MainButton small onClick={() => this.props.history.push("/")}>
                        Back to visitor site
                    </MainButton>

                    {/*Disables sign up feature for users and applies custom theme*/}
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