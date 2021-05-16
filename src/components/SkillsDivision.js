import React from 'react'
import styled from 'styled-components';
import {SecondaryLayout} from '../styles/Layout2';
import Title from '../components/Titles';
import SkillsProgressBar from '../components/SkillProgressBar';

function SkillsDivision() {
    return (
        <SkillsDivisionStyles>
            
                <Title title={'Skills'} span={'skills'} />
                <SecondaryLayout>
                    <div className="skills">
                        <SkillsProgressBar 
                            title={'Java'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <SkillsProgressBar 
                            title={'Javascript'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <SkillsProgressBar 
                            title={'React Js'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <SkillsProgressBar 
                            title={'Angular'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <SkillsProgressBar 
                            title={'React Native'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <SkillsProgressBar 
                            title={'Native Android'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <SkillsProgressBar 
                            title={'HTML'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <SkillsProgressBar 
                            title={'CSS'}
                            width={'75%'}
                            text={'75%'}
                        />
                    </div>
                </SecondaryLayout>
        </SkillsDivisionStyles>
    )
}

const SkillsDivisionStyles = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default SkillsDivision;