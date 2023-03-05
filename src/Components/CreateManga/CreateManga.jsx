import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './CreateManga.css';
import axios from 'axios';

export default function CreateManga() {
    const [categories, setCategories] = useState([]);
    let title = useRef();
    let category = useRef();
    let description = useRef();
    let coverPhoto = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        let manga = {
            title: title.current.value,
            // category: category.current.value,
            description: description.current.value,
            coverPhoto: coverPhoto.current.value,
            category_id: "63fe8112f09373806fd89fe5"
        };

        // console.log(manga);
        const url = 'http://localhost:8000/mangas';
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }

        try {
            await axios.post(url, manga, headers, {
            });
            alert('Manga created successfully');
            // console.log(category.current.value);
        } catch (error) {
            console.log('ocurrio un error');
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
                    <select className='inputMove' id='selectMove' ref={category} onClick ={renderCategory}>
                        <option value=''>Select a category</option>
                        {categories.map(categoria => <option key={categoria.name} value={categoria.name}>{categoria.name}</option>)}

                    </select>

                </fieldset>

                <fieldset className='fieldsetMove'>
                    <input className='inputMove' type='text' placeholder='Insert description' ref={description} />
                </fieldset>
                <fieldset className='fieldsetMove'>
                    <input className='inputMove' type='text' placeholder='Insert cover photo' ref={coverPhoto} />
                </fieldset>
                <button className='btn-manga' type='submit'>
                    Send
                </button>
            </form>
        </div >
    );
}
