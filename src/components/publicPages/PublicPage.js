import React from "react";
import TopMenu from "../navigation/TopMenu";
import Footer from "../navigation/Footer";
import { withRouter } from "react-router-dom";
import { PageContainer } from "../../styling/pages";

//Container for all pages that can be viewed by anyone
class PublicPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <PageContainer>
        <TopMenu user={"public"} />
        {this.props.children}
        <Footer user={"public"} />
      </PageContainer>
    );
  }
}

export default withRouter(PublicPage);
