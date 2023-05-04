import React from 'react'
import {Link} from "react-router-dom"
import style  from "./admin.module.css"


const AdminSidebar = () => {
  return (
    <div id={style.sidebarcontainer}>
        <h2>Admin Dashboard</h2>
        <div id={style.sidebarlist}>
        <ul>
            <li><Link to="/admindashboard/academymanagerregister"><span>Add Acadamy Manager</span></Link></li>
            <li><Link to="/admindashboard/viewacademymanager"><span>View academy manager</span></Link></li>
            <li><Link to="/admindashboard/viewacademytable"><span>View acadamy</span></Link></li>
            <li><Link to="/admindashboard/viewbranch"><span>View Branch</span></Link></li>
            <li><Link to="/admindashboard"><span>View Course</span></Link></li>
            <li><Link to="/"><span>Home</span></Link></li>
        </ul>
        </div>
    </div>
  )
}

export default AdminSidebar