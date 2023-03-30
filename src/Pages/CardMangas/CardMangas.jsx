import React from 'react'
import './cardmangas.css'
import { Link as Anchor } from 'react-router-dom'

export default function CardMangas({manga, categories}) {
  const categoryUsed= categories.find((cat) => cat._id === manga.category_id)
  return (
    <div className='cart-shonen'>
                <div className={categoryUsed.name}></div>
                <div className='text1'>
                  <div>
                    <h3>{manga.title}</h3>
                    <span className={`style-${categoryUsed.name}`}>{categoryUsed.name}</span>
                  </div>
                  <Anchor to={'/manga/'+manga._id+"/1"}> Read </Anchor>
                </div>

                <div className='img-cart'>
                    <img className='imgManga' src={manga.cover_photo} alt="" />
                </div>
              </div>
  )
}
