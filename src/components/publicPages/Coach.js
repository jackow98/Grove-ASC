import React from "react";
import { PageContent } from "../../styling/pages";
import PublicPage from "./PublicPage";
import TitleCard from "../cards/TitleCard";
import TextCard from "../cards/TextCard";
import { AlertCard } from "../../styling/cards";
import { SecondaryHeader } from "../../styling/text";
import awardsGroup from '../../assets/images/awardsGroup.png';
import timeKeeper from '../../assets/images/timeKeeper.png';
import swimmerWall from '../../assets/images/swimmerWall.png';
import clubStairs from '../../assets/images/clubStairs.png';

//Page with information about the club and link to contact form
class AboutUs extends React.Component {
  render() {
    return (
      <PublicPage>
        <PageContent>
          <TitleCard
            title={"Coach with us"}
          />

          <TextCard
            mainBackground={
              awardsGroup
            }
            header={"Why Grove?"}
            description={
              "Grove Amateur Swimming Club is inviting enthusiastic individuals to join our coaching team. We are looking for both novice and experienced coaches who are passionate about swimming and willing to contribute to a friendly, non-competitive environment."
            }
          />
          <TextCard
            mainBackground={
              timeKeeper
            }
            header={"Opportunities"}
            description={
              "Whether you're SSTQ qualified or hold a Level 1 or 2 coaching certification, we offer a welcoming place to further your coaching skills alongside a committed and supportive team. If you have a strong background in teaching or coaching and can volunteer an hour per week, we would love to have you bring your expertise to our club."
            }
          />
          <TextCard
            mainBackground={
              swimmerWall
            }
            header={"What we offer"}
            description={
              "Work with fantastic children and be part of a dedicated team. Bring your unique experiences to enhance our club's coaching strength. Opportunities for professional development, including funding for courses for committed coaches."
            }
          />
          <TextCard
            mainBackground={
              clubStairs
            }
            header={"Role"}
            description={
              "As a coach at Grove ASC, you will help develop young swimmers in a supportive environment. This is a great chance to make a significant impact in a volunteer role while enriching your own coaching experience."
            }
          />

          <AlertCard onClick={() => this.props.history.push("Contact-Us")}>
            <SecondaryHeader color={"white"}>
              Enquire today
            </SecondaryHeader>
          </AlertCard>
        </PageContent>
      </PublicPage>
    );
  }
}

export default AboutUs;
