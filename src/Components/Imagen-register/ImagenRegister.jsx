import React from 'react'
import './imagenregister.css'

export default function ImagenRegister(props) {
  return (
    <div className='img-register'>
        <img className='img' src={props.image} alt="" />
    </div>
  )
}
