import React from 'react'
import { Outlet } from 'react-router-dom'
import style from "./admin.module.css"

const AdminMainBar = () => {
  return (
    <div id={style.adminmainbar}>
      <Outlet/>
    </div>
  )
}

export default AdminMainBar