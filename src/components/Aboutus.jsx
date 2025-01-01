'use client'
import React from 'react'
import Image from 'next/image'
import Img from '@/assets/me.jpg'




const About = () => {
  return (
    <div className='about min-h-screen flex items-center justify-center  ' id='about'  >
      <div className="container !px-[10px] ">
        <div data-aos='slide-right' > <div className="img aspect-square " > <Image src={Img} alt=""  /> </div> </div>
        <div className="box"  >
          <h1 data-aos='slide-left' className="sm:w-full mx-auto sm:mr-auto sm:text-left mb-[30px] " > about me</h1>
          <p data-aos='slide-left' >I am a software developer with 6+ years of experience, including 4 years in frontend and backend development and 2 years as a Senior Full Stack Developer. I have a strong grasp of the software development lifecycle and a track record of delivering scalable, high-performance projects.</p>
          <div className="groub-btn" data-aos='slide-left'>
            <a href='#contact'   className="btn"> Hire me </a>
            <a href="cv.pdf" target='_blank' download  className="btn"> download CV </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About