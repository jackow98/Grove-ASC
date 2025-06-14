import React from "react";
import { PageContent } from "../../styling/pages";
import PublicPage from "./PublicPage";
import TitleCard from "../cards/TitleCard";
import TextCard from "../cards/TextCard";
import { AlertCard } from "../../styling/cards";
import { SecondaryHeader } from "../../styling/text";
import smilingCoach from '../../assets/images/lowQual/smilingCoach.png';
import sidePool from '../../assets/images/lowQual/swimmerSide.png';
import clubStairs from '../../assets/images/lowQual/clubStairs.png';
import smilingSwimmer from '../../assets/images/lowQual/smilingSwimmer.jpg';

//Page with information about the club and link to contact form
class AboutUs extends React.Component {
  render() {
    return (
      <PublicPage>
        <PageContent>
          <TitleCard
            mainBackground={
              ""
            }
            title={"About the club"}
          />

          <TextCard
            mainBackground={
              smilingSwimmer
            }
            header={"Who are we?"}
            description={
              "Grove ASC is an amateur swimming club based at Dalry Swim Centre in Edinburgh for school aged swimmers. We cater for a mix of abilities and pride ourselves in being a friendly, welcoming and enthusiastic club."
            }
          />
          <TextCard
            mainBackground={
              sidePool
            }
            header={"Sessions"}
            description={
              "Currently the club focuses on improving school aged swimmers' stamina and stroke development beyond the point which they would normally attain in swimming lessons. We cater for a mix of abilities, but all swimmers must have basic water confidence and the ability to swim at least 50m in three of the four recognised strokes. Monday and Thursday - 8pm to 9pm (except most school holidays and some selected local holidays). It is £50 for an annual Scottish Swimming membership plus £25/month for those doing 2 nights/week and £15/month for those swimming one night/week."
            }
          />
          <TextCard
            mainBackground={
              smilingCoach
            }
            header={"Coaches"}
            description={
              "The full club trains in one single session with dedicated coaches for each training group from our newest and youngest recruits up to our top training group. Grove ASC has a proud track record of maintaining interest in swimming beyond the ‘training years’ and is proud to have ex swimmers included in the Coaching Team – with more swimmers now starting out on their coaching journeys."
            }
          />
          <TextCard
            mainBackground={
              clubStairs
                        }
            header={"Atmosphere"}
            description={
              "Grove offers a relaxed environment to develop your swimming alongside the opportunity to pursue a future within a range of aquatic disciplines. There is no pressure to compete at Grove, although participation in our annual club championships and testing sessions is expected – after all, we need to be able to measure the progress we are confident we will be able to provide!"
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
