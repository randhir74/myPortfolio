import React, { useState } from 'react';
import WorkExperience from './image/Work_experience.jpeg';
import Projects from './image/projects.jpg';
import Responsibility from './image/responsibility.jpeg';
import Project from "./Project";
import '../App.css'


export default function Carousel(props) {
  const [showComponent, setShowComponent] = useState(true);

  const openComponent = () => {
    setShowComponent(true);
  };

  const closeComponent = () => {
    setShowComponent(true);
  };

  return (
    <div>
      {showComponent ? (
        // Your new component that opens when an image is clicked
        <Project onClose={closeComponent} />
      ) : (
        // Your carousel
        <div id="carouselExample" className="carousel slide about_me_carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={WorkExperience}
                className="d-block w-100 about_me_img"
                alt="First Slide"
                onClick={openComponent}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={Projects}
                className="d-block w-100 about_me_img"
                alt="Second slide"
                onClick={openComponent}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={Responsibility}
                className="d-block w-100 about_me_img"
                alt="Third Slide"
                onClick={openComponent}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
}
