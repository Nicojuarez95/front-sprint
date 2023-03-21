import React, { useState, useEffect, useRef } from 'react'
import './mymangas.css'
import axios from 'axios';
import CardMyMangas from '../CardMyMangas/CardMyMangas'
import { useDispatch, useSelector } from "react-redux";
import eventActions from "../../store/Mymangas/action.js"
import actionsChecks from '../../store/Checks/actions.js';
import { Link as Anchor } from 'react-router-dom';

const { read_events } = eventActions;
const { captureChecks} = actionsChecks
let categoriasCheck= []

export default function Mangas() {
  
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.events.events);
  const [cate, setCate] = useState([]);
  const categorias = useSelector((store => store.checks.category))
  const [pages, setPages] = useState(1);
  
  
  useEffect(()=>{
    axios.get("https://minga-vrxh.onrender.com/mangas-form")
    .then(response => {
      setCate(response.data.categories)
    })
    .catch(error => console.log(error))
  },[])

  
  function checks(e){
    cate.forEach(cate => {
      if(cate.name === e.target.value){
        if(categoriasCheck.includes(cate._id)){
          categoriasCheck = categoriasCheck.filter(e => e !== cate._id)
        } else {
          categoriasCheck.push(cate._id)
        }
        dispatch(captureChecks({ categories: categoriasCheck.join()}))
      } 
    })
  }
  
  useEffect(() => {
    if (data) {
      dispatch(read_events({captureChecks: categorias, pages }));
    }
  }, [reload, categorias, pages]);


  // función para aumentar el valor de pages en uno
  function increasePages() {
    setPages((prevPages) => prevPages + 1);
    setReload(true);
  }

  // función para disminuir el valor de pages en uno
  function decreasePages() {
    if (pages > 0) {
      setPages((prevPages) => prevPages - 1);
      setReload(true);
  }
}

  
  return (
    <div className='cont-mangas'>

        <div className='fondo-mangas'>   
            <h2 className='tituloMyMangas'>My mangas</h2>
        </div>

        <div className='section-mangas'>
            
        <h3 className="explore-mangas">Explore</h3>
            <div className="img-mangas-mobiles">
              <span>
                <label className="text-mobile-mangas">Adventurers</label>
                <img src="./imagen16.png" alt="" />
              </span>
              <span>
                <label className="text-mobile-mangas">Nostalgic</label>
                <img src="./imagen17.png" alt="" />
              </span>
              <span>
                <label className="text-mobile-mangas">Popular</label>
                <img src="./imagen18.png" alt="" />
              </span>
            </div>

            <div className="cont-check">
              <label className="category-button2">
                <input type="checkbox" name="category" value="shonen" onClick={checks}/>
                <span className="category-label">shonen</span>
              </label>
              <label className="category-button3">
                <input type="checkbox" name="category" value="seinen" onClick={checks}/>
                <span className="category-label">seinen</span>
              </label>
              <label className="category-button4">
                <input type="checkbox" name="category" value="shojo" onClick={checks}/>
                <span className="category-label">shojo</span>
              </label>
              <label className="category-button5">
                <input type="checkbox" name="category" value="comic" onClick={checks}/>
                <span className="category-label">comic</span>
              </label>
            </div>

            <div className='cont-cartas'>
              <div className='cart-shonen'>

                <div className='text-card-create'>
                  <p>Create new manga</p>
                </div>

                <div className='img-cart-create'>
                    <Anchor className='imgMangaCreate' to={"/mangas-form"}><img className='imgMangaCreate' src="./pluscreate.png" alt="" /></Anchor>
                </div>
              </div>

            {data.length && cate?.length ? (
                data.map((manga, index) => (
                  <CardMyMangas 
                    key={index} 
                    manga={manga}
                    categories={cate}
                    setReload={setReload}
                    reload={reload}
                  />
                ))
              ) : (
                <p>No result founds</p>
              )}
            </div>

            <div className='cont-boton'>
              {pages < 2 ? "" : <button className='ancord' onClick={decreasePages} >Prev</button>}
              <p>{pages}</p>
              {data.length >= 6 || data.length === 10 ? <button className='ancord' onClick={increasePages} >Next</button> : ""  }
            </div>
                
        </div>
    </div>
  )
}

