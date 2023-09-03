import React from "react";
import '../App.css';
import WaveText from "./WaveText";
const IntroString = "Get to know";

export default function AboutMeText1(props) {
    return(
        <>
            <h3>
                <WaveText introString="Get to know"/>
                <WaveText introString="About me..."/>
            </h3>
        </>
    )
};