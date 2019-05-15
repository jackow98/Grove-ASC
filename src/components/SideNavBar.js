import React from 'react'
import styled from 'styled-components'
import {Close} from "styled-icons/evil/Close";

export const Rectangle = styled.div`
    height: 100%;
    width: ${props => props.open ? "100%;" : "0;"};
    position: fixed;
    z-index: 20;
    
    top: 0;
    left: 0;
    background-color: #000040;
    
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 2%;
    
    text-align: center; 
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-height: 450px) {
        padding-top: 15px;
    }
`;

export const CloseIcon = styled(Close)`  
    width: 49.03px;
    height: 49.03px;
    margin: 3%;
    
    color: #FFFF;
    
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;


class SideNavBar extends React.Component{
    render(){
        return(
            <Rectangle open={this.props.open}>
                <CloseIcon onClick = {this.props.closeSideMenu()}/>

            </Rectangle>
        )
    }
}

export default SideNavBar