import React from 'react'
import BgParticles from '../animations/BgParticles'
import TextCarousel from '../organisms/TextCarousel'
import Navbar from "../organisms/Navbar"
import SocialMedia from '../organisms/SocialMedia'

const Home = () => {
  return (
    <div className='h-screen w-[100%] darkbg' id='home'>
        <Navbar/>
        <BgParticles id="particles"/>
        <TextCarousel/>
        {/* <SocialMedia /> */}
    </div>
  )
}

export default Home