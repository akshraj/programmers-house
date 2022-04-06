import React from 'react'
import './Navbar.css';
import Emoji from '../../assets/emoji.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="container navbar">
      <Link to="/">
          <img src={Emoji} alt="emoji" className='navbar-logo-img' />
          <span className="navbar-logo-title">Codershouse</span>
      </Link>
    </nav>
  )
}

export default Navbar