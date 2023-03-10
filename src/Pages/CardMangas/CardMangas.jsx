import React from 'react'
import './cardmangas.css'

export default function CardMangas(props) {
  return (
    <div className='cart-shonen'>
                <div className={props?.style2}></div>
                <div className='text'>
                  <div>
                    <h3>{props.title}</h3>
                    <span className={props?.style3}>{props?.category}</span>
                  </div>
                  <a href="#">Read</a>
                </div>

                <div className='img-cart'>
                    <img className='imgManga' src={props.img} alt="" />
                </div>
              </div>
  )
}
