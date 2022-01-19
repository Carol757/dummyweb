import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Lock from '/Users/carolmendonca/Desktop/website/src/components/Lock.js';

function Home() {
  return (
    <>
      <HeroSection />
     
      <Lock></Lock>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
