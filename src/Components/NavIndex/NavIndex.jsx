import React from 'react'
import './navindex.css'
import { useEffect } from 'react';
import axios from 'axios';
import {Link as Anchor} from 'react-router-dom'
import Swal from 'sweetalert2';

export default function NavIndex({handleRender}) {
    let token = localStorage.getItem(`token`)
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
<<<<<<< HEAD
    let url = "http://localhost:8000/auth/signout"
=======
    let url = "http://localhost:8000/auth/signintoken"
>>>>>>> b2217f8eae3c7e580cb2168133db6252429604ef

    if(!token){
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

    useEffect(()=>{
        let url= "http://localhost:8000/auth/signintoken"
        if(token){
            let headers = {headers:{'Authorization':`Bearer ${token}`}}
            axios.post(url,null,headers)
        }
    })

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      async function handleLogout() {
        try {
          await axios.post(url, "", headers);
          Toast.fire({
            icon: "success",
            title: "Logout successfully",
          });
          localStorage.setItem("token", "");
          localStorage.setItem("user", "");
          handleRender();
        } catch (error) {
          if (typeof error.response.data.message === "string") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.message,
            });
          } else {
            error.response.data.message.forEach((err) =>
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
              })
            );
          }
        }
      }
  
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

                <img className='equis' src="./union.png" alt="" onClick={handleRender}/>  
            </div>

            <div className='ancors-nav'>
                <a href="">Home</a>
                <a href="">Mangas</a>
                <a href="">My Mangas</a>
                <a href="">Favourites</a>
                { token ? <Anchor onClick={handleLogout}>Logout</Anchor> : ""}
            </div>
        </nav>
  )
}
