import React, { useState } from 'react'
import './Header.css'
import logo from '../assets/images/logo.svg'
import menuIcon from '../assets/images/icon-menu.svg'
import closeIcon from '../assets/images/icon-menu-close.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <header className='header'>
      <a href="#"><img src={logo} alt="logo" /></a>
      
      {/* Hamburger Butonu: Sadece mobilde CSS ile görünecek */}
      <button className="menu-toggle" onClick={() => setIsMenuOpen(true)}>
        <img src={menuIcon} alt="open menu" />
      </button>

      <nav className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
        {/* Karartma: Sadece mobilde görünür */}
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
        
        <ul className='nav-list'>
          {/* Mobil Kapatma Butonu: Sadece menü içindeyken mobilde görünür */}
          <li className="mobile-close-btn">
             <button onClick={() => setIsMenuOpen(false)}>
                <img src={closeIcon} alt="close menu" />
             </button>
          </li>

          {navLinks.map((e)=>(
            <li key={e} className='nav-item'>
              <a href="#">{e}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header