import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import PublicHome from "./publicPages/PublicHome";
import AboutUs from "./publicPages/AboutUs";
import Members from "./publicPages/Members";
import ContactUs from "./publicPages/ContactUs";
import MemberHome from "./memberPages/MemberHome";
import MemberTimings from "./memberPages/MemberTimings";
import TwentyMinSwims from "./memberPages/TwentyMinSwims";
import MemberAchievements from "./memberPages/MemberAchievements";

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
                <Route path="/Members/Timings" exact component={MemberTimings}/>
                <Route path="/Members/Achievements" exact component={MemberAchievements}/>
                <Route path="/Members/TwentyMinSwims" exact component={TwentyMinSwims}/>

            </BrowserRouter>
        )
    }
}

export default App