import React, { Fragment } from 'react'
import { useRef } from 'react';
import axios from 'axios';
import './contnewchapter.css'
import {useDispatch, /* useSelector */} from 'react-redux'
import alertActions from '../../store/Alert/actions.js';
const {open} = alertActions

export default function ContNewChapter() {

  let title = useRef()
  let order = useRef()
  let pages = useRef()
  // const store = useSelector(store=>store)
  let dispatch = useDispatch()

  async function handleSubmit(e){
    e.preventDefault()   
    
    let data = {
      [title.current.name]: title.current.value,
      [order.current.name]: order.current.value,
      [pages.current.name]: pages.current.value,
    }   
        
    let url = 'https://minga-vrxh.onrender.com/chapters'
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    try{
      await axios.post(url,data, headers)
      let dataAlert = {
        icon: 'success',
        title: "Chapter created successfully"
      }
      dispatch(open(dataAlert))
      
    }
    catch(err){
      console.log(err)
      console.log("ocurrio un error")

      // let error = err.response.data.message
      let dataAlert = {
        icon: 'error',
        title: "Could not create chapter"
      }
      dispatch(open(dataAlert))

      }
      e.target.reset()
    }
        



  return (
    <>
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
    </>
  )
}
