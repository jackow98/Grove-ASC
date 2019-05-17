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
                    mainBackground={"https://lh6.googleusercontent.com/N88KXfUWywOiAp1DufdILErHtmy8VYFJnhaJ7kfro_2a-gu8sHyPHwmqLQ0=w2400"}
                />

                <TextualContent>
                    <MainHeader left>
                        Who are we?
                    </MainHeader>

                    <Description>
                        Grove ASC is an amateur swimming club based at Dalry Swim Centre in Edinburgh for school aged swimmers. We cater for a mix of abilities and pride ourselves in being a friendly, welcoming and enthusiastic club.
                    </Description>
                </TextualContent>



            </Card>
        )
    }

}

export default withRouter(TextCard)