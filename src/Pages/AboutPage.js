import styled from 'styled-components';
import React from 'react';
import MainLayout from '../styles/Layout';
import Titles from '../components/Titles';
import ImageDivision from '../components/ImageDivision';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyles>
                <Titles title={'About Me'} span={'About Me'}/>
                <ImageDivision/>
            </AboutStyles>
        </MainLayout>
    )
}

const AboutStyles = styled.section`



`;

export default AboutPage;
