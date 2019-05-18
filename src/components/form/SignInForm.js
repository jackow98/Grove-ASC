import React from 'react'
import {InputLabel} from "../../styling/text";
import {Form, FormContainer, TextInput} from "../../styling/forms";
import {MainButton} from "../../styling/buttons";
import {withRouter} from "react-router-dom";

//Form for members to sign into account
class SignInForm extends React.Component {
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

                    <MainButton onClick={() => this.props.history.push("/Member-Home")}>
                        Sign In
                    </MainButton>

                </Form>
            </FormContainer>
        )
    }
}

export default withRouter(SignInForm)