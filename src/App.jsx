import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competitions from './components/Compitions&Events';
import UserJourney from './components/UserJourney';
import AboutAndCategories from './components/AboutAndCategories';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Competitions></Competitions>
      <UserJourney></UserJourney>
      <AboutAndCategories></AboutAndCategories>
    </div>
  )
}

export default App;