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
                    <hr style={{color:'black', width:'10%',borderStyle:'dotted', margin:'auto', marginTop:'90px', marginBottom:'10px', borderWidth:'4px', borderBottom:'none'}}/>
                    <div id="carouselExample" class="carousel slide about_me_carousel">
                        <div class="carousel-inner about_me_img_div">
                            <div class="carousel-item active about_me_img_div1">
                                <img src={RandhirImage} class="d-block w-100 about_me_img" alt="First Slide" />
                            </div>
                            <div class="carousel-item about_me_img_div1">
                                <img src={leetcodeLogo} class="d-block w-100 about_me_img" alt="Second slide" />
                            </div>
                            <div class="carousel-item about_me_img_div1">
                                <img src={CodeforcesLogo} class="d-block w-100 about_me_img" alt="Third Slide" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};
