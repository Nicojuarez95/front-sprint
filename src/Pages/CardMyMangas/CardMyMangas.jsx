import React from 'react'
import './cardmymangas.css'
import { Link as Anchor } from 'react-router-dom'

export default function CardMangas(props) {

  
  return (
    <div className='cart-shonen'>
                <div className={props?.style2}></div>
                <div className='text'>

                  <div className='cont-circulitos'>
                  <Anchor id='an-img' to={'#'+props.id+"/1"}><img src="./mas.png" alt="" /></Anchor>
                  <Anchor id='an-img' to={'#'+props.id+"/1"}><img src="./lapiz.png" alt="" /></Anchor>
                  </div>
                  
                  <div className='title'>
                    <h3>{props.title}</h3>
                    <span className={props?.style3}>{props?.category}</span>
                  </div>

                  <div className='cont-botones-card'>
                    <Anchor className='a1' to={'#'+props.id+"/1"}> Edit </Anchor>
                    <Anchor className='a2' to={'#'+props.id+"/1"}> Delete </Anchor>
                  </div>

                </div>

                <div className='img-cart'>
                    <img className='imgManga' src={props.img} alt="" />
                </div>
              </div>
  )
}
