import {Description, MainHeader, SecondaryHeader, TertiaryHeader} from "../../styling/text";
import {DataCardContainer, IconCardContainer} from "../../styling/cards";
import React from "react";
import {LabelIcon} from "../../styling/icons";
import TextCard from "./TextCard";

//Card for rendering retrieved data
class IconCard extends React.Component {
    render() {
        return (
            <DataCardContainer>
                <SecondaryHeader left>
                    {this.props.mainTitle}
                </SecondaryHeader>
                <TertiaryHeader left>
                    {this.props.subTitle}
                </TertiaryHeader>

                {this.props.children}
            </DataCardContainer>
        )
    }
}

export default IconCard
