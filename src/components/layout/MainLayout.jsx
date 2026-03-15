import React from 'react'

import { Outlet } from 'react-router'
import Navdar from '../shared/Navdar'
import Footer from '../shared/Footer'
const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navdar/>
      <main className="flex-grow-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
