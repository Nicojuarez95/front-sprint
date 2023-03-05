import React from 'react'
import BienvenidaRegister from '../../Components/BienvenidaRegister/BienvenidaRegister'
import FormLogin from '../FormLogin/FormLogin'
import './contformlogin.css'

export default function formlogin({handleRender}) {
  return (
    <div className='contFormLogin'>
    <BienvenidaRegister text="Welcome" text2="back" />
    <FormLogin handleRender={handleRender}/>
    </div>
  )
}
