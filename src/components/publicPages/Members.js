import React from 'react'
import {PageContent} from "../../styling/pages";
import PublicPage from "./PublicPage";
import TitleCard from "../cards/TitleCard";
import SignInForm from "../form/SignInForm";
import {Description, MainHeader} from "../../styling/text";
import {Documents, IconCardContainer} from "../../styling/cards";
import {DocumentIcon} from "../../styling/icons";
import IconCard from "../cards/IconCard";

class Members extends React.Component {
    render() {
        return (
            <PublicPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh5.googleusercontent.com/ARThs942DoODUHCOQz_Oa_Fj4PGHtfPzn5kLfyMEjhCu6m4i-qIGwIKCPDg=w2400"}
                        title={"Members"}
                    />

                    <SignInForm/>

                    <Documents>
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

                    </Documents>

                </PageContent>
            </PublicPage>
        )
    }
}

export default Members;