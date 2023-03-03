import React from 'react'
import './formlogin.css'
import { useRef} from 'react'
import axios from 'axios';
import {Link as Anchor, useLocation, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';

export default function FormLogin({handleRender}) {

  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  async function handleSubmit(e){
    e.preventDefault()

    let data = {
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
    }
    let url = `http://localhost:8000/auth/signin`
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    
    try{
      await axios.post(url,data,headers)
      let res = await axios.post(url,data,headers)
      localStorage.setItem(`token`, res.data.token)
      localStorage.setItem(`user`, JSON.stringify({
        name: res.data.user.name,
        email: res.data.user.email,
        photo: res.data.user.photo,
      }))
    }catch(error){
      console.log(error)
      Swal.fire(error.response.data.message)
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

            {/* <Anchor to={`/signin`}> */}
            <input id='sign-up' type="submit" value="Sign in" />
            {/* </Anchor> */}
            <div className='div-google'>
              <img src="./Google.png" alt="" />
              <input type="submit" value="Sign in with Google" />
            </div>

            <div className='parrafos-form'>
              <p>You don't have an account yet?
                <span
              onClick={() => {
                if (pathname === "/signin") {
                  navigate("/signup");
                } else {
                  handleRender();
                }
            }}
          >
            Sign up
          </span></p>
              <p>Go back to <Anchor to={`/`}><span>home page</span></Anchor></p>
            </div>
      </form>
  )
}
