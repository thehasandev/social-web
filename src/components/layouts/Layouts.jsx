import React from 'react'
import Navabar from '../Navabar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layouts() {
  return (
    <>
     <Navabar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layouts