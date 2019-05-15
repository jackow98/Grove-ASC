import React from 'react'
import TopMenuBar from "./TopMenuBar";
import {PageContent} from "../styling/GlobalStyling";
import PhotoCard from "./PhotoCard";
import {withRouter} from "react-router-dom";

class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <TopMenuBar/>

                <PageContent>
                    About Us
                </PageContent>
            </div>
        )
    }
}

export default withRouter(AboutUs);