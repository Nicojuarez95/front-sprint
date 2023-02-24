import React from 'react'
import './formregister.css'
import { useRef } from 'react';
import axios from 'axios';

export default function FormRegister() {

    let name = useRef()
  let detail = useRef()
  let admin_id = useRef()

  async function handleSubmit(e){
    e.preventDefault()

    let data = {
      [name.current.name]: name.current.value,
      [detail.current.name]: detail.current.value,
      [admin_id.current.name]: admin_id.current.value
    }

    console.log(data)
    let url = 'http://localhost:8080/users'
    try{
      await axios.post(url,data)
    }catch(error){
      console.log(error)
      console.log("ocurrio un error")
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
              <input ref={detail} type="text" id='' name='' required />
              <img src="./@.png" alt="" />
            </fieldset>
            
            <fieldset>
              <legend>Password</legend>
              <input ref={admin_id} type="password" id='' name='' required />
              <img src="./lock1.png" alt="" />
            </fieldset>

            <fieldset>
              <legend>Confirm password</legend>
              <input ref={admin_id} type="password" id='' name='' required />
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
