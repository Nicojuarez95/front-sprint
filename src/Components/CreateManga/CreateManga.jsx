import React, { useState } from 'react';
import { useRef } from 'react';
import './CreateManga.css';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function CreateManga() {
    const [categories, setCategories] = useState([]);
    const [categoria, setCategoria] = useState(null);
    let title = useRef();
    let category = useRef();
    let description = useRef();
    let cover_photo = useRef();
    const isDisabled = categoria == null;

    async function handleSubmit(e) {
        e.preventDefault();
        const filteredCategory = categories.find((category) => (category.name == categoria))
        let manga = {
            title: title.current.value,
            description: description.current.value,
            cover_photo: cover_photo.current.value,
            category_id: filteredCategory._id,

        };
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });

        // console.log(manga);
        const url = 'http://localhost:8000/mangas';
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        
        try {
            await axios.post(url, manga, headers, {
            });
            Toast.fire({
                icon: "success",
                title: "Manga created successfully",
            });
            
        } catch (error) {
            Toast.fire ({
                icon: "error",
                title: "This title already exist"
            });
              // console.log('ocurrio un error');
        }
    }

    async function renderCategory() {
        await axios.get('http://localhost:8000/mangas').then((response) => { setCategories(response.data.categories) })
    }



    return (
        <div className='content-form'>
            <h1>New Manga</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className='fieldsetMove'>
                    <input className='inputMove' type='text' placeholder='Insert title' ref={title} />
                </fieldset>
                <fieldset className='fieldsetMove'>
                    <select className='inputMove' id='selectMove' ref={category} onClick ={renderCategory} onChange={(e)=> setCategoria(e.target.value)}>
                        <option value=''>Select a category</option>
                        {categories.map(categoria => <option key={categoria.name} value={categoria.name}>{categoria.name}</option>)}

                    </select>

                </fieldset>

                <fieldset className='fieldsetMove'>
                    <input className='inputMove' type='text' placeholder='Insert description' ref={description} />
                </fieldset>
                <fieldset className='fieldsetMove'>
                    <input className='inputMove' type='text' placeholder='Insert cover photo' ref={cover_photo} />
                </fieldset>
                <button className='btn-manga' type='submit'>
                    Send
                </button>
            </form>
        </div >
    );
}