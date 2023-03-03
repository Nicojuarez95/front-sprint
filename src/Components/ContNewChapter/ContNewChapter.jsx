import React, { Fragment } from 'react'
import Header from '../Header/Header'
import { useRef } from 'react';
import axios from 'axios';
import './contnewchapter.css'

export default function ContNewChapter(e) {

    let title = useRef()
    let order = useRef()
    let pages = useRef()
    let form = document.querySelector("form")

    async function handleSubmit(e){
        e.preventDefault()   
    
        let data = {
          [title.current.name]: title.current.value,
          [order.current.name]: order.current.value,
          [pages.current.name]: pages.current.value,
        }
        console.log(data)
        
        let url = 'http://localhost:8000/chapters'
          try{
          await axios.post(url,data)
          // form.reset()
          }catch(error){
          console.log(error)
          console.log("ocurrio un error")
          }
          e.target.reset()
        }
        



  return (
    <Fragment>
    <Header/>
      <div className='cont-dad-chapter'>
        <div className='cont-new-chapter'>
          <h1>New Chapter</h1>
          <form className='form-new-chapter' onSubmit={handleSubmit}>

            <input type="text" placeholder='Insert title' className='input-chapter' id='title' ref={title} name="title"/>
            <input type="number" placeholder='Insert order' className='input-chapter' id='order' ref={order} name="order"/>
            <input type="text" placeholder='Insert pages' className='input-chapter' id='pages' ref={pages} name="pages"/>

            <input type="submit" className='submit-chapter' value='Send' id='submit'/>

          </form>
        </div>
      </div>
    </Fragment>
  )
}
