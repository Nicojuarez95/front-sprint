import React from 'react'
import './navbutton.css'

export default function NavButton(props) {

  return (
    <i onClick={props.onClick}>
        <img id='hamburguesa' src="../../images/menu.png" alt="" />
    </i>
  )
}
