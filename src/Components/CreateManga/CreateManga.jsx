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
            category: category.current.value,
            description: description.current.value,
            coverPhoto: coverPhoto.current.value,
        };
        
        console.log(manga);
        const url = 'http://localhost:8000/mangas';
    
        try {
            await axios.post(url, manga, {
            });
            alert('Manga created successfully');
            console.log(category.current.value);
        } catch (error) {
            console.log('ocurrio un error');
        }
    }

    const handleSelectChange = (event) => {
        // No es necesario guardar el valor del select en una variable de estado
        console.log(event.target.value);
    };

    useEffect(() => {
        axios.get('http://localhost:8000/categories').then((response) => {
            setCategories(response.data);
        });
    }, []);


    return (
        <div className='content-form'>
            <h1>New Manga</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <input className='inputMove' type='text' placeholder='Insert title' ref={title} />
                </fieldset>
                <fieldset>
                    <select className='inputMove' id='selectMove' ref={category} onChange={handleSelectChange}>
                        <option value=''>Select a category</option>  
                        { categories.length > 0 && categories.map(category => (
                            <option key={category._id} value={category.value}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </fieldset>

                <fieldset>
                    <input className='inputMove' type='text' placeholder='Insert description' ref={description} />
                </fieldset>
                <fieldset>
                    <input className='inputMove' type='text' placeholder='Insert cover photo' ref={coverPhoto} />
                </fieldset>
                <button className='btn-manga' type='submit'>
                    Send
                </button>
            </form>
        </div>
    );
}
