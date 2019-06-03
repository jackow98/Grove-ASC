import React from 'react'
import DataCard from "../cards/DataCard";
import {DataEntry, DataLine, FlexiGrid} from "../../styling/cards";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";
import {prettyDistance, prettyStroke} from "../../styling/prettyPrint";

//Iterate over all events and display the timings for each stroke
class TimingsEvent extends React.Component {

    //Iterate over events object and retrieve each event
    renderEvents = () => {
        if (this.props.user) {
            if (this.props.user[0]['eventTimings']) {
                const eventTimings = this.props.user[0]['eventTimings'];

                return Object.values(eventTimings).map((key, index) => {
                    let eventString = Object.keys(key).toString();

                    return (
                        <DataCard mainTitle={eventString}>
                            <DataLine>
                                <DataEntry bold>Stroke</DataEntry>
                                <DataEntry bold>Distance</DataEntry>
                                <DataEntry bold>Time</DataEntry>
                            </DataLine>
                            {this.renderEventStrokes(key)}
                        </DataCard>
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

    //Iterate over event object and retrieve each stroke
    renderEventStrokes = (eventDetails) => {
        return Object.values(eventDetails).map((key, index) => {
            return this.renderEventTimings(key)
        })
    };

    //Iterate over stroke objects and retrieve each time
    renderEventTimings = (allStrokes) => {
        return Object.values(allStrokes).map((key, index) => {
            let stroke = Object.keys(key)[0];
            let distance = Object.keys(key[stroke]);
            let time = key[stroke][distance];

            if (distance[0]) {
                return (

                    <DataLine key={index}>
                        <DataEntry>{prettyStroke(stroke)}</DataEntry>
                        <DataEntry>{distance[0] ? prettyDistance(distance[0]) : null}</DataEntry>

                        <DataEntry>{time}</DataEntry>
                    </DataLine>
                )
            }

        })
    };

    render() {
        return (
            <FlexiGrid>
                {this.renderEvents()}
            </FlexiGrid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

export default connect(mapStateToProps, {})(TimingsEvent)