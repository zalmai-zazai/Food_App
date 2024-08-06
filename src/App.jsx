import { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import FoodList from './Components/FoodList';
import FoodContextProvider from './Context/FoodContext';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <FoodContextProvider>
        <Navbar />
        <Banner />
        <About />
        <FoodList />
        <Contact />
        <Footer />
      </FoodContextProvider>
    </>
  );
}

export default App;
