import React from 'react'
import './mangas.css'
import CardMangas from '../CardMangas/CardMangas'

export default function Mangas() {
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
                <span class="category-label">All</span>
              </label>
              <label class="category-button2">
                <input type="checkbox" name="category" value="all"/>
                <span class="category-label">Shōnen</span>
              </label>
              <label class="category-button3">
                <input type="checkbox" name="category" value="all"/>
                <span class="category-label">Seinen</span>
              </label>
              <label class="category-button4">
                <input type="checkbox" name="category" value="all"/>
                <span class="category-label">Shōjo</span>
              </label>
              <label class="category-button5">
                <input type="checkbox" name="category" value="all"/>
                <span class="category-label">Kodomo</span>
              </label>
            </div>

            <div className='cont-cartas'>
            <CardMangas style="textspan" style2="barra" estilo="Kodomo"/>
            <CardMangas style="textspan2" style2="barra2" estilo="Shōjo"/>
            <CardMangas style="textspan3" style2="barra3" estilo="Seinen"/>
            <CardMangas style="textspan4" style2="barra4" estilo="Shōnen"/>

            </div>

        </div>
    </div>
  )
}
