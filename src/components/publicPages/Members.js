import React from 'react'
import {PageContent} from "../../styling/pages";
import PublicPage from "./PublicPage";
import TitleCard from "../cards/TitleCard";
import SignInForm from "../form/SignInForm";
import {MainHeader} from "../../styling/text";
import {FlexiGrid} from "../../styling/cards";
import IconCard from "../cards/IconCard";

class Members extends React.Component {
    render() {
        return (
            <PublicPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh6.googleusercontent.com/jrh4UI4C-vDdq0N5tvYipQ8ZOyu0zrruQL7rMce7-XO08POVesB6UFcMyUU=w2400"}
                        mobileBackground={"https://lh5.googleusercontent.com/ARThs942DoODUHCOQz_Oa_Fj4PGHtfPzn5kLfyMEjhCu6m4i-qIGwIKCPDg=w2400"}
                        title={"Members"}
                    />

                    <SignInForm/>

                    <FlexiGrid>
                        <MainHeader left>
                            Information
                        </MainHeader>

                        <IconCard
                            icon={"File"}
                            label={"Courses For Swimmers"}
                        />
                        <IconCard
                            icon={"File"}
                            label={"Lane development plan"}
                        />
                        <IconCard
                            icon={"File"}
                            label={"Developing with Grove"}
                        />
                        <IconCard
                            icon={"File"}
                            label={"Spring/Summer calendar 2019"}
                        />
                    </FlexiGrid>

                </PageContent>
            </PublicPage>
        )
    }
}

export default Members;