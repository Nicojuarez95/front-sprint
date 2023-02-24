import React from 'react'
import './App.css'

import NavButton from './Components/NavButton/NavButton'


export default function App() {

  

  return (

  <div className="hero">
    <div className='seccionHero-1'>
      <header>
        <NavButton/>
        
        <img src="./LogoM.png" alt="Logo" />
      </header>

      <div className='text-seccionHero-1'>
        <h2>Your favorite comic book store ✨</h2>
        <p>Explore our catalog to live the adventure of your life</p>
        <a href="#">lets go!</a>
      </div>
    </div>

    <div className="seccionHero-2">
      <div className='img-seccionHero-2'>
        <img className='img1-seccionHero-2' src="./hero1.png" alt="" />
        <img className='img2-seccionHero-2' src="./hero2.png" alt="" />
      </div>

      <div className='text-seccionHero-2'>
        <h3>My hero Academia</h3>
        <p>Manga</p>
        <p className='p2'>In a world in which most of the population is born with a Gift, a different extraordinary ability in each one, it didn't take long for both villains and heroes to appear ready to stop them.</p>
      </div>
      
    </div>
  </div>
  )
}
