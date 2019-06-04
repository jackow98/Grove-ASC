import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import {FlexiGrid} from "../../styling/cards";
import {MainHeader} from "../../styling/text";
import IconCard from "../cards/IconCard";
import groveJounreyPDF from "../../assets/Grove ASC Journey.pdf"
import groveLanePlanPDF from "../../assets/Grove ASC Lane Plan 2019.pdf"
import groveCoursesPDF from "../../assets/2019 Courses for Swimmers.pdf"

//Member Timings to display all fastest timings and timings by event
class TwentyMinSwims extends React.Component {

    render() {
        return (
            <MemberPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh6.googleusercontent.com/c9hXlfKHAGsFW1HadfNILLTn5UO-U-37nLObV60azLhC-lPnVvWOotSvHhk=w2400"}
                        title={"News"}
                    />

                    <FlexiGrid>
                        <MainHeader left>
                            Information
                        </MainHeader>

                        <IconCard
                            icon={"File"}
                            label={"2019 Courses For Swimmers"}
                            link={groveCoursesPDF}
                        />
                        <IconCard
                            icon={"File"}
                            label={"2019 Lane development plan"}
                            link={groveLanePlanPDF}
                        />
                        <IconCard
                            icon={"File"}
                            label={"Grove development plan"}
                            link={groveJounreyPDF}
                        />

                        <IconCard
                            icon={"File"}
                            label={"Newsletters archive"}
                            link={"https://us18.campaign-archive.com/home/?u=c2ecfdaaa76610560743f8c25&id=c496751bbe"}
                        />

                    </FlexiGrid>

                    <FlexiGrid>

                    </FlexiGrid>

                </PageContent>
            </MemberPage>
        )
    }
}

export default TwentyMinSwims