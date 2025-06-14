import React from "react";
import LargePhotoCard from "../cards/LargePhotoCard";
import { PageContent } from "../../styling/pages";
import PublicPage from "./PublicPage";
import poolBirdsEye from '../../assets/images/lowQual/poolBirdsEye.png';
import jump from '../../assets/images/lowQual/jump.png';
import swimmerBackThree from '../../assets/images/swimmerBackThree.png';
import swimmerBackTwo from '../../assets/images/lowQual/backSwimmerTwo.png';

//PublicHome page used to display photo cards and act as a window for all users to the rest of the website
class PublicHome extends React.Component {
  render() {
    return (
      <PublicPage>
        <PageContent>
          <LargePhotoCard
            mainBackground={
              jump
            }
            mainText={"Take those first steps into club swimming"}
            buttonText={"About the club"}
            link={"/About-Us"}
          />
          <LargePhotoCard
            mainBackground={
              swimmerBackThree
            }
            mobileBackground={
              swimmerBackTwo
            }
            mainText={"Swim with us"}
            buttonText={"Book a free trial today"}
            link={"/Contact-Us"}
          />
          <LargePhotoCard
            mainBackground={
              poolBirdsEye
            }
            mainText={"Coach at Grove"}
            buttonText={"Find out more"}
            link={"/Coach"}
          />
        </PageContent>
      </PublicPage>
    );
  }
}

export default PublicHome;
