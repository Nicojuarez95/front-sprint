import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import authorAction from '../../store/profile/action.js'
import { useNavigate } from 'react-router-dom'
import './EditProfile.css'

const { read_author, update_author } = authorAction

export default function EditProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const editForm = useRef(); //formRef
    const [reload, setReload] = useState(false)
    
    const handleSave = (event) => {
        event.preventDefault()
        // setShowAlert(true) // Mostrar la alerta cuando se hace clic en Save
    }


    const handleAccept = async (event) => {

        event.preventDefault();
        const cityCountry = editForm.current.city_country.value
        const array = cityCountry.split(',')

        const data = {
            name: editForm.current.name.value,
            last_name: editForm.current.last_name.value,
            city: array[0],
            country: array[1].trim(),
            date: editForm.current.date.value,
            photo: editForm.current.photo.value
        };

        await dispatch(update_author({ data: data }))
        setReload(!reload)
        // setShowAlert(false) // Ocultar la alerta
        const handleDelete = (event) => {
            event.preventDefault()
            // setShowAlertDelete(true) // Mostrar la alerta cuando se hace clic en Delete Account
        }
        const handleYes = async (event) => {
            event.preventDefault();
            const data = {
                active: false
            };
            await dispatch(update_author({ data: data }))
            setReload(!reload)
            // setShowAlertDelete(false) // Ocultar la alerta
            setTimeout(() => {
                navigate('/');
            }, 500);

        };

    };
    let author = useSelector(store => store.author.author)
    const authorDate = author?.date?.split('T')[0]

    useEffect(
        () => {
            if (author) {
                dispatch(read_author())
            }
        }, [reload]
    )

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {

        if (author?.city && author?.country) {
            setInputValue(`${author?.city}, ${author?.country}`);
        }
    }, [author]);

    return (
        <>
            <div className='editProfile'>
                <form className='formEdit'>
                    <img id='imgProfile' src="./default-profile.png" alt="profile" />
                    <input name="name" className="inputAuthorForm" type="text" defaultValue={author?.name} required />
                    <input name="last_name" className="inputAuthorForm" type="text" defaultValue={author?.last_name} required />
                    <input name="city_country" className="inputAuthorForm" type="text" defaultValue={inputValue} required />
                    <input className='inputAuthorForm' type="Date" name='date' defaultValue={authorDate} />
                    <input name="photo" className="inputAuthorForm" type="text" defaultValue={author?.photo} required />
                    <input className='btnsave' onClick={handleSave} type="submit" value="Save" />
                    <input className='btnsave' onAccept={handleAccept} type="submit" value="Save" />
                    <input className='btndelete' type="submit" value="Delete Acount" />
                </form>
            </div>
        </>
    )
}
//  <input name="date" className="inputAuthorForm" type="date" defaultValue={authorDate} required />