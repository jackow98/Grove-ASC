import React from 'react'
import {MainHeader} from "../../styling/text";
import {Card, PhotoTextBox} from "../../styling/cards";
import {withRouter} from "react-router-dom";


//C
class LargePhotoCard extends React.Component {
    render() {
        return (
            <Card
                cardType="SmallPhotoCard"
                mainBackground={this.props.mainBackground}
                mobileBackground={this.props.mobileBackground}
            >

                <PhotoTextBox center onClick={() => this.props.history.push(this.props.buttonLink)}>
                    <MainHeader>
                        {this.props.mainText}
                    </MainHeader>
                </PhotoTextBox>

            </Card>
        )
    }

}

export default withRouter(LargePhotoCard)