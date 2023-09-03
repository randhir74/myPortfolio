import React from "react";
import '../App.css';
import AboutIntro from "./AboutIntro";
import Skills from "./Skills";
import AboutMeText1 from "./AboutMeText1";
import Project from "./Project";


export default function AboutMe(props) {
    
    return (
        <>
            <div>
                <div className="about-me">
                    <AboutMeText1/>
                    <AboutIntro/>
                    <hr style={{color:'black', width:'10%',borderStyle:'dotted', margin:'auto', marginTop:'90px', marginBottom:'68px', borderWidth:'4px', borderBottom:'none'}}/>
                    <Skills/>
                    <hr style={{color:'black', width:'10%',borderStyle:'dotted', margin:'auto', marginTop:'90px', marginBottom:'68px', borderWidth:'4px', borderBottom:'none'}}/>
                    <Project/>
                </div>
            </div>
        </>
    )
};
