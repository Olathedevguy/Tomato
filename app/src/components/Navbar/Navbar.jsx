/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import  './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

    const [menu, setMenu] =  useState("home")

  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo' alt="" />
      <ul className='navbar-menu'>
        <li className={menu === 'home' ? 'active' : ''} onClick={()=>setMenu("home")} ><a>Home</a></li>
        <li className={menu === 'menu' ? 'active' : ''} onClick={()=>setMenu("menu")}><a>Menu</a></li>
        <li className={menu === 'mobile-app' ? 'active' : ''} onClick={()=>setMenu("mobile-app")}><a>Mobile App</a></li>
        <li className={menu === 'contact-us' ? 'active' : ''} onClick={()=>setMenu("contact-us")}><a>Contact Us</a></li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
