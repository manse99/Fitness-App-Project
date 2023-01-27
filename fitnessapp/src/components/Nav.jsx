import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
      <nav className='nav'>
        <Link to='/' className='link'>
            Home
        </Link>
        <Link to='./Pages/about' className='link'>
            About
        </Link>
        <a className='link' href='https://nutrilogx.netlify.app/' target='_blank'>
            <div>NutrilLog</div>
        </a>
        <p className='title'>ReposFit</p>
        <Link to='./Pages/Add-Exercise-Record' className='link'>
            Add Exercise Record
        </Link>
      </nav>
    
)
};

export default Nav
