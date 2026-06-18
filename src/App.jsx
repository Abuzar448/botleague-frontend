import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competitions from './components/Compitions&Events';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Competitions></Competitions>
    </div>
  )
}

export default App;