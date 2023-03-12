import React, { useState, useEffect } from 'react'
import './mangas.css'
import CardMangas from '../CardMangas/CardMangas'
import axios from 'axios'

export default function Mangas() {

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
  
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/createmanga/view')
      .then(response => {
        setData(response.data.mangas);
        setDataLoaded(true);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    setFilteredData(data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [data, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  console.log(filteredData);

  return (
    <div className='cont-mangas'>

        <div className='fondo-mangas'>   
            <h2>Mangas</h2>
            <span><img src="./Search.png" alt="" /><input className='search' type="search" placeholder='Find your manga here' value={searchTerm} onChange={handleSearch}/></span>
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
              {filteredData.length ? (
                filteredData.map((manga, index) => (
                  <CardMangas 
                    key={index} 
                    style2={returnStyle(manga.category_id)}
                    style3={returnClassName(manga.category_id)}
                    category={returnCategory(manga.category_id)} 
                    title={manga.title}
                    img={manga.cover_photo}
                  />
                ))
              ) : (
                dataLoaded && <p>No result founds</p>
              )}
            </div>

        </div>
    </div>
  )
}
