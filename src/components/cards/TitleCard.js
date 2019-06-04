import React from 'react'
import {Card, PhotoOverlay} from "../../styling/cards";
import {OverlayHeader} from "../../styling/text";

//Card for a page title and an image background to be used as header of page or link to page
class TitleCard extends React.Component {
    render() {
        return (
            <Card
                cardType="TitleCard"
                mainBackground={this.props.mainBackground}
                mobileBackground={this.props.mobileBackground}
                title={this.props.title}
            >
                <PhotoOverlay>
                    <OverlayHeader>
                        {this.props.title}
                    </OverlayHeader>
                </PhotoOverlay>
            </Card>
        )
    }
}

export default TitleCard