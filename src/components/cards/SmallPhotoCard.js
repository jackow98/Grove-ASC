import React from 'react'
import {SecondaryHeader} from "../../styling/text";
import {PhotoTextBox, SmallPhotoCardContainer} from "../../styling/cards";
import {withRouter} from "react-router-dom";


//C
class LargePhotoCard extends React.Component {
    render() {
        return (
            <SmallPhotoCardContainer
                onClick={() => this.props.history.push(this.props.link)}
                cardType="SmallPhotoCard"
                mainBackground={this.props.mainBackground}
                mobileBackground={this.props.mobileBackground}
            >

                <PhotoTextBox small onClick={() => this.props.history.push(this.props.link)}>
                    <SecondaryHeader color={"blue"}>
                        {this.props.mainText}
                    </SecondaryHeader>
                </PhotoTextBox>

            </SmallPhotoCardContainer>
        )
    }

}

export default withRouter(LargePhotoCard)