import React from 'react'
import './parrafo1seccion1hero1.css'

export default function Parrafo1Seccion1Hero1(props) {
  return (
    <p>{props.text || props.children}</p>
  )
}
