import styled from "styled-components";
import logo from "../assets/GroveNavyLogoLong.png";
import {Document} from "styled-icons/typicons/Document";

export const LongNavyLogo = styled.img`
    height: 49.03px;
    margin: 2%;
    
    content: url(${logo});
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

export const DocumentIcon = styled(Document)`
    width: 20%;
    height: 80%;  
    color: #2FB6E1;
`;