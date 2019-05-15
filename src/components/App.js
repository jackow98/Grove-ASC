import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./Home";
import AboutUs from "./AboutUs";

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={Home}/>
                    <Route path="/About-Us" exact component={AboutUs}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App