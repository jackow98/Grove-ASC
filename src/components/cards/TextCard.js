import React from 'react'

import {Card, Photo, TextualContent} from "../../styling/cards";
import {withRouter} from "react-router-dom";
import {Description, MainHeader} from "../../styling/text";

//Card with image background and a short header with a related button linking to content
class TextCard extends React.Component {
    render() {
        return (
            <Card
                cardType="TextCard"
            >
                <Photo
                    mainBackground={this.props.mainBackground}
                />

                <TextualContent>
                    <MainHeader left>
                        {this.props.header}
                    </MainHeader>

                    <Description>
                        {this.props.description}
                    </Description>
                </TextualContent>
            </Card>
        )
    }

}

export default withRouter(TextCard)