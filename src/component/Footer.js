import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="rightSide">
          <div>
            <Icon.GeoAlt style={{ marginRight: '2rem' }} />
            <span>Pune,Maharashtra,India</span>
          </div>
          <div>
            <Icon.TelephoneFill style={{ marginRight: '2rem' }} />
            <span>+91-876-789-2161</span>
          </div>
          <div>
            <Icon.EnvelopeFill style={{ marginRight: '2rem' }} />
            <span>sukeshinibavge123@gmail.com</span>
          </div>
        </div>
        <div className="leftSide">
          <h3>Let me know on..</h3>

          <div className="icons">
            <Icon.Instagram style={{ marginRight: '16px' }} />
            <Icon.Linkedin style={{ marginRight: '16px' }} />
            <Icon.Twitter style={{ marginRight: '16px' }} />
            <Icon.Github style={{ marginRight: '16px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
