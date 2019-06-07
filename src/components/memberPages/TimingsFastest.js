import React from 'react'
import DataCard from "../cards/DataCard";
import {DataEntry, DataLine, FlexiGrid} from "../../styling/cards";
import connect from "react-redux/es/connect/connect";
import {prettyDistance} from "../../styling/prettyPrint";
import {Link} from "react-router-dom";

//Iterate over all strokes and display the fastest timings for each stroke
class TimingsFastest extends React.Component {

    //Iterate over strokes array and display each
    renderStrokes = () => {
        let strokes = ["Butterfly", "Backstroke", "Breaststroke", "Front Crawl", "IM"];

        return strokes.map((stroke) => {
            return (
                <DataCard key={stroke} mainTitle={stroke}>
                    <DataLine>
                        <DataEntry bold>Distance</DataEntry>
                        <DataEntry bold>Time</DataEntry>
                    </DataLine>
                    {this.renderStrokeTimings(stroke.replace(/\s/g, '').toLowerCase())}
                </DataCard>
            )
        })


    };

    //Iterate over strokes object and display a time for each
    renderStrokeTimings = (stroke) => {
        if (this.props.user) {
            if (this.props.user[0][stroke]) {
                const butterfly = this.props.user[0][stroke];

                return Object.values(butterfly).map((key, index) => {
                    let keys = Object.keys(butterfly);

                    if (key !== "NT" && key) {
                        return (
                            <DataLine key={index}>
                                <DataEntry>{prettyDistance(keys[index])}</DataEntry>
                                <DataEntry>{key}</DataEntry>
                            </DataLine>
                        )
                    } else {
                        return null
                    }

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
            <FlexiGrid>
                {this.renderStrokes()}
            </FlexiGrid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

export default connect(mapStateToProps, {})(TimingsFastest)