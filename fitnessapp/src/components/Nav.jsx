import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
      <nav className='nav'>
        <Link to='/' activeStyle className='link'>
            Home
        </Link>
        <Link to='./Pages/about' activeStyle className='link'>
            About
        </Link>
        <Link to='./Pages/Login' activeStyle className='link'>
            Login
        </Link>
      </nav>
    
)
};

export default Nav
