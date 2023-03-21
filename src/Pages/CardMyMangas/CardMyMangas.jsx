import React from 'react'
import './cardmymangas.css'
import { Link as Anchor } from 'react-router-dom'
import Modal from '../../Components/Modale/Modale'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionEdit from '../../store/MangaEdit/actions'
import axios from 'axios'
import alertActions from '../../store/Alert/actions.js';
const {open} = alertActions

const { captureId, deleteManga } = actionEdit

export default function CardMangas({manga, categories, setReload, reload}) {
  const categoryUsed= categories.find((cat) => cat._id === manga.category_id)
  let dispatch = useDispatch()
  const [render, setRender] = useState(false)
  const id = useSelector(store => store.manga.manga)
  
  async function handleEdit(e){
    await dispatch(captureId({manga_id: e.target.id}))
    setRender(!render)
  }

  async function handleDelete(e){
    const mangaId = e.target.id;
    await dispatch(deleteManga({ manga_id: mangaId }));

    const url = `http://localhost:8000/mangas-form/${mangaId}`;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };

    try {
      await axios.delete(url, { headers });
      
    } catch (error) {
      console.log(error);
    }
    let dataAlert = {
      icon: 'success',
      title: "Manga removed"
    }
    dispatch(open(dataAlert))
    setReload(!reload)
  }
  

  return (
    <div className='cart-shonen'>
                <div className={categoryUsed.name}></div>
                <div className='text'>

                  <div className='cont-circulitos'>
                    <Anchor id='an-img' to={`/chapters-form/`+manga._id}><img src="./mas.png" alt="" /></Anchor>
                    <Anchor id='an-img' to={'/edite/'+manga._id}><img src="./lapiz.png" alt="" /></Anchor>
                  </div>
                  
                  <div className='title'>
                    <h3>{manga.title}</h3>
                    <span className={`style-${categoryUsed.name}`}>{categoryUsed.name}</span>
                  </div>

                  <div className='cont-botones-card'>
                    <Anchor className='a1' to={'#'+manga._id} onClick={handleEdit} id={manga._id}> Edit </Anchor>
                    {render && <Modal setRender={setRender} render={render} setReload={setReload}
                    reload={reload}/>}
                    <Anchor className='a2' onClick={handleDelete} id={manga._id}> Delete </Anchor>
                  </div>

                </div>

                <div className='img-cart'>
                    <img className='imgManga' src={manga.cover_photo} alt="" />
                </div>
              </div>
  )
}
