import React from 'react'
import styled from 'styled-components'
import {MainHeader} from "../styling/GlobalStyling";

export const Card = styled.div`
    width: 100%;
    height: 499.99px;
    margin-bottom: 1%;
    
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    border-radius: 0px;
    
    background-color: #ECECEC;
    
   /* Adapt the background based on url prop */
    background-image: ${props => `url(${props.mainBackground})`};
    background-position: center; 
    
    background-repeat: no-repeat; 
    background-size: cover; 
    
    @media only screen and (max-width: 800px) {
        width: 93%;
        margin: 3%;
        height: 500.22px;
        align-items: flex-start;
        justify-content: none;
        background-image: ${props => props.mobileBackground?`url(${props.mobileBackground})`:`url(${props.mainBackground})`};
    }
 `;

export const PhotoTextBox = styled.div`
    
    width: 40%;
    height: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 10px;

    background-color: white;
    opacity 0.9;
    
    :hover {
         opacity: 1;
         cursor:pointer;
    }
    
    @media only screen and (max-width: 800px) {
       width: 100%;
       height: 30%;
       border-radius: 0px;
    }
    
`;

export const MainButton = styled.button`
    padding: 15px 48px;
    border: none;
    position: absolute;
    bottom: 2%;
    
    border-radius: 10px;
    outline:none;
    
    background-color: #2FB6E1;
    color: white;
    
    font-family: "Myriad Pro Light";
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    font-size: 32px;
    
   :hover {
         background-color: #000040;
         cursor:pointer;
    }
`;

class PhotoCard extends React.Component{
    render(){
        return(
            <Card mainBackground={this.props.mainBackground} mobileBackground={this.props.mobileBackground}>
                <PhotoTextBox>
                    <MainHeader>
                        {this.props.mainText}
                    </MainHeader>
                </PhotoTextBox>
                <MainButton>
                    {this.props.buttonText}
                </MainButton>
            </Card>
        )
    }

}

export default PhotoCard