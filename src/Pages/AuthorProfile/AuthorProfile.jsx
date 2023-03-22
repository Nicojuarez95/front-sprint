import React from 'react'
import { useEffect, useState } from 'react'
import './AuthorProfile.css'
import EditProfile from '../../Components/EditProfile/EditProfile'
import Profile from '../../Components/Profile/Profile'
import { useSelector } from 'react-redux'

export default function Authorprofile() {
    let author = useSelector(store => store.author.author)

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        // solo actualizamos el valor si los datos no son undefined
        if (author?.photo) {
            setInputValue(author?.photo);
        }
    }, [author]);
    return (
        <>
            <div className='contenedor'>
                <div id='profileBackground'>
                    <h1 id='tituloAuthor'>AUTHOR PROFILE</h1>
                </div>
                <div className='sectionProfile'>
                    <EditProfile />
                    <Profile />
                </div>
            </div>
        </>
    )
}
