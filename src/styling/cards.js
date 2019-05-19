import styled from "styled-components";

//Container for a generic wide card
export const Card = styled.div`

    align-items: center;
    background-color: #FFFF;
    background-image: ${props => `url(${props.mainBackground})`};
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    border-radius: ${props =>
        (props.cardType === 'TitleCard' && '0px') ||
        (props.cardType === 'LargePhotoCard' && '0px') ||
        (props.cardType === 'TextCard' && '10px')
    }
   
    display: flex;
    height: ${props =>
        (props.cardType === 'TitleCard' && '145px') ||
        (props.cardType === 'LargePhotoCard' && '499.99px') ||
        (props.cardType === 'TextCard' && '100%')
    }
    
    justify-content: center;
    margin-bottom: 1%;
    position: relative;
    width: 100%;
    
    @media only screen and (max-width: 800px) {
    
        align-items: flex-start;
        background-image: ${props => props.mobileBackground ? `url(${props.mobileBackground})` : `url(${props.mainBackground})`};
        border-radius: 10px;    
        display: ${props => (props.cardType === 'TextCard' && 'block')};
        height: ${props =>
            (props.cardType === 'TitleCard' && '100px') ||
            (props.cardType === 'LargePhotoCard' && '500.22px') ||
            (props.cardType === 'TextCard' && '100%')
        };
    
        justify-content: none;
        margin: 5% 3.5%;
        width: 93%;
    }
 `;



//A container for a text box overlaying a photo
export const PhotoTextBox = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 10px;
    display: flex;
    height: 40%;
    justify-content: center;
    opacity: 0.9;
    width: ${props => (props.small ? "82%" : "40%")}
   
    :hover {
         opacity 0.9;
         cursor:pointer;
    }
    
    @media only screen and (max-width: 800px) {
       border-radius: ${props => (props.small ? "10px" : "0px")};
       height: ${props => (props.small ? "35%" : "30%")};
       opacity 0.9;
       width: ${props => (props.small ? "82%" : "100%")};
    }
`;

//Container for a semi transparent dark photo overlay
export const PhotoOverlay = styled.div`
    align-items: center;
    background-color: rgba(0,0,64,0.41);
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;
    
    @media only screen and (max-width: 800px) {
        border-radius: 10px;
    }
`;

//Container for a photograph
export const Photo = styled.div`
    background-image: ${props => props.mobileBackground ? `url(${props.mobileBackground})` : `url(${props.mainBackground})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    height: 400.41px; 
    width: 100%; 
    
     @media only screen and (max-width: 800px) {
         height: 200.41px;
         border-radius: 10px 10px 0px 0px;
     }
 `;

export const TextualContent = styled.div`
    align-items: left;
    background: #FFFF;   
    clear: both;
    height: 100%
    margin: 3%;
    position: block;
    width: 80%;
    
    @media only screen and (max-width: 800px) {
         width: 100%;
    }
`;

//Card for adverts and important information, acts as a big button
export const AlertCard = styled.div`
    align-items: center;
    background-color: #2FB6E1;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    display: flex;
    height: 136px;
    justify-content: center;
    margin: 3.5%;
    position: relative;
    width: 93%;
    :hover {
         cursor:pointer;
         opacity: 0.7;
    }
`;

//A container for list of documents
export const FlexiGrid = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3.5%;
    width: 93%;    
`;


//Container for a card rendering an icon beside some text
export const IconCardContainer = styled.div`
    align-content: center;
    align-items: center;
    background-color: #f0eeeecf;
    border-radius: 10px;
    display: flex;
    height: 100px;
    justify-content: center;
    margin: 1% 3.5%;
    width: 43%
    
    :hover {
         cursor:pointer;
         opacity: 0.7;
    }
    
    @media only screen and (max-width: 800px) {
         width: 92%;
    }
`;

export const SmallPhotoCardContainer = styled.div`  
    align-content: center;
    align-items: center;
    background-color: #f0eeeecf;
    background-image: ${props => `url(${props.mainBackground})`};
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    border-radius: 10px;
    display: flex;
    height: 200px;
    justify-content: center;
    margin: 3.5%;
    width: 40%;
    
    :hover {
         cursor:pointer;
         opacity: 0.7;
    }
    @media only screen and (max-width: 800px) {
         width: 92%;
    }
`;

export const DataCardContainer = styled.div`
    width: 38%;
    margin: 0 4% 3.5%;    
    display: block;
    background: #f0eeeecf;
    border-radius: 10px;
    padding: 2%;    
       
    @media only screen and (max-width: 800px) {
         width: 93%;
    }
`;

export const DataLine = styled.div`
    display: flex
    flex: 1 3 auto;
    font-family: "PT Sans";
    font-size: 24px;
    line-height: 24px;
    margin: 7%;
    width: 100%;
`;

export const DataEntry = styled.div`
    width: 50%;
`;