import styled from "styled-components";

//Container for a generic wide card
export const Card = styled.div`
    width: 100%;

    height: ${props =>
    (props.cardType === 'TitleCard' && '145px') ||
    (props.cardType === 'LargePhotoCard' && '499.99px') ||
    (props.cardType === 'SmallPhotoCard' && '200px') ||
    (props.cardType === 'TextCard' && '100%')
    }
    
    display: flex;
    
    margin-bottom: 1%;
    justify-content: center;
    align-items: center;
    position: relative;
    
    border-radius: ${props =>
    (props.cardType === 'TitleCard' && '0px') ||
    (props.cardType === 'LargePhotoCard' && '0px') ||
    (props.cardType === 'SmallPhotoCard' && '0px') ||
    (props.cardType === 'TextCard' && '10px')
    }
   
    background-image: ${props => `url(${props.mainBackground})`};
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-color: #FFFF;
    
    @media only screen and (max-width: 800px) {
    
        height: ${props =>
            (props.cardType === 'TitleCard' && '100px') ||
            (props.cardType === 'LargePhotoCard' && '500.22px') ||
            (props.cardType === 'TextCard' && '100%')
         };
    
        display: ${props => (props.cardType === 'TextCard' && 'block')};
    
        border-radius: 10px;    
        
        width: 93%;
        margin: 3%;
        align-items: flex-start;
        justify-content: none;
        background-image: ${props => props.mobileBackground ? `url(${props.mobileBackground})` : `url(${props.mainBackground})`};
    }
 `;


//A container for a text box overlaying a photo
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

//Container for a semi transparent dark photo overlay
export const PhotoOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
     @media only screen and (max-width: 800px) {
        border-radius: 10px;
        }
    
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,64,0.41);
`;

//Container for a photograph
export const Photo = styled.div`
    width: 100%;
    height: 400.41px;
    background-image: ${props => props.mobileBackground ? `url(${props.mobileBackground})` : `url(${props.mainBackground})`};
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    
     @media only screen and (max-width: 800px) {
         height: 200.41px;
       border-radius: 10px 10px 0px 0px;
      }
 `;

export const TextualContent = styled.div`
    clear: both;
    position: block;
    background: #FFFF;   
    align-items: left;
    margin: 3%;
    height: 100%
    width: 80%;
    
    @media only screen and (max-width: 800px) {
         width: 100%;
    }
`;

//Card for adverts and important information, acts as a big button
export const AlertCard = styled.div`
    position: relative;
    height: 136px;
    width: 93%;
    border-radius: 10px;
    background-color: #2FB6E1;
    margin: 3.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    :hover {
         opacity: 0.7;
         cursor:pointer;
    }
`;

//A container for list of documents
export const Documents = styled.div`
    width: 93%;
    display: block;
    justify-content: left;
    margin: 3.5%;
    align-items: center;    
`;

//Container for a card rendering an icon beside some text
export const IconCardContainer = styled.div`
 
    height: ${props => props.narrow ? `70%` : `100%`};
    width: ${props => props.narrow ? `93%` : `100%`};
    border-radius: 10px;
    background-color: #ECECEC;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.narrow ? `3.5% 3.5%` : `4% 0`};
    
    :hover {
         opacity: 0.7;
         cursor:pointer;
    }
`;

