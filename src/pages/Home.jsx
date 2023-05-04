import React from 'react'
import style from "./home.module.css"
import Navbar from '../navbar/Navbar'

const Home = () => {
  return (
    <div id={style.homecontainer}>
      <Navbar/>
    </div>
  )
}

export default Home