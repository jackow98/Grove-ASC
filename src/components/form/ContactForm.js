import React from 'react'
import {Description, SecondaryHeader} from "../../styling/text";
import {Form, FormContainer, TextAreaInput, TextInput} from "../../styling/forms";
import {MainButton} from "../../styling/buttons";

class ContactForm extends React.Component {
    render() {
        return (
            <FormContainer>

                <Form>
                    <SecondaryHeader left>
                        Name
                    </SecondaryHeader>
                    <TextInput/>

                    <SecondaryHeader left>
                        Email
                    </SecondaryHeader>
                    <TextInput/>

                    <SecondaryHeader left>
                        Message
                    </SecondaryHeader>
                    <TextAreaInput/>

                    <Description small>
                        We will never pass any of your data onto third parties. We may contact you from time to time
                        with marketing content and store your data securely to allow us to do so. You can make a request
                        for us to erase your data using the form below at any time.
                    </Description>

                    <MainButton>
                        Submit
                    </MainButton>
                </Form>
            </FormContainer>
        )
    }
}

export default ContactForm