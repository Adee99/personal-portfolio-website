import React from 'react';
import styled from 'styled-components';


function BasicButton2({filter, button}) {
    return (
        <ButtonStyling>
            {
                button.map((but, i) =>{
                    return <ButtonStyles key={i} onClick={() => filter(but)}>
                        {but}
                    </ButtonStyles>
                })
            }
        </ButtonStyling>
    )
}

const ButtonStyles = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .4rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-bottom: .6rem;
    &:active ,&:focus{
        background-color: var(--primary-color);
    }
    &:hover{
        background-color: var(--primary-color);
    }
    &:not(:last-child){
        margin-right: .6rem;
    }
`;
const ButtonStyling = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.4rem auto;
`;
export default BasicButton2;