import React from 'react'
import {PageContent} from "../../styling/pages";
import PublicPage from "./PublicPage";
import TitleCard from "../cards/TitleCard";
import ContactForm from "../form/ContactForm";
import {MainButton} from "../../styling/buttons";
import {postContactForm} from "../../accountHandling/restFunctions";

//Page for users to fill out a form and send to the club
class ContactUs extends React.Component {
    render() {
        return (
            <PublicPage>
                <PageContent>
                    <TitleCard
                        mainBackground={"https://lh3.googleusercontent.com/qeHFmOtkqYOvho2p8dkPi4sT9AxOf3LLZVJJ0O3FbNaAnvf8p2DG4dOrUjc=w2400"}
                        title={"Contact Us"}
                    />
                    <ContactForm/>

                    <MainButton onClick={() => {postContactForm()}}>
                        Submit
                    </MainButton>
                </PageContent>
            </PublicPage>
        )
    }
}

export default ContactUs;