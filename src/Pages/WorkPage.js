import React, { useState } from 'react';
import {MajorLayout} from '../styles/Layout';
import {SecondaryLayout} from '../styles/Layout2';
import Titles from '../components/Titles';
import work from '../Data/work';
import WorkMenu from '../components/WorkMenu';
import BasicButton2 from '../components/BasicButton2';

const allButtons = ['All', ...new Set(work.map(item => item.category))]

function WorkPage() {
    const [menuItem, setMenuItems] = useState(work);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(work);
            return;
        }

        const filteredData = work.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MajorLayout>
            <Titles title={'Work'} span={'work'} />
            <SecondaryLayout>

                <BasicButton2 filter={filter} button={button} />
                <WorkMenu menuItem={menuItem} />
            </SecondaryLayout>
        </MajorLayout>
    )
}

export default WorkPage;