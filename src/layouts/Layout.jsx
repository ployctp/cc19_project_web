import React from 'react'
import { Outlet } from 'react-router'
import MainNav from '../components/mainNav'

const Layout = () => {
  return (
    <div>
    <MainNav />
    <main>
      <Outlet />
    </main>
    </div>
  )
}

export default Layout