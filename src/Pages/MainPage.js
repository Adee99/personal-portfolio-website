import React from 'react';
import styled from 'styled-components';
import Atoms from  '../components/Atoms';
import Typed from "react-typed";
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
                <div className="sub-content">
                <strong className="text-slide">
                  <Typed style={typedStyles}
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
                </div>
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

const MainPageStyles = styled.div`
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

            /* sub para in main page */
            .sub-content{
                padding-top:10px;
                cursor: grab;   
                font-weight:800;
                .strings{
                    font-size:20px;
                }
            }
        }

`;

const typedStyles = {
      color: "white-smoke",
      backgroundColor: "transparent",
      padding: "10px",
      fontFamily: "Roboto",
};

export default MainPage;
