import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import {FlexiGrid} from "../../styling/cards";
import TextCard from "../cards/TextCard";
import connect from "react-redux/es/connect/connect";
import {prettyMonthYear} from "../../styling/prettyPrint";
import {Link} from "react-router-dom";
import {SimpleLink} from "../../styling/text";

//Member Timings to display all fastest timings and timings by event
class Achievements extends React.Component {

    //Iterate over achievements object and display
    renderAchievements = () => {
        if (this.props.user) {
            if (this.props.user[0]['achievements']) {
                const achievements = this.props.user[0]['achievements'];

                return Object.values(achievements).map((key, index) => {

                    return (
                        <TextCard
                            key={index}
                            grey
                            center
                            mainBackground={key['photo']}
                            subTitle={prettyMonthYear(key['date'])}
                            header={key['title']}
                        />
                    )
                })
            } else {
                return (
                    <TextCard
                        grey
                        center
                        mainBackground={"https://lh6.googleusercontent.com/c9hXlfKHAGsFW1HadfNILLTn5UO-U-37nLObV60azLhC-lPnVvWOotSvHhk=w2400"}
                        subTitle={
                            <Link to={"/Contact-Us"}>
                                <SimpleLink>
                                    Something wrong?
                                </SimpleLink>
                            </Link>
                        }
                        header={"No Records available"}
                    />
                )
            }
        }
    };

    render() {
        return (
            <MemberPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh5.googleusercontent.com/yZLsp9SVfF7yp6lQcfVJC0pwttaJv_gkyM_HjiDHwuN97Nb0XVn_EUkieSA=w2400"}
                        title={"Achievements"}
                    />

                    <FlexiGrid>
                        {this.renderAchievements()}
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

export default connect(mapStateToProps, {})(Achievements)