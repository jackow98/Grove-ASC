import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import PublicHome from "./publicPages/PublicHome";
import AboutUs from "./publicPages/AboutUs";
import Members from "./publicPages/Members";
import ContactUs from "./publicPages/ContactUs";
import MemberHome from "./memberPages/MemberHome";
import Timings from "./memberPages/Timings";
import TwentyMinSwims from "./memberPages/TwentyMinSwims";
import Achievements from "./memberPages/Achievements";
import News from "./memberPages/News";
import Calendar from "./memberPages/Calendar";

//The root of the app detailing navigation to each page
class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                {/*Public Pages*/}
                <Route path="/" exact component={PublicHome}/>
                <Route path="/About-Us" exact component={AboutUs}/>
                <Route path="/Members" exact component={Members}/>
                <Route path="/Contact-Us" exact component={ContactUs}/>

                {/*Member Pages*/}
                <Route path="/Members/Home" exact component={MemberHome}/>
                <Route path="/Members/Timings" exact component={Timings}/>
                <Route path="/Members/Achievements" exact component={Achievements}/>
                <Route path="/Members/TwentyMinSwims" exact component={TwentyMinSwims}/>
                <Route path="/Members/News" exact component={News}/>
                <Route path="/Members/Calendar" exact component={Calendar}/>

            </BrowserRouter>
        )
    }
}

export default App