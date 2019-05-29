import styled from "styled-components";

export const PageContent = styled.div`
    margin-top: 7%; 
    
    @media only screen and (max-width: 600px) {
        margin-top: 12%;
    }
    
    @media only screen and (max-width: 600px) {
        margin-top: 14%;
    }
`;

export const PageContainer = styled.div`
    align-content: flex-start;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
`;