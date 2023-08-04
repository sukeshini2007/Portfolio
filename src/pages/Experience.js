import React from 'react'
import '../styles/Experience.css'
import * as Icon from 'react-bootstrap-icons'

export const Experience = () => {
  return (
    <div className="headContainer">
      <h1>My Experience</h1>
      <div>
        <div>
          <h2>FrontEnd Technology</h2>
          <article>
            <h4>
              <Icon.PatchCheckFill size={10} style={{ color: 'white' }} /> HTML
            </h4>

            <small style={{ color: 'white' }}>Experienced</small>
          </article>
          <article>
            <h4>
              <Icon.PatchCheckFill size={10} style={{ color: 'white' }} />
              CSS
            </h4>
            <small style={{ color: 'white' }}>Intermediate</small>
          </article>
          <article>
            <h4>
              <Icon.PatchCheckFill size={10} style={{ color: 'white' }} />
              JavaScript
            </h4>
            <small style={{ color: 'white' }}>Frehser</small>
          </article>
          <article>
            <h4>
              {' '}
              <Icon.PatchCheckFill size={10} style={{ color: 'white' }} />
              ReactJs
            </h4>
            <small style={{ color: 'white' }}>Fresher</small>
          </article>
        </div>
      </div>
    </div>
  )
}
