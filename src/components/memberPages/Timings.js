import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import TimingsFastest from "./TimingsFastest";
import {SliderText, SlidingMenuContainer} from "../../styling/menus";
import TimingsEvent from "./TimingsEvent";

//Member Timings to display all fastest timings and timings by event
class Timings extends React.Component {

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
            <MemberPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh4.googleusercontent.com/YL1hDJrDb_dRdO9gtFN91h3dgtJfJopwLwpXnL38jy6uIoNpwzuDJVKpldA=w2400"}
                        title={"Timings"}
                    />

                    <SlidingMenuContainer>

                        <SliderText selected={this.state.fastestSelected} onClick={() => this.selectFastest()}>
                            Fastest
                        </SliderText>

                        <SliderText selected={this.state.eventsSelected} onClick={() => this.selectEvents()}>
                            Events
                        </SliderText>
                    </SlidingMenuContainer>

                    {this.state.fastestSelected ? <TimingsFastest/> : <TimingsEvent/>}
                </PageContent>
            </MemberPage>
        )
    }
}

export default Timings