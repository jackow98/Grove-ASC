import React from "react";
import { PageContent } from "../../styling/pages";
import PublicPage from "./PublicPage";
import TitleCard from "../cards/TitleCard";
import TextCard from "../cards/TextCard";
import { SimpleLink } from "../../styling/text";

//Page for users to fill out a form and send to the club
class ContactUs extends React.Component {
  render() {
    return (
      <PublicPage>
        <PageContent>
          <TitleCard
            mainBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihZyuBBRhuactt53haOQc5cfGw0CqDjTW-CESSCLWtzoCaMFEEJBsZ-oNxfPsqymB041nmZ7zJ1pbcXd3iidnZrXOUiIXS2CQ80=w2400"
            }
            title={"Contact Us"}
          />

          <TextCard
            mainBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihbRY7x9TPCqNvFndb_v73vWwZp96ODKrWlK-kd5b79oM940239YnouCD2RtUci1Tr7LbCeqDwqgZPqCw95j_23eYYD0LtushQA=w2400"
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
