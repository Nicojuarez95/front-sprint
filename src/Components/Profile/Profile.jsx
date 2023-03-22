import React from 'react'
import {useSelector} from 'react-redux'
import './Profile.css'

export default function Profile() {
    let author = useSelector(store => store.author.author)
    const authorDate = author?.date?.split('T')[0]
    return (

        <div className='profile'>
            <div className="data-author">
                <p className='profileP'> Name:{author?.name}</p>
                <p className='profileP'> LastName: {author?.last_name} </p>
                <p className='profileP'> City:{author?.city} </p>
                <p className='profileP'> Country:{author?.country} </p>
                <p className='profileP'>Date:{authorDate} </p>
                <p id='foto' className='profileP'> Photo: {author?.photo} </p>
            </div>
        </div>
    )
}