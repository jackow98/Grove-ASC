import React from 'react'
import TopMenu from "../navigation/TopMenu";
import Footer from "../navigation/Footer";
import {withRouter} from "react-router-dom";
import {PageContainer} from "../../styling/pages";

//Container for all pages that can be viewed by members
class MemberPage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <PageContainer>
                <TopMenu member/>
                {this.props.children}
                <Footer/>
            </PageContainer>
        )
    }
}

export default withRouter(MemberPage)