import React from 'react'
import {SecondaryHeader} from "../../styling/text";
import {Card, PhotoTextBox, SmallPhotoCardContainer} from "../../styling/cards";
import {withRouter} from "react-router-dom";


//C
class LargePhotoCard extends React.Component {
    render() {
        return (
            <SmallPhotoCardContainer
                onClick={() => this.props.history.push("/Members/Timings")}
                cardType="SmallPhotoCard"
                mainBackground={this.props.mainBackground}
                mobileBackground={this.props.mobileBackground}
            >

                <PhotoTextBox small onClick={() => this.props.history.push(this.props.buttonLink)}>
                    <SecondaryHeader>
                        {this.props.mainText}
                    </SecondaryHeader>
                </PhotoTextBox>

            </SmallPhotoCardContainer>
        )
    }

}

export default withRouter(LargePhotoCard)