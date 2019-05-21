import React from 'react'
import {InputLabel} from "../../styling/text";
import {Form, FormContainer, TextInput} from "../../styling/forms";
import {MainButton} from "../../styling/buttons";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {loadUser} from "../../redux/actions/index";
// import {getSwimmer} from "../../../backEnd/dynamo/members";

//Form for members to sign into account
class SignInForm extends React.Component {

    attemptSignIn = async () => {
        // try {
        //     let user = await getSwimmer("adb6d014-b6f8-4411-b765-8c7a058d4acb");
        //     console.log(user);
        this.props.history.push("/Members/Home");
        //     return user;
        // } catch (err) {
        //     alert(err);
        // }
    };

    render() {
        return (
            <FormContainer>

                <Form>
                    <InputLabel left small>
                        Username
                    </InputLabel>
                    <TextInput/>

                    <InputLabel left small>
                        Password
                    </InputLabel>
                    <TextInput/>

                    <MainButton onClick={() => this.attemptSignIn()}>
                        Sign In
                    </MainButton>

                </Form>
            </FormContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
};

export default withRouter(connect(mapStateToProps, {loadUser})(SignInForm));