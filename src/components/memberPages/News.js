import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import {FlexiGrid} from "../../styling/cards";
import {MainHeader} from "../../styling/text";
import IconCard from "../cards/IconCard";

//Member Timings to display all fastest timings and timings by event
//TODO: Integrate live data
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
                            label={"Courses For Swimmers"}
                        />
                        <IconCard
                            icon={"File"}
                            label={"Lane development plan"}
                        />
                        <IconCard
                            icon={"File"}
                            label={"Developing with Grove"}
                        />
                        <IconCard
                            icon={"File"}
                            label={"Spring/Summer calendar 2019"}
                        />

                    </FlexiGrid>

                    <FlexiGrid>
                        <MainHeader left>
                            Newsletters
                        </MainHeader>

                        <IconCard
                            icon={"File"}
                            label={"Courses For Swimmers"}
                        />
                        <IconCard
                            icon={"File"}
                            label={"Lane development plan"}
                        />
                        <IconCard
                            icon={"File"}
                            label={"Developing with Grove"}
                        />
                        <IconCard
                            icon={"File"}
                            label={"Spring/Summer calendar 2019"}
                        />


                    </FlexiGrid>


                </PageContent>
            </MemberPage>
        )
    }
}

export default TwentyMinSwims