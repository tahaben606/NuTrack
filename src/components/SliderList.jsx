import React, { useState } from 'react';
import photo1 from '../assets/1.png';
import photo2 from '../assets/2.png';
import photo3 from '../assets/3.png';
import './SliderList.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      background: `url(${photo1})`, 
      text: 'Nutrition Tracker: Your Health, Your Way',
    },
    {
      background: `url(${photo2})`, 
      text: 'Seize Control of Your Nutrition',
    },
    {
      background: `url(${photo3})`, 
      text: 'Reach Your Wellness Goals',
    },
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: slide.background,
            }}
          >
            {slide.text}
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="arrow-button arrow-prev"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="arrow-button arrow-next"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
