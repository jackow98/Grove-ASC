import React from 'react'
import TopMenu from "../navigation/TopMenu";
import {PageContent} from "../../styling/pages";
import {withRouter} from "react-router-dom";

class ContactUs extends React.Component{
    render(){
        return(
            <div>
                <TopMenu/>

                <PageContent>
                    Contact Us
                </PageContent>
            </div>
        )
    }
}

export default ContactUs;