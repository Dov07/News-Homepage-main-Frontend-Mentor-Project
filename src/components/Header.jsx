import React from 'react'
import './Header.css'
import logo from '../assets/images/logo.svg'
const Header = () => {

  const navLinks = ["Home", "New" , "Popular" ,"Trending" ,"Categories"]
  return (
    <div className='header'>
        <a href="#"><img src={logo} alt="logo" /></a>
       <nav >
        <ul className='nav-list'>
        {navLinks.map((e)=>(
          <li  key={e} className='nav-item' >
            <a href="#">{e}</a>
          </li>
        ))}
        </ul>
       </nav>
    </div>
  )
}

export default Header