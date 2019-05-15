import React from 'react'
import TopMenu from "../navigation/TopMenu";
import PhotoCard from "../cards/PhotoCard";
import {PageContent} from "../../styling/pages";

class Home extends React.Component{

    render(){
        return(
            <div>
                <TopMenu/>
                <PageContent>
                    <PhotoCard
                        mainBackground={"https://lh6.googleusercontent.com/t6UweLs2ilp0tAikXKF5jph2Rq_E84G_s7n9Mp32gfCGu30C518iMmoJNgc=w2400"}
                        mainText={"Take those first steps into club swimming"}
                        buttonText={"About Us"}
                        buttonLink={"/About-Us"}
                    />
                    <PhotoCard
                        mainBackground={"https://lh5.googleusercontent.com/7cpgVlPHrPqYQfrvhb-uSBTq6AZChNuk8i5zlSXNCM_6fcKMtbUx2KGnPWA=w2400"}
                        mobileBackground={"https://lh5.googleusercontent.com/ARThs942DoODUHCOQz_Oa_Fj4PGHtfPzn5kLfyMEjhCu6m4i-qIGwIKCPDg=w2400"}
                        mainText={"Track your Progress"}
                        buttonText={"Members"}
                        buttonLink={"/Members"}
                    />
                    <PhotoCard
                        mainBackground={"https://lh3.googleusercontent.com/qeHFmOtkqYOvho2p8dkPi4sT9AxOf3LLZVJJ0O3FbNaAnvf8p2DG4dOrUjc=w2400"}
                        mainText={"Book a free trial today"}
                        buttonText={"Contact Us"}
                        buttonLink={"/Contact-Us"}
                    />
                </PageContent>
            </div>
        )
    }

}

export default Home