import React from 'react'
import styled from 'styled-components'
import {MainHeader} from "../styling/GlobalStyling";

export const Card = styled.div`
    width: 93%;
    height: 499.99px;
    margin: 3%;
    position:relative;
    
    border-radius: 10px;
    
    background-color: #ECECEC;
    background-image: url("https://lh6.googleusercontent.com/t6UweLs2ilp0tAikXKF5jph2Rq_E84G_s7n9Mp32gfCGu30C518iMmoJNgc=w2400");
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
`;

export const PhotoTextBox = styled.div`
    width: 100%;
    height: 40%;
    
    display: flex;
    align-items: center;
    justify-content: center

    background-color: white;
    opacity 0.8
`;

export const MainButton = styled.button`
    padding: 15px 48px;
    border: none;
    position: absolute;
    bottom: 5%;
    right: 31%;
    left: 31%;
    
    background-color: #2FB6E1;
    color: white;
    
    font-family: "Myriad Pro Light";
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    font-size: 24px;
`;

class PhotoCard extends React.Component{
    render(){
        return(
            <Card>
                <PhotoTextBox>
                    <MainHeader>
                        Take those first steps into club swimming
                    </MainHeader>
                </PhotoTextBox>
                <MainButton>
                    About Us
                </MainButton>
            </Card>
        )
    }

}

export default PhotoCard