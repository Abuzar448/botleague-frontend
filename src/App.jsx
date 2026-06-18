import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competitions from './components/Competitions';
import UserJourney from './components/UserJourney';
import AboutAndCategories from './components/AboutAndCategories';
import Sports from './components/Sports';
import LeagueAdvantage from './components/LeagueAdvantage';
import JoinEcosystem from './components/JoinEcosystem';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Competitions></Competitions>
      <UserJourney></UserJourney>
      <AboutAndCategories></AboutAndCategories>
      <Sports></Sports>
      <LeagueAdvantage></LeagueAdvantage>
      <JoinEcosystem></JoinEcosystem>
      <Footer></Footer>
    </div>
  )
}

export default App;