import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/Carousel.css';

import React, { useState } from "react";

const NewsCarousel = ({ slides = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="carousel">
        <div
          className="carousel-slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Array.isArray(slides) && slides.map((slide, index) => (
            <div
              className="carousel-slide"
              key={index}
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="carousel-button next" onClick={handleNext}>
          ❯
        </button>
        <div className="carousel-dots">
          {Array.isArray(slides) && slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  export default NewsCarousel;
