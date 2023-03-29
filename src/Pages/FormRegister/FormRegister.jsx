import React from "react";
import "./formregister.css";
import { useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link as Anchor, useLocation } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import alertActions from "../../store/Alert/actions.js";
import { GoogleLogin } from "react-google-login";
import {gapi} from 'gapi-script';
const {open} = alertActions

export default function FormRegister(props) {
  let name = useRef();
  let email = useRef();
  let password = useRef();
  let photo = useRef();
  let formregister = useRef();
  let navigate = useNavigate();
  let location = useLocation();
  let { pathname } = location;
  const store = useSelector(store=>store)
  let dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault();

    let data = {
      [name.current.name]: name.current.value,
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
      [photo.current.name]: photo.current.value,
    };
    

    let url = "http://localhost:8000/auth/signup";

    try {
      await axios.post(url, data);
      let dataAlert = {
        icon: 'success',
        title: "Signed in successfully"
      }
      dispatch(open(dataAlert))
      
      formregister.current.reset();
      navigate("/signin");
    } catch (error) {
      if (typeof error.response.data.message === "string") {
        let dataAlert = {
          icon: 'error',
          title: error.response.data.message
        }
        dispatch(open(dataAlert))
      } else {
        let dataAlert = {
          icon: 'error',
          title: "",
        }
        error.response.data.message.forEach((err) => {
          dataAlert.title += err + '\n'
        });
        dispatch(open(dataAlert));
      }
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

  try {
    const { name, email, imageUrl, googleId } = response.profileObj;

    const data = {
      name: name,
      email: email,
      photo: imageUrl,
      password: googleId,
    };
    console.log(data)
    const url = "http://localhost:8000/auth/signup";
    await axios.post(url, data);

    let dataAlert = {
      icon: "success",
      title: "Check your email to verify your account",
    };
    dispatch(open(dataAlert)); // dispatch action here

    formregister.current.reset();
    navigate("/signin");

  } catch (error) {
    console.log(error);
    let dataAlert = {
      icon: "error",
      title: "",
    };
    error.response.data.message.forEach((err) => {
      dataAlert.title += err + "\n";
    });
    dispatch(open(dataAlert));
  }
}

const onFailure = () => {
  console.log("Something went wrong")
}
  return (
    <form ref={formregister} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Name</legend>
        <input ref={name} type="text" id="name" name="name" required />
        <img src="./Profile.png" alt="" />
      </fieldset>

      <fieldset>
        <legend>Email</legend>
        <input ref={email} type="email" id="email" name="email" required />
        <img src="./@.png" alt="" />
      </fieldset>

      <fieldset>
        <legend>Photo</legend>
        <input ref={photo} type="text" id="photo" name="photo" required />
        <img src="./camera.png" alt="" />
      </fieldset>

      <fieldset>
        <legend>Password</legend>
        <input
          ref={password}
          type="password"
          id="password"
          name="password"
          required
        />
        <img src="./lock1.png" alt="" />
      </fieldset>

      <div className="div-check">
        <input id="check" type="checkbox" required />
        <label>Send notification to my email</label>
      </div>

      <input id="sign-up" type="submit" value="Sign up" />

      {/* <div className="div-google">
        <img src="./Google.png" alt="" />
        <input type="submit" value="Sign up with Google" />
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

      <div className="parrafos-form">
        <p>Already have an account?<span onClick={() => {
            if (pathname === "/signup") {
              navigate("/signin");
            } else {
              props.handleRender();
            }
          }}>Log in</span></p>
        <p>Go back to<Anchor to={`/`}><span>home page</span></Anchor></p>
      </div>
    </form>
  );
}