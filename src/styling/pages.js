import styled from "styled-components";

export const PageContent = styled.div`
    margin-top: 8%;
    flex: 1 0 auto;
    
    @media only screen and (max-width: 800px) {
        margin-top: 14%;
    }
    
    @media only screen and (max-width: 600px) {
        margin-top: 20%;
    }
    
`;

export const PageContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column; 
`;