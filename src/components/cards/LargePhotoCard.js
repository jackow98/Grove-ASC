import React from "react";
import { MainHeader } from "../../styling/text";
import { Card, PhotoTextBox } from "../../styling/cards";
import { MainButton } from "../../styling/buttons";
import { withRouter } from "react-router-dom";

//Card with image background and a short header with a related button linking to content
class LargePhotoCard extends React.Component {
  render() {
    return (
      <Card
        cardType="LargePhotoCard"
        mainBackground={this.props.mainBackground}
        mobileBackground={this.props.mobileBackground}
        onClick={() => this.props.history.push(this.props.link)}
      >
        <PhotoTextBox onClick={() => this.props.history.push(this.props.link)}>
          <MainHeader>{this.props.mainText}</MainHeader>
        </PhotoTextBox>

        <MainButton
          photo
          onClick={() => this.props.history.push(this.props.link)}
        >
          {this.props.buttonText}
        </MainButton>
      </Card>
    );
  }
}

export default withRouter(LargePhotoCard);
