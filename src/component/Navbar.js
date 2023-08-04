import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import * as Icon from 'react-bootstrap-icons'

export const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className="navbar">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>

      <ul className={click ? 'navMenu active' : 'navMenu'}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/project">PROJECT</Link>
        </li>
        <li>
          <Link to="/experience">EXPERIENCE</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className="iconItem" onClick={handleClick}>
        {click ? (
          <Icon.XLg size={30} style={{ color: 'white' }} />
        ) : (
          <Icon.Justify size={30} style={{ color: 'white' }} />
        )}
      </div>
    </div>
  )
}
