import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import DataCard from "../cards/DataCard";
import {DataEntry, DataLine, FlexiGrid} from "../../styling/cards";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";
import {prettyMonthYear} from "../../styling/prettyPrint";

//Member Timings to display all fastest timings and timings by event
class TwentyMinSwims extends React.Component {

    //Iterate over twenty minute swims object and retrieve stroke counts
    renderTwentyMinSwims = () => {
        if (this.props.user) {
            if (this.props.user[0]['twentyMinSwims']) {

                const twentyMinSwims = this.props.user[0]['twentyMinSwims'];

                return Object.values(twentyMinSwims).map((key, index) => {

                    let dateString = Object.keys(key).toString();
                    let prettyDate = prettyMonthYear(dateString);

                    return (
                        <DataLine key={index}>
                            <DataEntry>{prettyDate}</DataEntry>
                            <DataEntry>{key[dateString]}</DataEntry>
                            <DataEntry>{key[dateString] * 25}y</DataEntry>
                        </DataLine>
                    )
                })
            } else {
                return (
                    <DataLine>
                        <DataEntry bold red>
                            No Records available
                        </DataEntry>
                        <DataEntry>
                            <Link to={"/Contact-Us"}>
                                Something wrong?
                            </Link>
                        </DataEntry>
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
                        mainBackground={"https://lh4.googleusercontent.com/mh1pURaPvzHRdAf8t0u1lhREKbl32Pux8H3Gz_d-nDTqvmyhjGO6YkR98Gs=w2400"}
                        title={"20 Min Swims"}
                    />
                    <FlexiGrid>


                        <DataCard subTitle={"The table below shows the number of lengths"}>
                            <DataLine>
                                <DataEntry bold>Date</DataEntry>
                                <DataEntry bold>Lengths</DataEntry>
                                <DataEntry bold>Distance</DataEntry>
                            </DataLine>

                            {this.renderTwentyMinSwims()}

                        </DataCard>
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

export default connect(mapStateToProps, {})(TwentyMinSwims)