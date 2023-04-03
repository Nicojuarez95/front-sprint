import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";
import './Page.css';

import Comment from '../../Components/Comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import modalActions from '../../store/RenderCommentsModal/actions';
import commentsActions from '../../store/Comments/actions';
import { Link as Anchor } from 'react-router-dom'

export default function Page() {
  const navigate = useNavigate();
  const { id, page} = useParams();
  const url = 'http://localhost:8000/chapters/';
  const [chapter, setChapters] = useState({});
  const [next, setNext] = useState('');
  let [index, setIndex] = useState(Number(page));

  let dispatch = useDispatch()
  let modalState = useSelector(store => store.commentsModal.state)
  const { renderModal } = modalActions

  let comments = useSelector(store => store.comments.comments)
  useEffect(() => {
    axios
      .get(`${url}${id}`)
      .then((response) => {
        setChapters(response.data.chapter);
        setNext(response.data.next)
      })

      .catch((error) => console.error(error));
  }, [comments]);

  useEffect(() => { // no puede definir una funcion asincrona, la funcion la tengo q definir afuera y ejecutarla adentro
    axios
      .get(`${url}${id}`)
      .then(response => {
        setChapters(response.data.chapter);
        setNext(response.data.next);
        }
      )
      .catch((error) => console.error(error));
  }, [id]); // parametro para que se ejecute el efecto nuevamente cuando llego a la ultima pagina del capitulo(booleno)

  const handlePrev = () => {
    setIndex(index - 1)
    navigate(`/chapters/${id}/${index - 1}`)
    if (index <= 0) {
        navigate(`/mangas/${chapter.manga_id}/1`)
    }
}

const handleNext = () => {
    setIndex(index + 1)
    navigate(`/chapters/${id}/${index + 1}`)
    if (index >= chapter.pages.length -1) {
        navigate(`/chapters/${next}/${0}`) // next es el id del siguiente capitulo

}
}
console.log(chapter)

function handleRender() {
  dispatch(renderModal({ state: true }))
}

let token = localStorage.getItem('token')
let headers = { headers: { 'Authorization': `Bearer ${token}` } }
const { getComments } = commentsActions
useEffect(() => { // me actualiza toda la cantidad de comentarios
  let url = 'http://localhost:8000/comments?chapter_id=' + id
  setTimeout(() => {
    axios.get(url, headers).then(res => dispatch(getComments({ comments: res.data.comments })))
  }, 100)
}, [])

return (
  <div className="mover">
    <div className="div-chapter2">
      <p className="parrafo-chapter2"> Cap N°  {chapter.order} - {chapter.title} </p>
    </div>
    <div className="contenedor-capitulos">
      <button className="boton-back" onClick={handlePrev}>
        <img className="flecha" src='/flecha-izquierda.png' alt="" />
      </button>

      <div className='posi'>
          <img className='imgChapter' src={chapter?.pages?.[index]} alt="chapter" /> 
        </div>
{/* ? operador de encadenamiento para acceder a las propiedades del objeto chapter y prevenir errores , si no exiten o son nulas este operador lo que hace en lugar de tirar error renderiza la imagen vacia */}
      <button className="boton-next" onClick={handleNext}>
        <img className="flecha" src='/flecha-correcta.png' alt="" />
      </button>
    </div>
    <div className="div-chapter3">
      <div className="chapter3">
        <p className="parrafo-chapter3">
          <img className="comment" src='/icon_comment.png' alt="" onClick={handleRender}/> Comments {comments.length}
        </p>
        {modalState ? <Comment /> : ""}
      </div>
    </div>
  </div>
);
}