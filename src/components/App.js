import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import PublicHome from "./publicPages/PublicHome";
import AboutUs from "./publicPages/AboutUs";
import Members from "./publicPages/Members";
import ContactUs from "./publicPages/ContactUs";
import MemberHome from "./memberPages/MemberHome";

//The root of the app detailing navigation to each page
class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={PublicHome}/>
                <Route path="/About-Us" exact component={AboutUs}/>
                <Route path="/Members" exact component={Members}/>
                <Route path="/Contact-Us" exact component={ContactUs}/>

                <Route path="/Member-Home" exact component={MemberHome}/>

            </BrowserRouter>
        )
    }
}

export default App