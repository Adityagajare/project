import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
import style from "./_navbar.module.css"

const Navbar = () => {
  return (
    <section id={style.navbar}>
        <article>
            <Logo/>
            <Menu/>
        </article>
    </section>
  )
}

export default Navbar