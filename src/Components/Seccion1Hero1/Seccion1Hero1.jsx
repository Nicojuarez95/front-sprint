import React from 'react'
import Header from '../Header/Header'
import TituloSeccion1Hero1 from '../TituloSeccion1Hero1/TituloSeccion1Hero1'
import Parrafo1Seccion1Hero1 from '../Parrafo1Seccion1Hero1/Parrafo1Seccion1Hero1'
import BotonSeccion1Hero1 from '../BotonSeccion1Hero1/BotonSeccion1Hero1'
import './seccion1hero1.css'


export default function Seccion1Hero1() {
  return (
    <div className='seccionHero-1'>
            <Header/>
            <div className='text-seccionHero-1'>
              <TituloSeccion1Hero1 text='Your favorite comic book store ✨'/>
              <Parrafo1Seccion1Hero1 text='Explore our catalog to live the adventure of your life'/>
              <BotonSeccion1Hero1 text="Lets go!"/>
            </div>
    </div>
  )
}
