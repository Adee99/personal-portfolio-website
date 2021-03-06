import styled from 'styled-components';
import React from 'react';
import MajorLayout from '../styles/Layout';
import Titles from '../components/Titles';
import SkillsDivision from '../components/SkillsDivision';
import ImageDivision from '../components/ImageDivision';

function AboutPage() {
    return (
        <MajorLayout>
            <AboutStyles>
                <Titles title={'About Me'} span={'About Me'}/>
                <ImageDivision/>
                 <SkillsDivision/>
            </AboutStyles>
        </MajorLayout>
    )
}

const AboutStyles = styled.section`



`;

export default AboutPage;
