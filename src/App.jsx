import React from 'react'
import "./index.css"
import Home from './components/templates/Home'
import Projects from './components/templates/Projects'
import AboutMe from './components/templates/AboutMe'
import Skills from './components/templates/Skills'
import ContactUs from './components/templates/ContactUs'
import SocialMedia from './components/organisms/SocialMedia'

const App = () => {
  return (
    <div className='bg-red-200 text-blue-500'>
      <Home/>
      <Skills/>
      {/* <AboutMe/>
      <Projects/>
      <ContactUs/> */}
    </div>
  )
}

export default App