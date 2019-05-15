import React from 'react'
import {MainHeader} from "../../styling/text";
import {PhotoTextBox, Card} from "../../styling/cards";
import {MainButton} from "../../styling/buttons";
import {withRouter} from "react-router-dom";

class PhotoCard extends React.Component{
    render(){
        return(
            <Card mainBackground={this.props.mainBackground} mobileBackground={this.props.mobileBackground}>
                <PhotoTextBox>
                    <MainHeader>
                        {this.props.mainText}
                    </MainHeader>
                </PhotoTextBox>
                <MainButton onClick = {() => this.props.history.push(this.props.buttonLink)}>
                    {this.props.buttonText}
                </MainButton>
            </Card>
        )
    }

}

export default withRouter(PhotoCard)