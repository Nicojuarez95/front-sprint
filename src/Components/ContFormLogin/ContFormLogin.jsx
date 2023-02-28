import React from 'react'
import BienvenidaRegister from '../BienvenidaRegister/BienvenidaRegister'
import ParrafosForm from '../ParrafosForm/ParrafosForm'
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
