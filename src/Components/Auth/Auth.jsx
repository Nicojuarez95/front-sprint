import React from 'react'
import ImagenRegister from '../Imagen-register/ImagenRegister'
import ContFormLogin from '../ContFormLogin/ContFormLogin'
import Header from '../Header/Header'
import './auth.css'

export default function Auth() {
  return (
    <div className='auth'>
        <ImagenRegister/>
        <ContFormLogin/>
    </div>
  )
}
