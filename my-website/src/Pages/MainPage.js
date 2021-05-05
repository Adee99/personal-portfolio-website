import React from 'react';
import styled from 'styled-components';
import Atoms from  '../components/Atoms';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

function MainPage() {
    return (
        <MainPageStyles>
            <div className="design-atoms">
                <Atoms/>
            </div>
            <div className="main-content">
                <h1> Hi I'm <span> Adeepa Jayawardana </span></h1>
                <p>I'm an undergraduate student at the University Of Westminster at the school of Computer Science
                     and Engineering, skilled in programming, Web developing, 
                    software designing and passionate about research and development of Native Mobile applications.
                </p>
                <div className="icons">
                    <a href ="#" className="icon i-github">
                        <GitHubIcon/>
                    </a>
                    <a href ="#" className="icon i-insta">
                        <InstagramIcon/>
                    </a>
                    <a href ="#" className="icon i-linkd">
                        <LinkedinIcon/>
                    </a>
                </div>
            </div>
        </MainPageStyles>
    )
}

const MainPageStyles = styled.header`
        height:100vh;
        width:100%;
        position:relative;
        

        /* main content */
        .main-content{
            text-align:center;
            position:absolute;
            left:50%;
            transform:translate(-50%, -50%);
            top:50%;
            width:80%; 
            
            
            /* icons */
            .icons{
                display:flex;
                justify-content:center;
                margin-top:1rem;
                .icon{
                    border: 2px solid var(--border-color);
                    align-items:center;
                    justify-content:center;
                    display: flex;
                    border-radius:50%; 
                    cursor: grab;
                    transition: all 0.4s ease-in-out;

                    /* icon hover color */
                    &:hover{
                        border: 2px solid  #3d88b8;
                        color: #3d88b8;
                    }
                    &:not(:last-child){
                       
                        margin-right:1rem;
                    }
                }
                svg{
                    margin:0.8rem;
                }
            }



        }

       


`;

export default MainPage;
