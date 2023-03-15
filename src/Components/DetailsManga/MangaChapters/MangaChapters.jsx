import React, { useEffect, useState } from 'react';
import './mangachapters.css';
import { Link as Anchor } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../store/Manga/actions'
import action from '../../../store/Capture/actions'

const { captureChapter } = actions;
const { captureState } = action;

export default function MangaChapters({ info }) {
    let page = useSelector(store => store)
    console.log(page)
    const dispatch = useDispatch()
    const [pagination, setPagination] = useState(1)
    const [capitulo, setCapitulo] = useState(true)

    let chapters = useSelector(store => store.manga.chapter)
    console.log(chapters)
    useEffect(() => {
        dispatch(captureChapter({manga_id: info._id, page: pagination}))
    }, [pagination])
    console.log(info._id)

  
    useEffect(()=>{
      setCapitulo(!page)
    },[])

  return (
    <>
      <div className='details-btns'>
        <button className={capitulo === true ? 'manga-btn prueba' : 'manga-btn'} onClick={() => setCapitulo(true)}>Manga</button>
        <button className={capitulo === false ? 'manga-btn prueba' : 'manga-btn'} onClick={() => setCapitulo(false)}>Chapters</button>
      </div>

      {capitulo === true ?
        <div className='seccionTexto'>
          <p  className='description-manga'>{info.description}</p>
        </div>
        :
        <section className='card-chapter'>
          {chapters.length > 0 ?
            chapters.map(chapter => (
              <div key={chapter._id} className='sectionChapter'>
                <img className='selecChapter' src={chapter.manga_id.cover_photo} alt={chapter.title} />
                <div className='order-chapter'>
                  <p className='p-chapter'>Chapter #{chapter.order}</p>
                  <div className='coment-chapter'>
                    <button className="puntitos">. . .</button>
                    <p>169</p>
                  </div>
                </div>

                <Anchor className='btn-read' to={'/chapters/' + chapter._id}>
                  <button className='btn-read'>Read</button>
                </Anchor>


              </div>
            ))
            :
            <p>No Chapter found</p>
          }
          <div className='div-chapter'>
            {pagination !== 1 && <Anchor className='btn-chapter' to={'/mangas/' + info._id + '/' + (pagination - 1)}><button className='btn-chapter' onClick={() => dispatch(captureState({page: pagination - 1}))}>prev</button></Anchor>}
            {chapters.length === 4 && <Anchor className='btn-chapter' to={'/mangas/' + info._id + '/' + (pagination + 1)}><button className='btn-chapter' onClick={() => dispatch(captureState({page: pagination + 1}))}>next</button></Anchor>}
          </div>
        </section>
      }
    </>
  )
}
