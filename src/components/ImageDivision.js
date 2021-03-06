import React from 'react'
import styled from 'styled-components';
import profilePic2 from '../Images/profilePic2.png';
import BasicButton from './BasicButton';

function ImageDivision() {
    return (
        <ImageDivisionStyles>
            <div className="left-content">
                <img src={profilePic2} alt="developerImage"/>
            </div>
            <div className="right-content">
                 <h4>I am <span>Adeepa Dasun Jayawardana</span></h4> 
                 <p className="paragraph">
                    I'm an undergraduate student at the University Of Westminster at the school of Computer Science
                     and Engineering, skilled in programming, Web developing, 
                    software designing and passionate about research and development of Native Mobile applications.
                    
                </p> 
                {/* <div className="about-info">
                    <div className="info-title">
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: 21</p>
                        <p>: Sri Lankan </p>
                        <p>: Sinhala, English, Tamil </p>
                        <p>: Sri Lanka</p>
                    </div>
                </div> */}
                <BasicButton title={'Download CV'} />
            </div>
        </ImageDivisionStyles>
    )
}

// stylings for image division

const ImageDivisionStyles = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
            //border-radius: 1rem;
            border-color:whitesmoke;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 3rem 0;
        }
        .about-info{
            display: inline-flex;
            padding-bottom: 1.4rem;

            .info-title{
                padding-right: 2rem;
                p{
                    font-weight: 800;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageDivision;