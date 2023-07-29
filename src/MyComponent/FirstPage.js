import React from "react";
import '../App.css';
import Linkedin from './Linkedin';
import Leetcode from './Leetcode'
import Codeforces from './Codeforces'
import Codechef from './Codechef'
import myImage from './image/Randhir_image.jpeg';
import myUrl from '../resume.pdf'
import DownloadButton from "./DownloadButton";
export default function (props) {
    return (
        <>
            <div className="front_page">
                <div className="header">
                    <p><h4>Hello Myself,</h4><h1>Randhir Kumar!</h1><marquee>I Am a front-end developer, and currently, I'm working to become a full-stack developer.</marquee></p>
                    {"\n"}
                    <p><DownloadButton myUrl={myUrl} /></p>
                    <div>
                        <div className='profile_links'>
                            <p><Linkedin /></p>
                            <p><Leetcode /></p>
                            <p><Codeforces /></p>
                            <p><Codechef /></p>
                        </div>
                        <img src={myImage} className="profile-image" alt="logo" />
                    </div>
                </div>
            </div>
        </>
    );
}