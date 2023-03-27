import React from 'react'
import './chapter.css'
import { useSelector } from 'react-redux';


export default function Chapter() {
    let chapter = useSelector(store => store.chapters.chapter)


    return (
        <div className='chapter'>
        
            {chapter.title? <h2> Chapter # {`${chapter.order} - ${chapter.title}`}</h2> : ''}

            <img src={chapter.cover_photo}/>
        </div>
    )
}