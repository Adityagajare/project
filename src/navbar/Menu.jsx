import React from 'react'
import style from "./_navbar.module.css"
import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {
  let navigate = useNavigate()

  let role= window.localStorage.getItem("role")
  let token= window.localStorage.getItem("token")
  console.log(role);

  let handleToken=()=>{
    // window.localStorage.removeItem("role")
    // window.localStorage.removeItem("token")
    window.localStorage.clear()
    navigate("/login")
  }
  return (
    <section id={style.menulist}>
        <article>
            <ul>
                {
                  token ?
                  <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li>
                      <Link to="/admindashboard">{role==="ROLE_ADMIN" ? "AdminDashboard":null}</Link>
                    </li>
                    <li onClick={handleToken}><Link to="/login">Logout</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </>
                  :
                  <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </>
                }
            </ul>
        </article>
    </section>
  )
}

export default Menu