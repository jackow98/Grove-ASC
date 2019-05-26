import React from 'react'
import {InputLabel} from "../../styling/text";
import {Form, FormContainer, TextInput} from "../../styling/forms";
import {MainButton} from "../../styling/buttons";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {loadUser} from "../../redux/actions/index";


//Form for members to sign into account
class SignInForm extends React.Component {

    attemptSignIn = async () => {
        this.props.history.push("/Members/Home")
    };

    render() {
        return (
            <FormContainer>

                <Form onClick={(e) => e.preventDefault()}>
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