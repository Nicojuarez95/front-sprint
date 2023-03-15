import React from 'react'
import './buttonsicons.css'
import like from '../../../images/like.png'
import disLike from '../../../images/dislike.png'
import love from '../../../images/love.png'
import amazed from '../../../images/amazed.png'

export default function ButtonsIcons() {
  return (
    <>
      <div className="contenedor-reactions" >
        <div className="cont-button-reactions">
            <div className="button-reaction">
              <button className='buttonReac'><img src={like} alt="like"/></button>
              <button className='buttonReac'><img className='imgReac' src={disLike} alt="dislike"/></button>
              <button className='buttonReac'><img src={love} alt="love"/></button>
              <button className='buttonReac'><img src={amazed} alt="amazed"/></button>
            </div>
          </div>
      </div>
    </>
  )
}
