import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminMainBar from './AdminMainBar'
import style from "./admin.module.css"


const AdminDashBoard = () => {
  return (
    <div id={style.admindashboard}>
      <AdminSidebar/>
      <AdminMainBar/>
    </div>
  )
}

export default AdminDashBoard