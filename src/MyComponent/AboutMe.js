import React from "react";
import '../App.css';
import RandhirImage from './image/Work_experience.jpeg';
import leetcodeLogo from './image/projects.jpg';
import CodeforcesLogo from './image/responsibility.jpeg';


export default function AboutMe(props) {
    
    return (
        <>
            <div>
                <div className="about-me">
                    <h4>Get to know</h4>
                    <h2 id="about-me-h2">About me...</h2>
                    <hr style={{color:'black', width:'10%',borderStyle:'dotted', margin:'auto', marginTop:'90px', marginBottom:'68px', borderWidth:'4px', borderBottom:'none'}}/>
                    <div id="carouselExample" className="carousel slide about_me_carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={RandhirImage} className="d-block w-100 about_me_img" alt="First Slide" />
                            </div>
                            <div className="carousel-item">
                                <img src={leetcodeLogo} className="d-block w-100 about_me_img" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img src={CodeforcesLogo} className="d-block w-100 about_me_img" alt="Third Slide" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};
