import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import DataCard from "../cards/DataCard";
import {DataEntry, DataLine, FlexiGrid} from "../../styling/cards";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";
import {MainButton} from "../../styling/buttons";
import {Auth} from "aws-amplify";

//Member Account page to view details of currrent user
class Account extends React.Component {

    renderArray = (label, array) => {
        if(array){
            return array.map((key, index) => {
                return (
                    <DataLine>
                        <DataEntry bold>{`${label} ${index + 1}`}</DataEntry>
                        <DataEntry>{key}</DataEntry>
                    </DataLine>
                )
            })
        }else{
            return(
                <DataLine>
                    <DataEntry bold>{label}</DataEntry>
                    <DataEntry>-</DataEntry>
                </DataLine>
            )
        }

    };

    renderObject = (label, object) => {
        if(object){
            return Object.values(object).map((key, index) => {
                return (
                    <DataLine>
                        <DataEntry bold>{`${label} ${index + 1}`}</DataEntry>
                        <DataEntry>{`${key['forename']?key['forename']:"-"} ${key['surname']?key['surname']:"-"}`}</DataEntry>
                    </DataLine>
                )
            })
        }else{
            return(
                <DataLine>
                    <DataEntry bold>{label}</DataEntry>
                    <DataEntry>-</DataEntry>
                </DataLine>
            )
        }

    };

    renderUserAccount = () => {
        if (this.props.user) {
            return (
                <DataCard>
                    <DataLine>
                        <DataEntry bold>SASA No.</DataEntry>
                        {this.props.user[0]['SASANumber'] ?
                            <DataEntry>{this.props.user[0]['SASANumber']}</DataEntry>
                            : <DataEntry>-</DataEntry>
                        }
                    </DataLine>
                    <DataLine>
                        <DataEntry bold>Forename</DataEntry>
                        {this.props.user[0]['forename'] ?
                            <DataEntry>{this.props.user[0]['forename']}</DataEntry> : <DataEntry>-</DataEntry>
                        }
                    </DataLine>
                    <DataLine>
                        <DataEntry bold>Surname</DataEntry>
                        {this.props.user[0]['surname'] ?
                            <DataEntry>{this.props.user[0]['surname']}</DataEntry> : <DataEntry>-</DataEntry>
                        }
                    </DataLine>
                    {this.renderArray("Email", this.props.user[0]['emails'])}
                    {this.renderArray("Phone", this.props.user[0]['phones'])}
                    {this.renderObject("Guardian", this.props.user[0]['guardians'])}

                    <DataLine>
                        <DataEntry>
                            <DataEntry bold red>

                            </DataEntry>
                            <Link to={"/Contact-Us"}>
                                Something wrong?
                            </Link>
                        </DataEntry>
                    </DataLine>
                </DataCard>
            )
        }
    }

    render() {
        return (
            <MemberPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh6.googleusercontent.com/jrh4UI4C-vDdq0N5tvYipQ8ZOyu0zrruQL7rMce7-XO08POVesB6UFcMyUU=w2400"}
                        title={"Account"}
                    />

                    <MainButton onClick={() => Auth.signOut()} red>
                        Sign out
                    </MainButton>

                    <FlexiGrid>
                        {this.renderUserAccount()}
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

export default connect(mapStateToProps, {})(Account)