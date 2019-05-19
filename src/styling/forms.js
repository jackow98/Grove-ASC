import styled from "styled-components";

//Container for a generic form across the website
export const FormContainer = styled.div`
    width: 93%;
    margin: 0 3.5%;
    
    display: flex;
    
    padding: 1%;
    border-radius: 10px;
    
    justify-content: center;
    align-items: center;
    position: relative;
        
    background-color: #ECECEC;
    
    @media only screen and (max-width: 800px) {
        display: block;  
    }
 `;

//The fields within the form
export const Form = styled.form`
    position: relative;
    display: block
    width: 100%;
`;

//A small text input for a form
export const TextInput = styled.input`
    box-sizing: border-box;
    width:100%
    height: 56px;
    margin: 1%    
    border-radius: 10px;
    background-color: #FFF;
    border: 2px solid #ABB1BF;
    outline: none
     font-family: "PT Sans";
    font-size: 24px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%
    
    :focus { 
         border: 5px solid #ABB1BF;
    }
    
    @media only screen and (max-width: 800px) {
        margin 0 0 5% 0;  
    }
`;

//A larger text input for a form
export const TextAreaInput = styled.textarea`
    box-sizing: border-box;
    width:100%
    height: 112px;
    margin 1%;
    
    border-radius: 10px;
    background-color: #FFF;
    border: 2px solid #ABB1BF;
    outline: none
     font-family: "PT Sans";
    font-size: 24px;
    
    display: block;
    justify-content: center;
    align-items: center;
    padding: 1%
    
    :focus { 
         border: 5px solid #ABB1BF;
    }
    
    @media only screen and (max-width: 800px) {
        margin 0 0 5% 0;  
        height: 90px;
    }
`;