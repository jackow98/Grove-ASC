import React from 'react'
import {Card, PhotoOverlay} from "../../styling/cards";
import {OverlayHeader} from "../../styling/text";

class TitleCard extends React.Component{
    render(){
        return(
            <Card
                cardType="TitleCard"
                mainBackground={this.props.mainBackground}
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