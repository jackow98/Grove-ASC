import React from "react";
import { PageContent } from "../../styling/pages";
import PublicPage from "./PublicPage";
import TitleCard from "../cards/TitleCard";
import TextCard from "../cards/TextCard";
import { AlertCard } from "../../styling/cards";
import { SecondaryHeader } from "../../styling/text";

//Page with information about the club and link to contact form
class AboutUs extends React.Component {
  render() {
    return (
      <PublicPage>
        <PageContent>
          <TitleCard
            mainBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihZyuBBRhuactt53haOQc5cfGw0CqDjTW-CESSCLWtzoCaMFEEJBsZ-oNxfPsqymB041nmZ7zJ1pbcXd3iidnZrXOUiIXS2CQ80=w2400"
            }
            title={"Coach with us"}
          />

          <TextCard
            mainBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihbRY7x9TPCqNvFndb_v73vWwZp96ODKrWlK-kd5b79oM940239YnouCD2RtUci1Tr7LbCeqDwqgZPqCw95j_23eYYD0LtushQA=w2400"
            }
            header={"Why Grove?"}
            description={
              "Grove Amateur Swimming Club is inviting enthusiastic individuals to join our coaching team. We are looking for both novice and experienced coaches who are passionate about swimming and willing to contribute to a friendly, non-competitive environment."
            }
          />
          <TextCard
            mainBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihYYwZtCiLqbqT98II0OR1SWwmr6q5MKyqjjl1v29pYAPQXXiQlCLKQRmCYazbDmKnUzkPN74FYhaqPGiV1hnQhG7zak-wl1Fko=w2400"
            }
            header={"Opportunities"}
            description={
              "Whether you're SSTQ qualified or hold a Level 1 or 2 coaching certification, we offer a welcoming place to further your coaching skills alongside a committed and supportive team. If you have a strong background in teaching or coaching and can volunteer an hour per week, we would love to have you bring your expertise to our club."
            }
          />
          <TextCard
            mainBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpiha_Mzqo7-c3uVDqrOSu7pYqFegsbP7QatgvO-SZsvLsFZM33KtURHZiYZcwBw4mrK7tLPp1JcXXCefI_YZDHnllw1Td7pEWwO4=w2400"
            }
            header={"What we offer"}
            description={
              "Work with fantastic children and be part of a dedicated team. Bring your unique experiences to enhance our club's coaching strength. Opportunities for professional development, including funding for courses for committed coaches."
            }
          />
          <TextCard
            mainBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihYCzobAbOtAqfCN9hLCmAlmZjAWFgtUfvJzopSXTt3Z5Mr_WSe9333HwAjRGcU-O56GXDVOOuq-253Mo4Tnc3UHBvM_CDSXQQ0=w2400"
            }
            header={"Role"}
            description={
              "As a coach at Grove ASC, you will help develop young swimmers in a supportive environment. This is a great chance to make a significant impact in a volunteer role while enriching your own coaching experience."
            }
          />

          <AlertCard onClick={() => this.props.history.push("Contact-Us")}>
            <SecondaryHeader color={"white"}>
              Book a free trial today
            </SecondaryHeader>
          </AlertCard>
        </PageContent>
      </PublicPage>
    );
  }
}

export default AboutUs;
