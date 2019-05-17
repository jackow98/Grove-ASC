import React from 'react'
import {SecondaryHeader} from "../../styling/text";
import {Form, FormContainer, TextInput} from "../../styling/forms";
import {MainButton} from "../../styling/buttons";


class SignInForm extends React.Component {
    render() {
        return (
            <FormContainer>

                <Form>
                    <SecondaryHeader left small>
                        Username
                    </SecondaryHeader>
                    <TextInput/>

                    <SecondaryHeader left small>
                        Password
                    </SecondaryHeader>
                    <TextInput/>

                    <MainButton>
                        Sign In
                    </MainButton>

                </Form>
            </FormContainer>
        )
    }
}

export default SignInForm