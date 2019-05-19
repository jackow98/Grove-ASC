import React from 'react'
import MemberPage from "./MemberPage";
import {PageContent} from "../../styling/pages";
import SmallPhotoCard from "../cards/SmallPhotoCard";

//Member Home page acts as a window to all member features
class MemberHome extends React.Component {

    render() {
        return (
            <MemberPage>
                <PageContent>
                    <SmallPhotoCard
                        mainBackground={"https://lh4.googleusercontent.com/YL1hDJrDb_dRdO9gtFN91h3dgtJfJopwLwpXnL38jy6uIoNpwzuDJVKpldA=w2400"}
                        mainText={"Timings"}
                    />
                    <SmallPhotoCard
                        mainBackground={"https://lh5.googleusercontent.com/yZLsp9SVfF7yp6lQcfVJC0pwttaJv_gkyM_HjiDHwuN97Nb0XVn_EUkieSA=w2400"}
                        mainText={"Achievements"}
                    />
                    <SmallPhotoCard
                        mainBackground={"https://lh4.googleusercontent.com/mh1pURaPvzHRdAf8t0u1lhREKbl32Pux8H3Gz_d-nDTqvmyhjGO6YkR98Gs=w2400"}
                        mainText={"20 Min Swims"}
                    />
                    <SmallPhotoCard
                        mainBackground={"https://lh6.googleusercontent.com/c9hXlfKHAGsFW1HadfNILLTn5UO-U-37nLObV60azLhC-lPnVvWOotSvHhk=w2400"}
                        mainText={"News"}
                    />
                    <SmallPhotoCard
                        mainBackground={"https://lh5.googleusercontent.com/4p4GwiDsncZ7OVIjW2UTM4vtWcyE9YecM1O7vWBx3881SJjmVznoqaQ3cMQ=w2400"}
                        mainText={"Store"}
                    />
                    <SmallPhotoCard
                        mainBackground={"https://lh5.googleusercontent.com/ijRgUhx2_asUrHz5D6ENDIo0QkNhtg_a_x-YXA7FPN9b8lXycpbmmwLZq6Y=w2400"}
                        mainText={"Calendar"}
                    />
                    <SmallPhotoCard
                        mainBackground={"https://lh4.googleusercontent.com/ZdoAr5BsEuc5b902ffnJYVazgZpx8XALKeHe2zw6iDb3sdB7mro8mLAWxDI=w2400"}
                        mainText={"Swimmer Stories"}
                    />
                </PageContent>
            </MemberPage>
        )
    }
}

export default MemberHome