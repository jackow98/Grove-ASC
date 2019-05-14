import React from 'react'
import TopMenuBar from "./TopMenuBar";
import PhotoCard from "./PhotoCard";
import {MainHeader, PageContent} from "../styling/GlobalStyling";

class App extends React.Component{

    render(){
        return(
            <div>
                <TopMenuBar/>

                <PageContent>
                    <PhotoCard>

                    </PhotoCard>
                </PageContent>
            </div>
        )
    }

}

export default App