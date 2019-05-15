import React from 'react'
import TopMenu from "../navigation/TopMenu";
import {PageContent} from "../../styling/pages";
import {withRouter} from "react-router-dom";

class Members extends React.Component{
    render(){
        return(
            <div>
                <TopMenu/>

                <PageContent>
                   Members
                </PageContent>
            </div>
        )
    }
}

export default Members;