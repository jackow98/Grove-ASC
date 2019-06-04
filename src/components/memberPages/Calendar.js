import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import {DataEntry, DataLine, Dot, FlexiGrid} from "../../styling/cards";
import DataCard from "../cards/DataCard";

//Member Timings to display all fastest timings and timings by event
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
                                <DataEntry bold>No swimming</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>
                                    <Dot lightBlue/>
                                </DataEntry>
                                <DataEntry bold>Event</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"June 2019"}>
                            <DataLine>
                                <DataEntry lightBlue bold>Mon 24th</DataEntry>
                                <DataEntry>Fun Session</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry lightBlue bold>Thu 27th</DataEntry>
                                <DataEntry>Awards Night & Fun Session</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"July 2019"}>
                            <DataLine>
                                <DataEntry red bold>All Mon & Thu</DataEntry>
                                <DataEntry>Summer Holidays</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"Aug 2019"}>
                            <DataLine>
                                <DataEntry red bold>Mon & Thu</DataEntry>
                                <DataEntry>Summer Holidays</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry lightBlue bold>Mon 19th</DataEntry>
                                <DataEntry>Grove resumes</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"Sep 2019"}>
                            <DataLine>
                                <DataEntry red bold>Mon 16th</DataEntry>
                                <DataEntry>Bank holiday</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"Oct 2019"}>
                            <DataLine>
                                <DataEntry red bold>Mon 14th</DataEntry>
                                <DataEntry>October break</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry red bold>Thu 17th</DataEntry>
                                <DataEntry>October break</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry red bold>Mon 21st</DataEntry>
                                <DataEntry>October break</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"Dec 2019"}>
                            <DataLine>
                                <DataEntry red bold>Mon 23rd</DataEntry>
                                <DataEntry>Christmas break</DataEntry>
                            </DataLine>
                        </DataCard>

                    </FlexiGrid>

                </PageContent>
            </MemberPage>
        )
    }
}

export default Calendar