import React from 'react'
import styled from 'styled-components';

function SkillsProgressBar({title, width, text}) {
    return (
        <SkillsProgressBarStyles>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </SkillsProgressBarStyles>
    )
}

const SkillsProgressBarStyles = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.1rem;
        }
        .progress{
            position: relative;
            width: 100%;
            height: .4rem;
            background-color: var(--border-color);
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: var(--primary-color)
            }
        }
    }
`;

export default SkillsProgressBar;