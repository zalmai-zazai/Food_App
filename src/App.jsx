import { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import FoodList from './Components/FoodList';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <FoodList />
    </>
  );
}

export default App;
