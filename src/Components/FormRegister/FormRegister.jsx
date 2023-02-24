import React from 'react'
import './formregister.css'
import { useRef } from 'react';
import axios from 'axios';

export default function FormRegister() {

    let name = useRef()
    let email = useRef()
    let password = useRef()
    let passwordrepeat = useRef()

  async function handleSubmit(e){
    e.preventDefault()

    let data = {
      [name.current.name]: name.current.value,
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
    }

    console.log(data)
    let url = 'http://localhost:8000/users'
    if(password.current.value == passwordrepeat.current.value){
      try{
      await axios.post(url,data)
      }catch(error){
      console.log(error)
      console.log("ocurrio un error")
      }
    }else {
      alert("Contraseñas no coinciden")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Name</legend>
              <input ref={name} type="text" id='name' name='name' required />
              <img src="./Profile.png" alt="" />
            </fieldset>
            
            <fieldset>
              <legend>Email</legend>
              <input ref={email} type="email" id='mail' name='mail' required />
              <img src="./@.png" alt="" />
            </fieldset>
            
            <fieldset>
              <legend>Password</legend>
              <input ref={password} type="password" id='password' name='password' required />
              <img src="./lock1.png" alt="" />
            </fieldset>

            <fieldset>
              <legend>Confirm password</legend>
              <input ref={passwordrepeat} type="password" id='passwordrepeat' name='passwordrepeat' required />
              <img src="./lock1.png" alt="" />
            </fieldset>
            
            <div className='div-check'>
              <input id='check' type="checkbox"/>
              <label>Sendnotification to my email</label>
            </div>

            <input id='sign-up' type="submit" value="Sing up" />

            <div className='div-google'>
              <img src="./Google.png" alt="" />
              <input type="submit" value="Sing up with Google" />
            </div>
          </form>
  )
}
