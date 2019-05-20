import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import {DataEntry, DataLine, Dot, FlexiGrid} from "../../styling/cards";
import DataCard from "../cards/DataCard";

//Member Timings to display all fastest timings and timings by event
//TODO: Integrate live data
class Calendar extends React.Component {

    render() {
        return (
            <MemberPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh5.googleusercontent.com/ijRgUhx2_asUrHz5D6ENDIo0QkNhtg_a_x-YXA7FPN9b8lXycpbmmwLZq6Y=w2400"}
                        title={"Calendar"}
                    />

                    <FlexiGrid>

                        <DataCard grey>
                            <DataLine>
                                <DataEntry>
                                    <Dot red/>
                                </DataEntry>
                                <DataEntry bold>Bank Holiday</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>
                                    <Dot lightBlue/>
                                </DataEntry>
                                <DataEntry bold>Event</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"May 2019"}>
                            <DataLine>
                                <DataEntry red bold>Mon 20th</DataEntry>
                                <DataEntry>Bank Holiday</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry red bold>Mon 27th</DataEntry>
                                <DataEntry>Bank Holiday</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"June 2019"}>
                            <DataLine>
                                <DataEntry lightBlue bold>Mon 24th</DataEntry>
                                <DataEntry>Fun Session</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry lightBlue bold>Mon 27th</DataEntry>
                                <DataEntry>Awards Night</DataEntry>
                            </DataLine>
                        </DataCard>
                    </FlexiGrid>

                </PageContent>
            </MemberPage>
        )
    }
}

export default Calendar