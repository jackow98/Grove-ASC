import {DocumentIcon} from "../../styling/icons";
import {Description} from "../../styling/text";
import {IconCardContainer} from "../../styling/cards";
import React from "react";

//Card for rendering an icon beside some text
//TODO: Make usable without Icon other than document

class IconCard extends React.Component {
    render() {
        return (
            <IconCardContainer icon={this.props.icon}>
                <DocumentIcon/>
                <Description>
                    {this.props.label}
                </Description>
            </IconCardContainer>
        )
    }
}

export default IconCard
