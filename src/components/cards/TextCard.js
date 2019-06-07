import React from 'react'

import {Card, Photo, TextualContent} from "../../styling/cards";
import {withRouter} from "react-router-dom";
import {Description, MainHeader, TertiaryHeader} from "../../styling/text";

//Card with image background and a short header with a related button linking to content
class TextCard extends React.Component {
    render() {
        return (
            <Card cardType="TextCard" grey={this.props.grey}>
                <Photo
                    big={this.props.big}
                    mainBackground={this.props.mainBackground}
                />

                <TextualContent grey={this.props.grey} left={!(this.props.center)}>
                    <MainHeader left={!(this.props.center)}>
                        {this.props.header}
                    </MainHeader>

                    <TertiaryHeader left={!(this.props.center)}>
                        {this.props.subTitle}
                    </TertiaryHeader>

                    <Description left={!(this.props.center)}>
                        {this.props.description}
                    </Description>
                </TextualContent>
            </Card>
        )
    }

}

export default withRouter(TextCard)