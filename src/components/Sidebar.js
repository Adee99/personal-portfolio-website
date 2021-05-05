import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation'

function Sidebar() {
    return (
        <SidebarStyles>
            <Navigation/>
        </SidebarStyles>
            
      
    )
}

// define variable for styles
const SidebarStyles = styled.div`
        height: 100vh;
        position:fixed;
        background-color: var( --sidebar-dark-color);
        width : 16.42rem;

`;

export default Sidebar;
