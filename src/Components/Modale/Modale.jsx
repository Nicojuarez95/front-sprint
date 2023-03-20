import React, { useRef } from 'react'
import './modale.css'
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Modal({setRender, setReload, reload}) {
    const id = useSelector(store => store.manga.manga)
    const title = useRef()
    const description = useRef()
    const cover_photo = useRef()
    const formregister = useRef();

    const close = () => {
        setRender(false)
    }

    async function saveEdit(e){
        e.preventDefault()

        let manga = {
            title: title.current.value || id.title,
            description: description.current.value || id.description,
            cover_photo: cover_photo.current.value || id.cover_photo,
            category_id: id.category_id
        };

        console.log(manga)

        const url = 'http://localhost:8000/mangas-form/'+id._id;
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }

        try {
            await axios.put(url, manga, headers);
            
        } catch (error) {
           console.log(error)
        }

        setRender(false)
        setReload(!reload)
    }
    
    return (
      <div className="modalContainer">
        <div className="modal">
          <span className="titleModale">Edit your manga</span>
            <form className='formModale' ref={formregister} onSubmit={saveEdit}>
                <div className="cont-input">
                    <div>
                        <label> Title</label>
                        <input ref={title} type="text" name='title' defaultValue={id.title} placeholder="Insert new title"/>
                    </div>
                    <div>
                        <label> Description</label>
                        <input ref={description} type="text" name='description' defaultValue={id.description} placeholder="Insert new description"/>
                    </div>
                    <div>
                        <label> Photo</label>
                        <input ref={cover_photo} type="url" name='url' defaultValue={id.cover_photo} placeholder="Insert new link of photo"/>
                    </div>
                </div>
                <div className='saveCancel'>
                    <input type="submit" className='save' value="Save"/>
                    <input type="submit" className='save' value="Cancel" onClick={close}/>
                </div>
            </form>
        </div>
      </div>
    );
  };
