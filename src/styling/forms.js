    import styled from "styled-components";

//Container for a generic form across the website
export const FormContainer = styled.div`
    align-items: center;
    background-color: #f0eeeecf;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin: 0 2.5%;
    padding: 1%;
    position: relative;
    width: 93%;
    
    @media only screen and (max-width: 800px) {
        display: block;  
        width: 89%;
        padding: 3%;
    }
 `;

//The fields within the form
export const Form = styled.form`
    display: block
    position: relative;
    width: 100%;
`;

//A small text input for a form
export const TextInput = styled.input`
    align-items: center;
    background-color: #FFF;
    border: 2px solid #ABB1BF;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    font-family: "PT Sans";
    font-size: 24px;
    height: 100%;
    justify-content: center;
    margin: 1%;
    outline: none;
    padding: 1%;
    width: 98%;
   
    :focus { 
         border: 5px solid #ABB1BF;
    }
    
    @media only screen and (max-width: 800px) {
        margin 0 0 5% 0;  
    }
`;

//A larger text input for a form
export const TextAreaInput = styled.textarea`
    align-items: center;
    background-color: #FFF;
    border: 2px solid #ABB1BF;
    border-radius: 10px;
    box-sizing: border-box;
    display: block;
    font-family: "PT Sans";
    font-size: 24px;
    height: 112px;
    justify-content: center;
    margin 1%;
    outline: none
    padding: 1%
    width: 98%
    
    :focus { 
         border: 5px solid #ABB1BF;
    }
    
    @media only screen and (max-width: 800px) {
        margin 0 0 5% 0;  
        height: 90px;
    }
`;