import React from 'react'
import './botonseccion1hero1.css'

export default function BotonSeccion1Hero1(props) {
  return (
    <a id="botonHero" href="/mangas">{props.text || props.children}</a>
  )
}
