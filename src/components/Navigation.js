import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import profilePic from '../Images/profilePic.png';

function Navigation() {
    return (
        <NavigationStyles>
            <div className="profilePic">
            <img src={profilePic} alt="DeveloperImage"/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class">Resume</NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink to="/work" activeClassName="active-class" exact>Work</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>©2021 Developed by Adeepa Jayawardana</p>
            </footer>
        </NavigationStyles>
    )
}

// define variable for styles
const NavigationStyles = styled.div`
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    height:100%;
    width:100%;
    display:flex;
    border-right: 4px solid var(--border-color);

    .profilePic{
        width:100%;
        border-bottom : 2px solid var(--border-color);
        padding-bottom : 0.2rem;
        text-align : center;
        padding: 1rem 0;
        /* image */
        img{
            width:70%;
            border-radius:50%;
            border: 4px solid var(--border-color);
            
        }
    }

    .nav-items{
        width:100%;
        text-align:center;

        /* active class color */

        .active-class{
            background-color:#2c3436;
        }


        li{
            display:block;
            a{
                display: block;
                position:relative;
                padding:.4rem 0;
                z-index:3;
                font-weight:500;
                transition: all 0.4s ease-in-out;
                letter-spacing:1px;
                
                

                &:hover{
                    cursor: grab;
                    
                }
                /* anchor tag effects */
                /* handle hover effects, color, animations */
                &::before{
                    content:"";
                    position:absolute;
                    bottom:0;
                    left:0;
                    width: 0;
                    height: 50%;
                    /* hovercolor */
                    background-color:#4f97d6;
                    /* cubic - bezier to hover effect animations */
                    transition: All 0.5s  cubic-bezier(.55,.84,1,.06);
                    z-index:4;
                    opacity:0.2;

                }
            
            } 
            
            a:hover::before{
                width: 100%;
                height:100%;
            }
          
        }
    }

    .footer{
        width:100%;
        border-top:1px solid var(--border-color);
        p{
            display:block;
            padding:1rem 0;
            text-align:center;
            font-size:0.75rem;

        }
    }
`;

export default Navigation;

