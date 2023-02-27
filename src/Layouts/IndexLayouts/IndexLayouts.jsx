import React from 'react'
import Header from '../../Components/Header/Header'

export default function IndexLayouts(props) {

  const {children} = props

  return (
    <>
    <Header/>
    {children}
    </>
  )
}
