import React, { useState } from 'react';
import Projects from './image/projects.jpg';
import '../App.css';
import WaveText from './WaveText';

const Project = () => {

    return (
        <>
        <h1><WaveText introString="Projects"/></h1>
        <div className='ProjectComponent'>
            <div className='projectFlex-row'>
                <div className='projectFlex-item'>
                    <img
                    src={Projects}
                    style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className='projectFlex-item'>
                    <img
                    src={Projects}
                    style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
            <div className='projectFlex-row'>
                <div className='projectFlex-item'>
                    <img
                    src={Projects}
                    style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className='projectFlex-item'>
                    <img
                    src={Projects}
                    style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default Project;
