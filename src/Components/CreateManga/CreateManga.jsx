import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './CreateManga.css';
import axios from 'axios';

export default function CreateManga() {
    const [categorias, setCategorias ] = useState([])
    const [selectValue, setSelectValue] = useState([]);
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
        const url = 'http://localhost:8000/manga'
    try {
        await axios.post(url, manga)
        alert("Manga created successfully")
            // e.target.reset()
            console.log(setSelectValue())
    
    } catch (error) {
        // console.log(error)
        console.log("ocurrio un error")
    }
    }
    const handleSelectChange = (event) => {
        setSelectValue(console.log(event.target.value));
        
    };
    
    
    useEffect( ()=>  { 
        axios.get ('http://localhost:8000/categorias').then((response) => 
        { setCategorias(response.data) } )
        

        
    }, [] ) 
    // console.log(categorias)

return (
    <div className='content-form'>
        <h1>New Manga</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <input className='inputMove' type='text' placeholder='Insert title' ref={title} />
            </fieldset>
            <fieldset>
                <select className='inputMove' id='selectMove' ref={category} value={selectValue} onChange={handleSelectChange}>
                <option value=''> Insert category</option>
                    {categorias.map(categoria =>  <option key={categoria.value} value={categoria.value}>{categoria.name}</option>
                    )}
                    {/* <option value='action'>Action</option>
                    <option value='adventure'>Adventure</option>
                    <option value='comedy'>Comedy</option>
                    <option value='drama'>Drama</option> */}
                </select>
            </fieldset>
            <fieldset>
                <input className='inputMove' type='text' placeholder='Insert description' ref={description} />
            </fieldset>
            <fieldset>
                <input className='inputMove' type='text' placeholder='Insert cover photo' ref={coverPhoto} />
            </fieldset>
            <button className='btn-manga' type='submit'>Send</button>
        </form>
    </div>
);
}
