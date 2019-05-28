import React from 'react'
import {SliderText, SlidingMenuContainer} from "../../styling/menus";

class SlidingMenu extends React.Component {

    //Functions to change state depending on slide menu
    selectFastest = () => {
        this.setState({fastestSelected: true, eventsSelected: false})
    };
    selectEvents = () => {
        this.setState({fastestSelected: false, eventsSelected: true})
    };

    constructor(props) {
        super(props);
        this.state = {fastestSelected: true, eventsSelected: false};
    }

    render() {
        return (
            <SlidingMenuContainer>

                <SliderText selected={this.state.fastestSelected} onClick={() => this.selectFastest()}>
                    Fastest
                </SliderText>

                <SliderText selected={this.state.eventsSelected} onClick={() => this.selectEvents()}>
                    Events
                </SliderText>
            </SlidingMenuContainer>
        )
    }
}

export default SlidingMenu