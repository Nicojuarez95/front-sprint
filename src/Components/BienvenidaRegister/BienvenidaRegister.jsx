import React from 'react'
import './bienvenidaregister.css'

export default function BienvenidaRegister(props) {
  return (
    <div className='bienvenida'>
        <img src="./Logomr.png" alt="" />
        <h2 className='welcomeH2'>{props.text} <span>{props.text2}</span></h2>
        <p className='welcomeP'>Discover manga, manhua and manhwa, track your progres, have fun, read manga</p>
    </div>
  )
}
