import React from "react";
import '../App.css';
import WaveText from "./WaveText";

export default function Skills(params) {
    return (
        <div className="My skills">
            <h1>
                <WaveText introString="My Skills"/>
            </h1>
            <div className="box-container">
                <div className="box">
                    <button>C++</button>
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>Javascript</button>
                </div>
                <div className="box">
                    <button>Bootstrap</button>
                    <button>React Js</button>
                    <button>Git</button>
                    <button>Click Me</button>
                </div>
            </div>
        </div>

    )
};