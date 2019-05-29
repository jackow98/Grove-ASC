import React from 'react'
import {withRouter} from "react-router-dom";
import {Authenticator, Greetings, SignUp} from "aws-amplify-react";
import {Auth} from 'aws-amplify'
import {cognitoTheme} from "../../styling/authentication";
import Footer from "../navigation/Footer";
import TopMenu from "../navigation/TopMenu";
import {PageContainer} from "../../styling/pages";
import {MainButton} from "../../styling/buttons";
import connect from "react-redux/es/connect/connect";
import {loadUser} from "../../redux/actions";
import testUsers from "../../assets/testUsers"
import {getUser} from "../../accountHandling/restFunctions";

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
            this.props.loadUser(await getUser(currentUserSub))

            //If user signs out, remove data from redux
        } else if (authState === 'signIn' && this.props.user) {
            this.props.loadUser(null)
        }

        this.setState({authState: authState})
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
                        this.postUser(testUsers[1])
                    }}>postUser
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