import React from 'react'
import './formlogin.css'

export default function FormLogin() {

  return (
    <form>
            <fieldset>
              <legend>Name</legend>
              <input type="text" id='name' name='name' required />
              <img src="./Profile.png" alt="" />
            </fieldset>
            
            <fieldset>
              <legend>Password</legend>
              <input type="password" id='password' name='password' required />
              <img src="./lock1.png" alt="" />
            </fieldset>

            <div className='div-check'>
              <input id='check' type="checkbox"/>
              <label>Send notification to my email</label>
            </div>
            {/* <Anchor to={`/notfound/${Math.random()}`}> */}
              <input id='sign-up' type="submit" value="Sign up" />
            {/* </Anchor> */}
            <div className='div-google'>
              <img src="./Google.png" alt="" />
              <input type="submit" value="Sign up with Google" />
            </div>
      </form>
  )
}
