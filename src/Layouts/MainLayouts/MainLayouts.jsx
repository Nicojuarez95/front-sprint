import React from 'react'
import Header from '../../Components/Header/Header'
import CreateManga from '../../Components/CreateManga/CreateManga'
// import Foother from '../../Components/Foother/Foother'
// import { Outlet } from 'react-router-dom'

export default function MainLayouts() {
  return (
    <>
    <Header/>
    {/* {<Outlet/>} */}
    <CreateManga/>
    {/* <Foother/> */}
    </>
  )
}
