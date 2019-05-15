import React from 'react'
import TopMenu from "../navigation/TopMenu";
import {PageContent} from "../../styling/pages";
import {withRouter} from "react-router-dom";

class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <TopMenu/>

                <PageContent>
                    About Us
                </PageContent>
            </div>
        )
    }
}

export default AboutUs;