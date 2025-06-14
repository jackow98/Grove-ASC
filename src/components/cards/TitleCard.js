import React from "react";
import { Card, PhotoOverlay } from "../../styling/cards";
import { OverlayHeader } from "../../styling/text";
import gradient from '../../assets/images/gradient.png';


//Card for a page title and an image background to be used as header of page or link to page
class TitleCard extends React.Component {
  render() {
    return (
      <Card
        cardType="TitleCard"
        mainBackground={gradient}
        title={this.props.title}
      >
        <PhotoOverlay>
          <OverlayHeader>{this.props.title}</OverlayHeader>
        </PhotoOverlay>
      </Card>
    );
  }
}

export default TitleCard;
