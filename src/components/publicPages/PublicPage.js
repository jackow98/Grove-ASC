import React from 'react'
import TopMenu from "../navigation/TopMenu";
import Footer from "../navigation/Footer";
import {withRouter} from "react-router-dom";

class PublicPage extends React.Component {

    componentDidMount(){
            window.scrollTo(0, 0);
            console.log("Restoring")
    }

    render() {
        return (
            <div>
                <TopMenu/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default withRouter(PublicPage)