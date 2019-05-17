import React from 'react'
import {PageContent} from "../../styling/pages";
import PublicPage from "./PublicPage";
import TitleCard from "../cards/TitleCard";
import TextCard from "../cards/TextCard";


class AboutUs extends React.Component {

    render() {
        return (
            <PublicPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh6.googleusercontent.com/t6UweLs2ilp0tAikXKF5jph2Rq_E84G_s7n9Mp32gfCGu30C518iMmoJNgc=w2400"}
                        title={"About Us"}
                    />

                    <TextCard/>
                </PageContent>
            </PublicPage>
        )
    }
}

export default AboutUs;