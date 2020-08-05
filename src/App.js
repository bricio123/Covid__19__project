import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from './components/hero';
import Navbar from './components/navbar';
import Cards from './components/cards';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Cards/>
    </div>
  );
}

export default App;
