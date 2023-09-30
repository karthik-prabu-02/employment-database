import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'

function Employeeinput() {
  return (
    <>
        <Navbar/>
        <Outlet></Outlet>
    </>
  )
}

export default Employeeinput