import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Display.css'
import Banner from '../assests/img1.png'

export const Display = () => {
  return (
    <div className="display">
      <div className="mask">
        <img src={Banner} alt=""></img>
      </div>
      <div className="content">
        <h1>Hey, I'm Sukeshini Bavge</h1>
        <p>A frontend developer with passion for creating and learning</p>
        <div className="btn">
          <Link to="/project">
            <button className="btn1">Project</button>
          </Link>
          <Link to="/contact">
            <button className="btn2">contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
