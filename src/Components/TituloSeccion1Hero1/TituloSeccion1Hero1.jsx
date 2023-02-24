import React from 'react'
import './tituloseccion1hero1.css'

export default function TituloSeccion1Hero1(props) {
  return (
    <h2>{props.text || props.children}</h2>
  )
}
