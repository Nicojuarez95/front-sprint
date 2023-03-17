import React, { useEffect, useState } from 'react';
import './mangachapters.css';
import { Link as Anchor, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../store/Manga/actions'
import action from '../../../store/Capture/actions'

const { captureChapter } = actions;
const { captureState } = action;

export default function MangaChapters({ info }) {
  const page = Number(useParams().page)
    const dispatch = useDispatch()
    const [pagination, setPagination] = useState(page)
    const [capitulo, setCapitulo] = useState(true)
    let chapters = useSelector(store => store.manga.chapter)
    let check = useSelector(store => store.checked.checked)

    function Manga() {
      setCapitulo(true)
      dispatch(captureState({ buttonState: false }))
  }
  
  function Cap() {
      setCapitulo(false)
      dispatch(captureState({ buttonState: true }))
  }

  useEffect(() => {
      dispatch(captureChapter({ manga_id: info._id, page: pagination}))
  }, [pagination, dispatch, info._id])

  useEffect(() => {
      setCapitulo(!check)
  }, [check])

  console.log(chapters)

  return (
    <>
      <div className='details-btns'>
        <button className={capitulo === true ? 'manga-btn prueba' : 'manga-btn'} onClick={Manga}>Manga</button>
        <button className={capitulo === false ? 'manga-btn prueba' : 'manga-btn'} onClick={Cap}>Chapters</button>
      </div>

      {capitulo === true ?
        <div className='seccionTexto'>
          <p  className='description-manga'>{info.description}</p>
        </div>
        :
        <section className='card-chapter'>
          {chapters?.length > 0 ?
            chapters.map(chapter => (
              <div key={chapter._id} className='sectionChapter'>
                <img className='selecChapter' src={info.cover_photo} alt={chapter.title} />
                <div className='order-chapter'>
                  <p className='p-chapter'>Chapter #{chapter.order}</p>
                  <div className='coment-chapter'>
                    <a className="puntitos" href='/'><img src="/icon_comment.png" alt="" /></a>
                    <p>{chapter.pages.length}</p>
                  </div>
                </div>

                <Anchor className='btn-read' to={'/chapters/'+ chapter._id+"/0"}>
                  <button className='btn-read'>Read</button>
                </Anchor>


              </div>
            ))
            :
            <p>No Chapter found</p>
          }
          <div className='div-chapter'>
            {pagination !== 1 && <Anchor className='btn-chapter' to={'/manga/' + info._id + '/' + (pagination - 1)}><button className='btn-chapter' onClick={() => setPagination(pagination - 1)}>prev</button></Anchor>}
            {chapters?.length === 4 && <Anchor className='btn-chapter' to={'/manga/' + info._id + '/' + (pagination + 1)}><button className='btn-chapter' onClick={() => setPagination(pagination + 1)}>next</button></Anchor>}
          </div>
        </section>
      }
    </>
  )
}
