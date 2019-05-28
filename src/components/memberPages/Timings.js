import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import SlidingMenu from "../navigation/SlidingMenuContainer";
import DataCard from "../cards/DataCard";
import {DataEntry, DataLine, FlexiGrid} from "../../styling/cards";
import connect from "react-redux/es/connect/connect";
import {prettyDistance} from "../../styling/prettyPrint";
import {Link} from "react-router-dom";

//Member Timings to display all fastest timings and timings by event
//TODO: Integrate live data
class Timings extends React.Component {

    renderStrokes = () => {
        let strokes = ["Butterfly", "Backstroke", "Breaststroke", "Front Crawl", "IM"];

        return strokes.map((stroke) => {
            return(
                <DataCard mainTitle={stroke}>
                    <DataLine>
                        <DataEntry bold>Distance</DataEntry>
                        <DataEntry bold>Time</DataEntry>
                    </DataLine>
                    {this.renderStrokeTimings(stroke.replace(/\s/g, '').toLowerCase())}
                </DataCard>
            )
        })


    };

    //Iterate over achievements object and retrieve
    renderStrokeTimings = (stroke) => {
        if (this.props.user) {
            if (this.props.user[0][stroke]) {
                const butterfly = this.props.user[0][stroke];
                console.log(butterfly);
                return Object.values(butterfly).map((key, index) => {

                    let keys = Object.keys(butterfly);

                    return (
                        <DataLine>
                            <DataEntry>{prettyDistance(keys[index])}</DataEntry>
                            <DataEntry>{key}</DataEntry>
                        </DataLine>
                    )
                })
            } else {
                return (
                    <DataLine>
                        <DataEntry bold red> No Records available</DataEntry>
                        <DataEntry>
                            <Link to={"/Contact-Us"}>
                                Something wrong?
                            </Link></DataEntry>
                    </DataLine>
                )
            }
        }
    };

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
                        {this.renderStrokes()}
                    </FlexiGrid>
                </PageContent>
            </MemberPage>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

export default connect(mapStateToProps, {})(Timings)