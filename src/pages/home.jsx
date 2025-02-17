import React from 'react';
import Navbar from '../components/navbar';
import SliderList from '../components/SliderList';
import HeroAbout from '../components/hero-about';

const Home = () => {
  return (
    <div>
      <SliderList />
      <HeroAbout />
    </div>
  );
};

export default Home;