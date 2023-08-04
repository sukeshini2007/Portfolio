import React from 'react'

import { Display } from '../component/Display'
import { Skills } from '../component/Skills'
import '../styles/Home.css'

export const Home = () => {
  return (
    <div className="homePage">
      <Display />
      <Skills />
    </div>
  )
}
