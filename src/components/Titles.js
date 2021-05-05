import React from 'react'
import styled from 'styled-components';

function Titles({title,span}) {
    return (
        <TitleStyles>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyles>
    )
}

const TitleStyles = styled.div`
    position: relative;
    /* about me title */
    h2{
        color:whitesmoke;
        font-weight:800;
        font-size:3rem;
        position: relative;
        padding-bottom:0.7rem;


        &::before{
            position:absolute;
            content:"";
            bottom:0;
            width: 12.5rem;
            height:0.35rem;
            background-color: var(--background-light-color-2);
            left:0;
            border-radius:16px;
        }

        &::after{
            position:absolute;
            content:"";
            bottom:0;
            width: 5rem;
            height:0.35rem;
            background-color: var( --primary-color-light);
            border-radius:16px;
            left:0;
        }
    }

    /* about me span (shadow type) */

    span{
            font-weight: 900;
            color: rgba(25,29,43,.44);
            font-size: 5rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
            @media screen and (max-width: 620px){
                font-size: 4rem;
            }
            @media screen and (max-width: 496px){
                font-size: 3rem;
            }
            @media screen and (max-width: 370px){
                font-size: 2rem;
            }

    }

`;

export default Titles;
