import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import SlidingMenu from "../navigation/SlidingMenuContainer";
import DataCard from "../cards/DataCard";
import {DataEntry, DataLine, FlexiGrid} from "../../styling/cards";

//Member Timings to display all fastest timings and timings by event
//TODO: Integrate live data
class Timings extends React.Component {

    render() {
        return (
            <MemberPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh4.googleusercontent.com/YL1hDJrDb_dRdO9gtFN91h3dgtJfJopwLwpXnL38jy6uIoNpwzuDJVKpldA=w2400"}
                        title={"Timings"}
                    />
                    <SlidingMenu/>

                    <FlexiGrid>
                        <DataCard mainTitle={"Butterfly"}>
                            <DataLine>
                                <DataEntry bold>Distance</DataEntry>
                                <DataEntry bold>Time</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>25y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>25m</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>50y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>50y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>50y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"Front Carwl"}>
                            <DataLine>
                                <DataEntry bold>Distance</DataEntry>
                                <DataEntry bold>Time</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>25y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>25m</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>50y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"Backstroke"}>
                            <DataLine>
                                <DataEntry bold>Distance</DataEntry>
                                <DataEntry bold>Time</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>25y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>25m</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>50y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"Breaststroke"}>
                            <DataLine>
                                <DataEntry bold>Distance</DataEntry>
                                <DataEntry bold>Time</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>25y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>25m</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>50y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                        </DataCard>

                        <DataCard mainTitle={"IM"}>
                            <DataLine>
                                <DataEntry bold>Distance</DataEntry>
                                <DataEntry bold>Time</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>25y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>25m</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>50y</DataEntry>
                                <DataEntry>00:11:02</DataEntry>
                            </DataLine>
                        </DataCard>
                    </FlexiGrid>
                </PageContent>
            </MemberPage>
        )
    }
}

export default Timings