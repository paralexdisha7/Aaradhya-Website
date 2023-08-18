import React from 'react';
import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Nav.css'
import Social from '../social/Social';
export const Nav = () => {
    const[menuOpen,setMenuOpen]=useState(false)
    
  return (
    <nav >
        <Link to={"/"} className='nav-logo'>
        <img src="images\logo.png" alt="Logo" />
        </Link>
        <div className="menu" onClick={()=>
        setMenuOpen(!menuOpen) } >
            <span></span>
            <span></span>
            <span></span>
            <span><p>menu</p></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/services"}>Services</NavLink></li>
            <li><NavLink to={"/photos"}>Photos</NavLink></li>
            <li><NavLink to={"/nearby"}>Nearby</NavLink></li>
            <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
            <li className='social'><Social/></li>
        </ul>
    </nav>
  )
}
export default Nav;