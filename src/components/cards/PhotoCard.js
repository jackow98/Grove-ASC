import React from 'react'
import {MainHeader} from "../../styling/text";
import {Card, PhotoTextBox} from "../../styling/cards";
import {MainButton} from "../../styling/buttons";
import {withRouter} from "react-router-dom";

//Card with image background and a short header with a related button linking to content
class PhotoCard extends React.Component {
    render() {
        return (
            <Card
                cardType="PhotoCard"
                mainBackground={this.props.mainBackground}
                mobileBackground={this.props.mobileBackground}
            >

                <PhotoTextBox onClick={() => this.props.history.push(this.props.buttonLink)}>
                    <MainHeader>
                        {this.props.mainText}
                    </MainHeader>
                </PhotoTextBox>

                <MainButton photo onClick={() => this.props.history.push(this.props.buttonLink)}>
                    {this.props.buttonText}
                </MainButton>
            </Card>
        )
    }

}

export default withRouter(PhotoCard)