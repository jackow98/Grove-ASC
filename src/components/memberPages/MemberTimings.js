import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import TitleCard from "../cards/TitleCard";
import SlidingMenu from "../navigation/SlidingMenuContainer";

//Member Timings to display all fastest timings and timings by event
class MemberTimings extends React.Component {

    render() {
        return (
            <MemberPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh4.googleusercontent.com/YL1hDJrDb_dRdO9gtFN91h3dgtJfJopwLwpXnL38jy6uIoNpwzuDJVKpldA=w2400"}
                        title={"Timings"}
                    />

                    <SlidingMenu/>
                </PageContent>
            </MemberPage>
        )
    }
}

export default MemberTimings
