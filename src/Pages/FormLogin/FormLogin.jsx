import React from 'react'
import './formlogin.css'
import { useRef } from 'react'
import axios from 'axios';

export default function FormLogin() {

  const email = useRef();
  const password = useRef();
  

  async function handleSubmit(e){
    e.preventDefault()

    let data = {
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
    }

    let url = 'http://localhost:8000/signin'
    try{
      await axios.post(url,data)
      (res => {localStorage.setItem(`token`, res.data.token)})
    }catch(error){
      console.log(error)
      console.log("Ocurrio un error")
    }
  }


  return (
    <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Email</legend>
              <input ref={email} type="email" id='email' name='email' required />
              <img src="./Profile.png" alt="" />
            </fieldset>
            
            <fieldset>
              <legend>Password</legend>
              <input ref={password} type="password" id='password' name='password' required />
              <img src="./lock1.png" alt="" />
            </fieldset>

            <div className='div-check'>
              <input id='check' type="checkbox"/>
              <label>Send notification to my email</label>
            </div>
            {/* <Anchor to={`/notfound/${Math.random()}`}> */}
              <input id='sign-up' type="submit" value="Sign in" />
            {/* </Anchor> */}
            <div className='div-google'>
              <img src="./Google.png" alt="" />
              <input type="submit" value="Sign in with Google" />
            </div>
      </form>
  )
}
