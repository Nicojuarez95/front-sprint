import React from 'react'
import './navindex.css'
import { useState } from 'react'

export default function NavIndex() {
    const [render, setRender] = useState(false)

    const handleRender = () =>{
        setRender(!render)
        console.log(render)
  }
  return (
        <nav>
            <div className='perfil'>
                <div className='perfil1'>
                    <img src="./perfil.png" alt="imagen-perfil" />

                    <div className='text-nav'>
                        <h4>Lucas Ezequiel Silva</h4>
                        <p>asdweasdasd@gmail.com</p>
                    </div>
                </div>

                <img className='equis' src="./union.png" alt="" onClick={handleRender}/>
                
                
            </div>

            <div className='ancors-nav'>
                <a href="">Home</a>
                <a href="">Mangas</a>
                <a href="">My Mangas</a>
                <a href="">Favourites</a>
                <a href="">Logout</a>
            </div>
        </nav>
  )
}
