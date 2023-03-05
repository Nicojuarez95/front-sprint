import React from 'react'
import './hero2register.css'
import ContFormRegister from '../../Components/ContenedorFormRegister/ContFormRegister'
import ImagenRegister from '../../Components/Imagen-register/ImagenRegister'

export default function Hero2Register({handleRender}) {
  return (
    <div className='hero2'>
      <ContFormRegister handleRender={handleRender}/>
      <ImagenRegister image="./img-register.png"/>
    </div>
  )
}
