import React from 'react'
import Seccion2hero1 from '../../Components/Seccion2Hero1/Seccion2hero1'
import Seccion1Hero1 from '../../Components/Seccion1Hero1/Seccion1Hero1'
import Header from '../../Components/Header/Header'
import './hero1.css'

export default function Hero1() {
  return (
    <div className="hero">
        <Header/>
        <Seccion1Hero1/>
        <Seccion2hero1/>
    </div>
  )
}
