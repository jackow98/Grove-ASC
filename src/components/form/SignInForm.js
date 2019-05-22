import React from 'react'
import {InputLabel} from "../../styling/text";
import {Form, FormContainer, TextInput} from "../../styling/forms";
import {MainButton} from "../../styling/buttons";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {loadUser} from "../../redux/actions/index";
import {API} from 'aws-amplify';
import * as docClient from "aws-sdk";

//Form for members to sign into account
class SignInForm extends React.Component {

    attemptSignIn = async () => {

        const table = "Swimmers";
        const SASANumber = "55590669-051f-470a-b1b4-495d8e67b639";

        const params = {
            TableName: table,
            Key: {
                "SASANumber": SASANumber
            }
        };

        docClient.get(params, function (err, data) {
            if (err) {
                console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
            } else {
                console.log("GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
                this.props.history.push("/Members/Home")
            }
        });
    };

    render() {
        return (
            <FormContainer>

                <Form onClick = {(e) => e.preventDefault()}>
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