import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PublicHome from "./publicPages/PublicHome";
import AboutUs from "./publicPages/AboutUs";
import ContactUs from "./publicPages/ContactUs";
import Coach from "./publicPages/Coach";

//The root of the app detailing navigation to each page
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/*Public Pages*/}
        <Route path="/" exact component={PublicHome} />
        <Route path="/About-Us" exact component={AboutUs} />
        <Route path="/Coach" exact component={Coach} />
        <Route path="/Contact-Us" exact component={ContactUs} />
      </BrowserRouter>
    );
  }
}

export default App;
