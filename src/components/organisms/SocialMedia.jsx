import React from 'react'
import {Github,Linkedin,Instagram,Mail} from "lucide-react"

const SocialMedia = () => {
  return (
    <div className='sm:h-[320px] sm:w-[100px] flex flex-col items-center absolute left-[25px] sm:left-[30px] md:left-[40px] lg:left-[80px] xl:left-[120px] bottom-[0px] md:bottom-[-30px] z-[60]'>
        <a className='mb-2 sm:mb-5 c-pointer' href='https://github.com/Prasanna0218'><Github className='text-white w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px]'/></a>
        <a className='mb-2 sm:mb-5 c-pointer' href='#'><Linkedin className='text-white w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px]'/></a>
        <a className='mb-2 sm:mb-5 c-pointer' href='#'><Instagram className='text-white w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px]'/></a>
        <a className='mb-2 sm:mb-5 c-pointer' href='#'><Mail className='text-white w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px]'/></a>
        <a className='mb-2 sm:mb-5 c-pointer' href='#'><img src="./Prasanna_medium.png" alt="medium-blogs" className='w-[18px] h-[18px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px]'/></a>
        <div className='h-[60px] w-[2px] bg-white'></div>
    </div>
  )
}

export default SocialMedia