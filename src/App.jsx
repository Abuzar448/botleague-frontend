import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competitions from './components/Compitions&Events';
import UserJourney from './components/UserJourney';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Competitions></Competitions>
      <UserJourney></UserJourney>
    </div>
  )
}

export default App;