import React from 'react'
import {PageContent} from "../../styling/pages";
import PublicPage from "./PublicPage";
import TitleCard from "../cards/TitleCard";
import ContactForm from "../form/ContactForm";
import {MainButton} from "../../styling/buttons";
import {postContactForm} from "../../accountHandling/restFunctions";
import TextCard from "../cards/TextCard";

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

                    <TextCard
                        mainBackground={"https://lh5.googleusercontent.com/4p4GwiDsncZ7OVIjW2UTM4vtWcyE9YecM1O7vWBx3881SJjmVznoqaQ3cMQ=w2400"}
                        header={"Get in touch"}
                        description={<p>You can message us on <a href="https://www.facebook.com/Groveasc/">facebook</a> using the messenger icon in the bottom right or drop us an email at <a href="mailto:groveasc@gmail.co.uk">groveasc@gmail.co.uk</a></p>}
                    />

                    {/*<ContactForm/>*/}

                    {/*<MainButton onClick={() => {postContactForm()}}>*/}
                        {/*Submit*/}
                    {/*</MainButton>*/}
                </PageContent>
            </PublicPage>
        )
    }
}

export default ContactUs;