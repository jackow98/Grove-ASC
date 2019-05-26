import React from 'react'
import TopMenu from "../navigation/TopMenu";
import Footer from "../navigation/Footer";
import {withRouter} from "react-router-dom";
import {PageContainer} from "../../styling/pages";
import {withAuthenticator} from "aws-amplify-react";
import {theme} from '../../styling/theme'

//Container for all pages that can be viewed by members
class MemberPage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
                <PageContainer>
                    <TopMenu user={"member"}/>
                    {this.props.children}
                    <Footer user={"member"}/>
                </PageContainer>
        )
    }
}

export default withAuthenticator(withRouter(MemberPage), {includeGreetings: true, theme:{"background-customizable":'red'}})