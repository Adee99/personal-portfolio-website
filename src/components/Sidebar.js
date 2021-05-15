import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation'

function Sidebar({menuToggler}) {
    return (
        <SidebarStyles className={`${menuToggler ? 'nav-toggler' : ''}`}>
            <Navigation/>
        </SidebarStyles>
            
      
    )
}

// define variable for styles
const SidebarStyles = styled.div`
    width: 16.42rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    //handle side bar fro responsive layout
    overflow: hidden;
    transition: all .4s ease-in-out;

    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
    }

`;

export default Sidebar;
