import React from 'react'
import '../styles/Skills.css'

export const Skills = () => {
  return (
    <div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, BootStrap, MaterialUI, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Es6</span>
          </li>
        </ol>
      </div>
    </div>
  )
}
