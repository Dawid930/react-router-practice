import React from 'react'
import { Link } from "react-router-dom"; //path kezeleshez kell

function Header() {
  return (
    <header>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </header>

  )
}

export default Header