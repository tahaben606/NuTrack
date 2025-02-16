import React from 'react';
import './hero-about.css'; // Ensure the CSS file is correctly imported
import heroImage from '../assets/hero.jpg'; // Ensure the image path is correct

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h3 >ABOUT US</h3>
      <div className="about-us-content">
        <h1 className='about'>welcome</h1>
        <p>
          Discover <strong>nutrack</strong>, your ultimate online food tracking companion. Enjoy loyalty programs, exceptional customer service, and affordable prices. Stay on track with your health goals effortlessly. Join <strong>nutrack</strong> today for a seamless and rewarding food tracking experience unlike any other.
        </p>
        <img src={heroImage} alt="About Us" className="hero-image" />
      </div>
    </div>
  );
};

export default AboutUs;