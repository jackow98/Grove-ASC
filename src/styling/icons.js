import styled from "styled-components";
import logo from "../assets/GroveNavyLogoLong.png";

export const LongNavyLogo = styled.img`
    height: 49.03px;
    margin: 2%;
    
    content: url(${logo});
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;