import React from 'react'
import './formlogin.css'
import { useRef, useEffect } from 'react'
import axios from 'axios';
import { Link as Anchor, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import alertActions from '../../store/Alert/actions.js';
import { GoogleLogin } from "react-google-login";
import {gapi} from 'gapi-script';
const { open } = alertActions

export default function FormLogin({ handleRender }) {

  const email = useRef();
  const password = useRef();
  const form = useRef()
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const store = useSelector(store => store)
  let dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault()

    let data = {
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
    }
    let url = `http://localhost:8000/auth/signin`
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }


    try {
      await axios.post(url, data, headers)
      let res = await axios.post(url, data, headers)
      let dataAlert = {
        icon: 'success',
        title: "LogIn Successfully"
      }
      dispatch(open(dataAlert))

      localStorage.setItem(`token`, res.data.token)
      localStorage.setItem(`user`, JSON.stringify({
        name: res.data.user.name,
        email: res.data.user.email,
        photo: res.data.user.photo,
      }))
      form.current.reset()
      navigate("/")
    } catch (error) {
      let dataAlert = {
        icon: 'error',
        title: error.response.data.message
      }
      dispatch(open(dataAlert))
    }
  }
  const clientID = '649027729709-f87msi7i40904knaraikoff40t21l40g.apps.googleusercontent.com'

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const onSuccess = async (response) => {
    console.log(response)

    let url = `http://localhost:8000/auth/signin`
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
      const { name, email, imageUrl, googleId } = response.profileObj;

      const data = {

        email: email,

        password: googleId,
      };
      if (email) await axios.post(url, data, headers);
      let res = await axios.post(url, data, headers);
      let dataAlert = {
        icon: "success",
        title: "Signed in successfully",
      };
      dispatch(open(dataAlert));

      navigate("/");

      form.current.reset();
      localStorage.setItem(`token`, res.data.token);
      localStorage.setItem(
        `user`,
        JSON.stringify({
          name: name,
          email: email,
          photo: imageUrl,
          password: googleId,
          user_id: res.data.user._id
        })
      );
    } catch (error) {
      console.log(error);
      let dataAlert = {
        icon: "error",
        title: error.response.data.message,
      };
      dispatch(open(dataAlert));
    }
  }
  const onFailure = () => {
    console.log("Something went wrong")
  }

  return (
    <form ref={form} onSubmit={handleSubmit}>
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

      <input id='sign-up' type="submit" value="Sign in" />

      {/* <div className='div-google'>
              <img src="./Google.png" alt="" />
              <input type="submit" value="Sign in with Google" />
            </div> */}
      <GoogleLogin
        className="google"
        image="./google.png"
        text="Sign in with Google"
        clientId={clientID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"sigle_host_policy"}

      />


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
        <p>Go back to <Anchor to={"/"}><span>home page</span></Anchor></p>
      </div>
    </form>
  )
  }