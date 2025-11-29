import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import SpecialMenu from './Components/SpecialMenu';
import Chief from './Components/Chief';
import Intro from './Components/Intro';
import Laurels from './Components/Laurels';
import Gallery from './Components/Gallery';
import FindUs from './Components/FindUs';
import Footer from './Components/Footer';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <SpecialMenu/>
      <Chief/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </main>
  );
};

export default App;