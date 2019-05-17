import styled from "styled-components";

//Containers
export const Card = styled.div`
    width: 100%;

    height: ${props =>
        (props.cardType === 'TitleCard' && '185px') ||
        (props.cardType === 'PhotoCard' && '499.99px') ||
        (props.cardType === 'TextCard' && '100%')
    }
    
    display: ${props =>
        (props.cardType === 'TitleCard' && 'flex') ||
        (props.cardType === 'PhotoCard' && 'flex') ||
        (props.cardType === 'TextCard' && 'flex')
    }
    
    margin-bottom: 1%;
    justify-content: center;
    align-items: center;
    position: relative;
    
    border-radius: 0px;
    
    background-color: #FFFF;
    
   /* Adapt the background based on url prop */
    background-image: ${props => `url(${props.mainBackground})`};
    background-position: center; 
    
    background-repeat: no-repeat; 
    background-size: cover; 
    
    @media only screen and (max-width: 800px) {
    
        display: ${props =>
            (props.cardType === 'TextCard' && 'block')
        }
    
        border-radius: 10px;
        width: 93%;
        margin: 3%;
          height: ${props =>
            (props.cardType === 'TitleCard' && '125px') ||
            (props.cardType === 'PhotoCard' && '500.22px') ||
            (props.cardType === 'TextCard' && '100%')
        }
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

export const PhotoOverlay =styled.div`
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

export const Photo = styled.div`
    width: 100%;
    height: 400.41px;
    background-image: ${props => props.mobileBackground ? `url(${props.mobileBackground})` :`url(${props.mainBackground})`};
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

export const AlertCard = styled.div`
    position: relative;
    height: 236px;
    width: 93%;
    border-radius: 10px;
    background-color: #2FB6E1;
    margin: 3.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    :hover {
         opacity: 0.7;
         cursor:pointer;
    }
`;