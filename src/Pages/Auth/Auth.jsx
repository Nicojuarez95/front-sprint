import React from 'react'
import ImagenRegister from '../../Components/Imagen-register/ImagenRegister'
import ContFormLogin from '../ContFormLogin/ContFormLogin'
import './auth.css'

export default function Auth({handleRender}) {
  return (
    <div className='auth'>
        <ImagenRegister image="./backgroundlogin.png"/>
        <ContFormLogin handleRender={handleRender}/>
    </div>
  )
}
