import React from 'react'
import './contformregister.css'
import BienvenidaRegister from '../BienvenidaRegister/BienvenidaRegister'
import FormRegister from '../../Pages/FormRegister/FormRegister'

export default function ContFormRegister({handleRender}) {
  return (
    <div className='form-register'>
          <BienvenidaRegister text="Welcome!"/>
          <FormRegister handleRender={handleRender}/>
      </div>
  )
}
