import React from 'react'
import { Outlet } from 'react-router'

import HeaderAdmin from '../components/admin/HeaderAdmin'
import SidebarAdmin from '../components/admin/sidebarAdmin'

const LayoutAdmin = () => {
  return (
    <div className='flex h-screen'>
    <SidebarAdmin />
    <div className='flex-1 flex flex-col'>

    
    <HeaderAdmin />
    <hr/>
    <Outlet />
    </div>
    </div>
  )
}

export default LayoutAdmin