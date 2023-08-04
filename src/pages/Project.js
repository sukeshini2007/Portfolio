import React from 'react'
import '../styles/Projects.css'

export const Project = () => {
  return (
    <div className="projectList">
      <h1>Projects</h1>
      <ol>
        <li>
          Portfolio
          <a href="">Click Here</a>
          
        </li>
        <li>
          Quize App
          <a href="https://github.com/sukeshini2007/QuizeApp">Click Here</a>
        </li>
        <li>
          Investment App
          <a href="https://github.com/sukeshini2007/InvestmentApp">
            Click Here
          </a>
        </li>
        <li>
          FoodOrder App
          <a href="https://github.com/sukeshini2007/FoodOrderApp">Click Here</a>
        </li>
        <li>
          Todo List
          <a href="https://github.com/sukeshini2007/TODO-APP">Click Here</a>
        </li>
      </ol>
    </div>
  )
}
