import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from './components/hero';
import Navbar from './components/navbar';
import Cards from './components/cards';
import IconSafe from './components/IconSafe';
import Symptoms from './components/symptoms';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Cards/>
        <IconSafe/>
        <Symptoms/>
    </div>
  );
}

export default App;
