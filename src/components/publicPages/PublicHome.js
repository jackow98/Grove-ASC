import React from "react";
import LargePhotoCard from "../cards/LargePhotoCard";
import { PageContent } from "../../styling/pages";
import PublicPage from "./PublicPage";

//PublicHome page used to display photo cards and act as a window for all users to the rest of the website
class PublicHome extends React.Component {
  render() {
    return (
      <PublicPage>
        <PageContent>
          {/* "https://drive.google.com/thumbnail?id=xxx&sz=w2400" */}
          <LargePhotoCard
            mainBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihZyuBBRhuactt53haOQc5cfGw0CqDjTW-CESSCLWtzoCaMFEEJBsZ-oNxfPsqymB041nmZ7zJ1pbcXd3iidnZrXOUiIXS2CQ80=w2400"
            }
            mobileBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpiha_Mzqo7-c3uVDqrOSu7pYqFegsbP7QatgvO-SZsvLsFZM33KtURHZiYZcwBw4mrK7tLPp1JcXXCefI_YZDHnllw1Td7pEWwO4=w2400"
            }
            mainText={"Take those first steps into club swimming"}
            buttonText={"About the club"}
            link={"/About-Us"}
          />
          <LargePhotoCard
            mainBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihY24rvfdkRj9lQD6SEPfGZwAMGJ0t0HD2YFiqCwhYNKdltxLc2ITL8Yzx9kS0Z9xBLtLbd7KnGZ9uYBbxp6_akWQoK_JJHfDwA=w2400"
            }
            mobileBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihYjrS-0kb-TJIii0YRueK7kw_oslCwbKmVe8x1ZT181vPR6_Eo42AgESPMMQK0quw5zmmExqx4JGKckWKkjb3RR26nv0YbWbFE=w2400"
            }
            mainText={"Swim with us"}
            buttonText={"Book a free trial today"}
            link={"/Contact-Us"}
          />
          <LargePhotoCard
            mainBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihbPJuw3lv7JWdJ8odqQYQxvJAH58tt2PkAKWqILnWtrGQVrAiY6ZPaNpBU-Nixisarnq38tERA-St9ASYUcUtiltFbW7i7uAdQ=w2400"
            }
            mobileBackground={
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihaPGf9NUkvrt0dd9iUJTH0MhSubYpEmbR1yL3e12JQ50ywYvmrk1VqpixNaTeXOzri4lEOL0Y6ELKCXTATLPD_pUDv-3bFdWxs=w2400"
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
