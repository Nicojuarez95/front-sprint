import React from 'react'
import './cardmymangas.css'
import { Link as Anchor } from 'react-router-dom'

export default function CardMangas({manga, categories}) {

  const categoryUsed= categories.find((cat) => cat._id === manga.category_id)
  return (
    <div className='cart-shonen'>
                <div className={categoryUsed.name}></div>
                <div className='text'>

                  <div className='cont-circulitos'>
                  <Anchor id='an-img' to={'#'+manga._id+"/1"}><img src="./mas.png" alt="" /></Anchor>
                  <Anchor id='an-img' to={'#'+manga._id+"/1"}><img src="./lapiz.png" alt="" /></Anchor>
                  </div>
                  
                  <div className='title'>
                    <h3>{manga.title}</h3>
                    <span className={`style-${categoryUsed.name}`}>{categoryUsed.name}</span>
                  </div>

                  <div className='cont-botones-card'>
                    <Anchor className='a1' to={'#'+manga._id+"/1"}> Edit </Anchor>
                    <Anchor className='a2' to={'#'+manga._id+"/1"}> Delete </Anchor>
                  </div>

                </div>

                <div className='img-cart'>
                    <img className='imgManga' src={manga.cover_photo} alt="" />
                </div>
              </div>
  )
}
