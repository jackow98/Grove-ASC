import {SecondaryHeader, TertiaryHeader} from "../../styling/text";
import {DataCardContainer} from "../../styling/cards";
import React from "react";

//Card for rendering retrieved data
class DataCard extends React.Component {
    render() {
        return (
            <DataCardContainer grey={this.props.grey}>
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

export default DataCard
