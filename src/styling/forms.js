import styled from "styled-components";

export const FormContainer = styled.div`
    width: 93%;
    margin: 3.5%;
    
    display: block;
    
    padding: 2%;
    border-radius: 10px;
    
    justify-content: center;
    align-items: center;
    position: relative;
        
    background-color: #ECECEC;
 `;

export const Form = styled.form`
    position: relative;
    display: block
    
`;

export const TextInput = styled.input`
    box-sizing: border-box;
    width:100%
    height: 56px;
    
    margin: 1%
    
    border-radius: 10px;
    background-color: #FFF;
    border: 2px solid #ABB1BF;
    outline: none
     font-family: "Myriad Pro Light";
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

export const TextAreaInput = styled.textarea`
    box-sizing: border-box;
    width:100%
    height: 156px;
    margin 1%;
    
    border-radius: 10px;
    background-color: #FFF;
    border: 2px solid #ABB1BF;
    outline: none
     font-family: "Myriad Pro Light";
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
    }
`;