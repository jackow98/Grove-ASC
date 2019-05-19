import {Description} from "../../styling/text";
import {IconCardContainer} from "../../styling/cards";
import React from "react";
import {LabelIcon} from "../../styling/icons";

//Card for rendering an icon beside some text
//TODO: Make usable without Icon other than document

class IconCard extends React.Component {
    render() {
        return (
            <IconCardContainer narrow={this.props.narrow} icon={this.props.icon}>
                <LabelIcon icon={"Document"}/>
                <Description center>
                    {this.props.label}
                </Description>
            </IconCardContainer>
        )
    }
}

export default IconCard
