import React from "react";
import { PageContent } from "../../styling/pages";
import PublicPage from "./PublicPage";
import TitleCard from "../cards/TitleCard";
import TextCard from "../cards/TextCard";
import { SimpleLink } from "../../styling/text";
import swimmerBackTwo from '../../assets/images/swimmerBackTwo.png';

//Page for users to fill out a form and send to the club
class ContactUs extends React.Component {
  render() {
    return (
      <PublicPage>
        <PageContent>
          <TitleCard
        
            title={"Contact Us"}
          />

          <TextCard
            mainBackground={
              swimmerBackTwo
                        }
            header={"Get in touch"}
            description={
              <p style={{ justifyContent: "left", width: "100%" }}>
                Drop us an email at{" "}
                <SimpleLink href="mailto:groveasc@gmail.com">
                  {" "}
                  groveasc@gmail.com
                </SimpleLink>
              </p>
            }
          />
        </PageContent>
      </PublicPage>
    );
  }
}

export default ContactUs;
