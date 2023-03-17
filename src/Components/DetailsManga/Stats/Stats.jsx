import React from 'react'
import './stats.css'

export default function stats(props) {
  return (
    <div className='rating-stats'>
            <div className='component-rating lineStats'>
                <div className='dateState1'>4.5/5</div>
                <div className='dateState2'>Rating</div>
            </div>
            <div className='component-rating lineStats'>
                <div className='dateState1'>{props.chapterCount}</div>
                <div className='dateState2'>Chapters</div>
            </div>
            <div className='component-rating'>
                <div className='dateState1'>Eng</div>
                <div className='dateState2'>Language</div>
            </div>
        </div>
  )
}
