import React from 'react'
import {TopMenuBar, LongNavyLogo, MenuBarsIcon} from '../styling/TopMenuBarStyling'

class App extends React.Component{

    render(){
        return(
            <div>
                <TopMenuBar>
                    <MenuBarsIcon/>
                    <LongNavyLogo/>
                    <MenuBarsIcon/>
                </TopMenuBar>

                <mainHeader>
                    Top Menu Bar
                </mainHeader>

                Home Page
            </div>
        )
    }

}

export default App