import React from 'react'
import LargePhotoCard from "../cards/LargePhotoCard";
import {PageContent} from "../../styling/pages";
import PublicPage from "./PublicPage";

//PublicHome page used to display photo cards and act as a window for all users to the rest of the website
class PublicHome extends React.Component {

    render() {
        return (
            <PublicPage>
                <PageContent>
                    <LargePhotoCard
                        mainBackground={"https://lh6.googleusercontent.com/t6UweLs2ilp0tAikXKF5jph2Rq_E84G_s7n9Mp32gfCGu30C518iMmoJNgc=w2400"}
                        mainText={"Take those first steps into club swimming"}
                        buttonText={"About Us"}
                        buttonLink={"/About-Us"}
                    />
                    <LargePhotoCard
                        mainBackground={"https://lh5.googleusercontent.com/7cpgVlPHrPqYQfrvhb-uSBTq6AZChNuk8i5zlSXNCM_6fcKMtbUx2KGnPWA=w2400"}
                        mobileBackground={"https://lh5.googleusercontent.com/ARThs942DoODUHCOQz_Oa_Fj4PGHtfPzn5kLfyMEjhCu6m4i-qIGwIKCPDg=w2400"}
                        mainText={"Track your Progress"}
                        buttonText={"Members"}
                        buttonLink={"/Members"}
                    />
                    <LargePhotoCard
                        mainBackground={"https://lh3.googleusercontent.com/qeHFmOtkqYOvho2p8dkPi4sT9AxOf3LLZVJJ0O3FbNaAnvf8p2DG4dOrUjc=w2400"}
                        mainText={"Book a free trial today"}
                        buttonText={"Contact Us"}
                        buttonLink={"/Contact-Us"}
                    />
                </PageContent>
            </PublicPage>
        )
    }
}

export default PublicHome