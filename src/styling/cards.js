import styled from "styled-components";

//Containers
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
        background-image: ${props => props.mobileBackground ? `url(${props.mobileBackground})` : `url(${props.mainBackground})`};
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
    opacity: 1;
    
    :hover {
         opacity 0.9;
         cursor:pointer;
    }
    
    @media only screen and (max-width: 800px) {
       width: 100%;
       height: 30%;
       border-radius: 0px;
       opacity 0.9;
    }
    
`;

