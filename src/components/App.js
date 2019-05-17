import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./publicPages/Home";
import AboutUs from "./publicPages/AboutUs";
import Members from "./publicPages/Members";
import ContactUs from "./publicPages/ContactUs";

class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                        <Route path="/" exact component={Home}/>
                        <Route path="/About-Us" exact component={AboutUs}/>
                        <Route path="/Members" exact component={Members}/>
                        <Route path="/Contact-Us" exact component={ContactUs}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App