import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import DataCard from "../cards/DataCard";
import {DataEntry, DataLine, FlexiGrid} from "../../styling/cards";

//Member Timings to display all fastest timings and timings by event
//TODO: Integrate live data
class TwentyMinSwims extends React.Component {

    render() {
        return (
            <MemberPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh4.googleusercontent.com/mh1pURaPvzHRdAf8t0u1lhREKbl32Pux8H3Gz_d-nDTqvmyhjGO6YkR98Gs=w2400"}
                        title={"20 Min Swims"}
                    />

                    <FlexiGrid>
                        <DataCard subTitle={"The table below shows the number of lengths"}>
                            <DataLine>
                                <DataEntry>May 2018</DataEntry>
                                <DataEntry>54</DataEntry>
                                <DataEntry>{54 * 25}y</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>May 2017</DataEntry>
                                <DataEntry>54</DataEntry>
                                <DataEntry>{54 * 25}y</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>May 2016</DataEntry>
                                <DataEntry>54</DataEntry>
                                <DataEntry>{54 * 25}y</DataEntry>
                            </DataLine>
                            <DataLine>
                                <DataEntry>May 2015</DataEntry>
                                <DataEntry>54</DataEntry>
                                <DataEntry>{54 * 25}y</DataEntry>
                            </DataLine>
                        </DataCard>
                    </FlexiGrid>
                </PageContent>
            </MemberPage>
        )
    }
}

export default TwentyMinSwims