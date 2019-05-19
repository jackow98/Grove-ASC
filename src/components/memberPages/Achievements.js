import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import {FlexiGrid} from "../../styling/cards";
import TextCard from "../cards/TextCard";

//Member Timings to display all fastest timings and timings by event
//TODO: Integrate live data
class Achievements extends React.Component {

    render() {
        return (
            <MemberPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh5.googleusercontent.com/yZLsp9SVfF7yp6lQcfVJC0pwttaJv_gkyM_HjiDHwuN97Nb0XVn_EUkieSA=w2400"}
                        title={"Achievements"}
                    />

                    <FlexiGrid>
                        <TextCard
                            grey
                            center
                            mainBackground={"https://lh5.googleusercontent.com/Cy2Tm23nnNANZyOSvCLIkiAKutqT2pWOq7LXMdnfi99ueqWxrbEfN5vXYbk=w2400"}
                            header={"1st March 2018"}
                            subTitle={"2017 Club Championships U14 1st place"}
                        />
                        <TextCard
                            grey
                            center
                            mainBackground={"https://lh5.googleusercontent.com/Cy2Tm23nnNANZyOSvCLIkiAKutqT2pWOq7LXMdnfi99ueqWxrbEfN5vXYbk=w2400"}
                            header={"2017 Club Championships U14 1st place"}
                            subTitle={"1st March 2018"}
                        />
                        <TextCard
                            grey
                            center
                            mainBackground={"https://lh5.googleusercontent.com/Cy2Tm23nnNANZyOSvCLIkiAKutqT2pWOq7LXMdnfi99ueqWxrbEfN5vXYbk=w2400"}
                            header={"2017 Club Championships U14 1st place"}
                            subTitle={"1st March 2018"}
                        />


                    </FlexiGrid>
                </PageContent>
            </MemberPage>
        )
    }
}

export default Achievements
