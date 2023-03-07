import React from 'react'
import './App.css'
import {router} from './Pages/index.js'
import { RouterProvider } from 'react-router-dom'

export default function App() {
  // console.log(router)
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}
