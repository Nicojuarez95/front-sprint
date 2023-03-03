import React from 'react'
import './App.css'
import {router} from './Pages/index.js'
import { RouterProvider } from 'react-router-dom'
import Header from './Components/Header/Header'
import ContNewChapter from './Components/ContNewChapter/ContNewChapter'

export default function App() {
  // console.log(router)
  return (
    <div>
    {/* <RouterProvider router={router}/>
    <Header/> */}
    <ContNewChapter/>
    </div>
  )
}
