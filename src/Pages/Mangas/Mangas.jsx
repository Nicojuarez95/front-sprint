import React, { useState, useEffect, useRef } from 'react'
import './mangas.css'
import axios from 'axios';
import CardMangas from '../CardMangas/CardMangas'
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/Text/action.js";
import eventActions from "../../store/Comic/actions.js";
import actionsChecks from '../../store/Checks/actions.js';

const { read_events } = eventActions;
const { captureText } = actions;
const { captureChecks} = actionsChecks
let categoriasCheck= []

export default function Mangas() {

  function returnClassName(value){
    switch (value){
      case "640bae73ea123674b00b1a57": 
      return "kodomo";
      
      case "640bae73ea123674b00b1a58": 
      return "shojo";
      
      case "640bae73ea123674b00b1a59": 
      return "seinen";
      
      case "640bae73ea123674b00b1a56": return "shonen";
      
      default: return "";
      
    }
  }
  function returnStyle(value){
    switch (value){
      case "640bae73ea123674b00b1a57": 
      return "kodomoBarr";
  
      case "640bae73ea123674b00b1a58": 
      return "shojoBarr";
  
      case "640bae73ea123674b00b1a59": 
      return "seinenBarr";
  
      case "640bae73ea123674b00b1a56": return "shonenBarr";
  
      default: return "";
  
    }
  }
  function returnCategory(value){
    switch (value){
      case "640bae73ea123674b00b1a57": 
      return "Comic";
  
      case "640bae73ea123674b00b1a58": 
      return "Shojo";
  
      case "640bae73ea123674b00b1a59": 
      return "Seinen";
  
      case "640bae73ea123674b00b1a56": 
      return "Shonen";
  
      default: return "";
  
    }
  }
  
  const [reload, SetReload] = useState(false);
  const dispatch = useDispatch();
  const text = useRef("");
  const defaultText = useSelector((store) => store.text.text);
  const data = useSelector((store) => store.events.events);
  const [cate, setCate] = useState([]);
  const categorias = useSelector((store => store.checks.category))
  const [pages, setPages] = useState(1);
  
  const handleSearch = () => {
    SetReload(!reload);
    dispatch(captureText({ inputText: text.current.value }));
  };
  
  useEffect(()=>{
    axios.get("http://localhost:8000/mangas-form")
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
      dispatch(read_events({ inputText: text.current.value, captureChecks: categorias, pages }));
    }
  }, [reload, categorias, pages]);


  // función para aumentar el valor de pages en uno
  function increasePages() {
    setPages((prevPages) => prevPages + 1);
    SetReload(true);
  }

  // función para disminuir el valor de pages en uno
  function decreasePages() {
    if (pages > 0) {
      setPages((prevPages) => prevPages - 1);
      SetReload(true);
  }
}

  
  return (
    <div className='cont-mangas'>

        <div className='fondo-mangas'>   
            <h2>Mangas</h2>
            <span><img src="./Search.png" alt="" /><input ref={text} className='search' type="search" placeholder='Find your manga here' defaultValue={defaultText} onChange={handleSearch}/></span>
        </div>

        <div className='section-manga'>
            
        <h3 className="explore-mangas">Explore</h3>
            <div className="img-mangas-mobile">
              <span>
                <label className="text-mobile-manga">Adventurers</label>
                <img src="./imagen16.png" alt="" />
              </span>
              <span>
                <label className="text-mobile-manga">Nostalgic</label>
                <img src="./imagen17.png" alt="" />
              </span>
              <span>
                <label className="text-mobile-manga">Popular</label>
                <img src="./imagen18.png" alt="" />
              </span>
            </div>

            <div className="cont-checks">
              <label class="category-button2">
                <input type="checkbox" name="category" value="shonen" onClick={checks}/>
                <span className="category-label">shonen</span>
              </label>
              <label class="category-button3">
                <input type="checkbox" name="category" value="seinen" onClick={checks}/>
                <span className="category-label">seinen</span>
              </label>
              <label class="category-button4">
                <input type="checkbox" name="category" value="shojo" onClick={checks}/>
                <span className="category-label">shojo</span>
              </label>
              <label class="category-button5">
                <input type="checkbox" name="category" value="comic" onClick={checks}/>
                <span className="category-label">comic</span>
              </label>
            </div>

            <div className='cont-cartas'>
              {data.length ? (
                data.map((manga, index) => (
                  <CardMangas 
                    key={index} 
                    style2={returnStyle(manga.category_id)}
                    style3={returnClassName(manga.category_id)}
                    category={returnCategory(manga.category_id)}
                    id={manga._id} 
                    title={manga.title}
                    img={manga.cover_photo}
                  />
                ))
              ) : (
                <p>No result founds</p>
              )}
            </div>
            <div className='cont-boton'>
              {pages < 2 ? "" : <button className='ancord' onClick={decreasePages} >Prev</button>}
              <p>{pages}</p>
              {data.length === 6 || data.length === 10 ? <button className='ancord' onClick={increasePages} >Next</button> : ""  }
              
            </div>      
        </div>
    </div>
  )
}
