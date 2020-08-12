import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from './components/hero';
import Navbar from './components/navbar';
import Cards from './components/cards';
import IconSafe from './components/IconSafe';
import Symptoms from './components/symptoms';
import News from './components/news';
import Carousel from './components/carousel';




function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Cards/>
        <IconSafe/>
        <Symptoms/>
        <News/>
        <Carousel/>
    </div>
  );
}

export default App;
