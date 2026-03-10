import React from 'react'

import { Outlet } from 'react-router'
import Navdar from '../shared/Navdar'
import Footer from '../shared/Footer'
const MainLayout = () => {
  return (
    <div>
      <Navdar/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default MainLayout
