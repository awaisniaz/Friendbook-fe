import React from 'react';
import './index.scss';
import RightPanel from './right-panel/index';
import LeftPanel from './left-panel/index';
import MiddlePanel from './middle-panel/index';
export default function MainContainer() {
    return (
        <div className="main-conatiner">
            <LeftPanel></LeftPanel>
            <MiddlePanel></MiddlePanel>
            <RightPanel></RightPanel>
        </div>
    )
}
