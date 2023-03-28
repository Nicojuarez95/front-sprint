import React from 'react'
import './navindex.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link as Anchor} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import alertActions from '../../store/Alert/actions.js';
import authorAction from '../../store/profile/action.js'
const {open} = alertActions;
const {read_author } = authorAction;

export default function NavIndex({ handleRender }) {
    let token = localStorage.getItem(`token`)
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let url = "http://localhost:8000/auth/signout"
    const store = useSelector(store=>store)
    let dispatch = useDispatch()
    let [isOpen , setIsOpen] = useState(false);

    if (!token) {
        localStorage.setItem(`user`, JSON.stringify({
            name: "",
            email: "",
            photo: "",
        }))
    }

    let user= JSON.parse(localStorage.getItem(`user`))
    let name= user.name
    let email= user.email
    let photo= user.photo
    console.log(JSON.parse(localStorage.getItem(`user`)))

    useEffect(() => {
        let url = "http://localhost:8000/auth/signintoken"
        if (token) {
            let headers = { headers: { 'Authorization': `Bearer ${token}` } }
            axios.post(url, null, headers)
        }
    })

      async function handleLogout() {
        try {
          await axios.post(url, "", headers);
          let dataAlert = {
            icon: 'success',
            title: "Logout successfully"
          }
          dispatch(open(dataAlert))
          
          localStorage.setItem("token", "");
          localStorage.setItem("user", "");
          setIsOpen(!isOpen)
          handleRender();
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
    const author = useSelector(store => store.author.author)
    useEffect (() => {
      if(author) {
        dispatch(read_author())
      }
    }, [isOpen] )


    return (
        <nav>
            <div className='perfil'>
                {
                    token ?
                        <div className='perfil1'>
                            <img id="imagen-nav" src={photo} alt="imagen-perfil" />

                            <div className='text-nav'>
                                <h4>{name}</h4>
                                <p>{email}</p>
                            </div>
                        </div>
                        : ""
                }

                <img className='equis' src="/union.png" alt="" onClick={handleRender}/>  
            </div>

            <div className='ancors-nav'>
                <Anchor to="/">Home</Anchor>
                <Anchor to="/mangas">Mangas</Anchor>
                <Anchor to="/mangas-form">My mangas</Anchor>
                <Anchor to="#">Favorites</Anchor>
                { token ? <Anchor to="/author">Author</Anchor> : ""}
                {token && author?.active ? <Anchor to="/authors/profile">Author-Profile </Anchor> : ""}

                { token ? <Anchor onClick={handleLogout} to="/">Logout</Anchor> : ""}
            </div>
        </nav>
    )
}
