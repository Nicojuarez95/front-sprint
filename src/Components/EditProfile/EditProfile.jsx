import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import authorAction from '../../store/profile/action.js'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import './EditProfile.css'

const { read_author, update_author } = authorAction

export default function EditProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const editForm = useRef(); //formRef
    const [reload, setReload] = useState(false);
    const [ showAlert, setShowAlert] = useState(false);

    const handleAccept = async (event) => {

        event.preventDefault();
        const cityCountry = editForm.current[2].value
        const array = cityCountry.split(',')

        const data = {
            name: editForm.current[0].value,
            last_name: editForm.current[1].value,
            city: array[0],
            country: array[1].trim(),
            date: editForm.current[3].value,
            photo: editForm.current[4].value
        };

        setShowAlert(false);
        if (!showAlert) {
            const result = await Swal.fire({
                title: '¿Are you sure?',
                text: 'You are about to update your data. Are you sure to continue?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, actualizar',
                cancelButtonText: 'Cancelar',
            });
            if (result.isConfirmed) {
                dispatch(update_author({ data: data }));
                setReload(!reload);
                setShowAlert(true)
            }

        }
    };
    async function handleClose(event) {
        event.preventDefault();
        const data = {
            active: false
        };
        const result = await Swal.fire({
            title: '¿Are you sure?',
            text: 'You are about to delete your account. Are you sure to continue?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });
    
        if (result.isConfirmed) {
        dispatch(update_author({ data: data }));
            setReload(!reload);
            setTimeout(() => {
                navigate('/');
            }, 500);
        }
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
                <img id="profile-img" src={author?.photo} alt=""/>
                <form ref={editForm} className='formEdit'>
                    <input name="name" className="inputAuthorForm" type="text" defaultValue={author?.name} required />
                    <input name="last_name" className="inputAuthorForm" type="text" defaultValue={author?.last_name} required />
                    <input name="city_country" className="inputAuthorForm" type="text" defaultValue={inputValue} required />
                    <input className='inputAuthorForm' type="Date" name='date' defaultValue={authorDate} />
                    <input name="photo" className="inputAuthorForm" type="text" defaultValue={author?.photo} required />
                    <button className='btnsave' onClick={handleAccept}> save</button>
                    <button className='btndelete' onClick={handleClose} > Delete Acount </button>
                </form>
            </div>
        </>
    )
    }
