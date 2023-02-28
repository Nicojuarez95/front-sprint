import React from 'react'
import './contformregister.css'
import BienvenidaRegister from '../BienvenidaRegister/BienvenidaRegister'
import FormRegister from '../../Pages/FormRegister/FormRegister'
import ParrafosForm from '../ParrafosForm/ParrafosForm'

export default function ContFormRegister() {
  return (
    <div className='form-register'>
          <BienvenidaRegister/>
          <FormRegister/>
          <ParrafosForm/>
      </div>
  )
}
