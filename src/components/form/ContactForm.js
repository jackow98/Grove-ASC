import React from 'react'
import {Description, InputLabel} from "../../styling/text";
import {Form, FormContainer, TextAreaInput, TextInput} from "../../styling/forms";

//Form for public to get in touch with the club
class ContactForm extends React.Component {
    render() {
        return (
            <FormContainer>

                <Form>
                    <InputLabel left>
                        Name
                    </InputLabel>
                    <TextInput/>

                    <InputLabel left>
                        Email
                    </InputLabel>
                    <TextInput/>

                    <InputLabel left>
                        Message
                    </InputLabel>
                    <TextAreaInput/>

                </Form>

                <Description small>
                    We will never pass any of your data onto third parties. We may contact you from time to time
                    with marketing content and store your data securely to allow us to do so. You can make a request
                    for us to erase your data using this form at any time.
                </Description>
            </FormContainer>
        )
    }
}

export default ContactForm