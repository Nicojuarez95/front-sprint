import React from 'react'
import BienvenidaRegister from '../../Components/BienvenidaRegister/BienvenidaRegister'
import ParrafosForm from '../../Components/ParrafosForm/ParrafosForm'
import FormLogin from '../FormLogin/FormLogin'
import './contformlogin.css'

export default function formlogin() {
  return (
    <div className='contFormLogin'>
    <BienvenidaRegister/>
    <FormLogin/>
    <ParrafosForm/>
    </div>
  )
}
