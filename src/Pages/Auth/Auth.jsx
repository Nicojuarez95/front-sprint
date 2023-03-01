import React from 'react'
import ImagenRegister from '../../Components/Imagen-register/ImagenRegister'
import ContFormLogin from '../ContFormLogin/ContFormLogin'
import './auth.css'

export default function Auth() {
  return (
    <div className='auth'>
        <ImagenRegister/>
        <ContFormLogin/>
    </div>
  )
}
