import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
      <nav>
          <Link to='./Pages/about' activeStyle>
            About
          </Link>
          <Link to='./Pages/Login' activeStyle>
            Login
          </Link>
          </nav>
    
)
};

export default Nav
