import React, { useState, useEffect } from 'react'
import './mangas.css'
import CardMangas from '../CardMangas/CardMangas'
import axios from 'axios'

export default function Mangas() {

  const [mangas_v1, setMangas_v1] = useState([])
  const url= "http://localhost:8000/createmanga/view"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setMangas_v1(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function returnClassName(value){
    switch (value){
      case "640bae73ea123674b00b1a57": 
      return "kodomo";
      break;
      case "640bae73ea123674b00b1a58": 
      return "shojo";
      break;
      case "640bae73ea123674b00b1a59": 
      return "seinen";
      break;
      case "640bae73ea123674b00b1a56": return "shonen";
      break;
      default: return "";
      break;
    }
  }
  function returnStyle(value){
    switch (value){
      case "640bae73ea123674b00b1a57": 
      return "kodomoBarr";
      break;
      case "640bae73ea123674b00b1a58": 
      return "shojoBarr";
      break;
      case "640bae73ea123674b00b1a59": 
      return "seinenBarr";
      break;
      case "640bae73ea123674b00b1a56": return "shonenBarr";
      break;
      default: return "";
      break;
    }
  }
  function returnCategory(value){
    switch (value){
      case "640bae73ea123674b00b1a57": 
      return "Kodomo";
      break;
      case "640bae73ea123674b00b1a58": 
      return "Shojo";
      break;
      case "640bae73ea123674b00b1a59": 
      return "Seinen";
      break;
      case "640bae73ea123674b00b1a56": 
      return "Shonen";
      break;
      default: return "";
      break;
    }
  }

  return (
    <div className='cont-mangas'>

        <div className='fondo-mangas'>   
            <h2>Mangas</h2>
            <span><img src="./Search.png" alt="" /><input className='search' type="search" placeholder='Find your manga here' /></span>
        </div>

        <div className='section-manga'>

            <div className="cont-checks">
              <label class="category-button">
                <input type="checkbox" name="category" value="all"/>
                <span className="category-label">All</span>
              </label>
              <label class="category-button2">
                <input type="checkbox" name="category" value="all"/>
                <span className="category-label">Shōnen</span>
              </label>
              <label class="category-button3">
                <input type="checkbox" name="category" value="all"/>
                <span className="category-label">Seinen</span>
              </label>
              <label class="category-button4">
                <input type="checkbox" name="category" value="all"/>
                <span className="category-label">Shōjo</span>
              </label>
              <label class="category-button5">
                <input type="checkbox" name="category" value="all"/>
                <span className="category-label">Kodomo</span>
              </label>
            </div>

            <div className='cont-cartas'>
              {mangas_v1.mangas?.map((manga, index) =>(
                <CardMangas 
                key={index} 
                style2={returnStyle(manga.category_id)}
                style3={returnClassName(manga.category_id)}
                category={returnCategory(manga.category_id)} 
                title={manga.title}
                img={manga.cover_photo}/>
              ))}
            </div>

        </div>
    </div>
  )
}
