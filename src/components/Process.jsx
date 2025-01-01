'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// Understand Your Requirements
// UX & UI Design
// Website Development
// Testing
// Site Launch
// Website Maintenance



const Process = () => {
  var settings = {
      dots: true,
      slidesToScroll: 1 ,
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      autoplay: false,
      // speed: 7000,
      // autoplaySpeed: 7000,
      lazyload: true,
      pauseOnHover: false ,
      adaptiveHeight: true,
      responsive: [
          {
            breakpoint: 4000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
      ]
    }; 
  
  const data = [
      {h1:'Understand Your Requirements' ,p:"We begin by thoroughly understanding your specific needs, goals, and vision for your website. This initial step is crucial in tailoring our services to your unique business." },
      {h1:'UX & UI Design' ,p:"We have a meticulous UX & UI design process. We start with comprehensive user research, create wireframes and prototypes, and design visually stunning interfaces that align with your brand identity and business goals." },
      {h1:'Website Development' ,p:"Our skilled developers bring the design concepts to life by coding and building your website. We focus on responsive design, user-friendly navigation, and seamless functionality." },
      {h1:'Testing' ,p:"Before launch, we conduct comprehensive testing to identify and resolve any issues. This includes functionality testing, compatibility testing, and performance optimization." },
      {h1:'Site Launch' ,p:"Once we're confident in the website's quality and functionality, we launch it, making it accessible to your audience." },
      {h1:'Website Maintenance' ,p:"Our commitment doesn't end with the launch. We provide ongoing website maintenance to ensure it remains up-to-date, secure, and performing at its best." },
  ]
  return (
    <div className='Process min-h-[80vh] flex items-center justify-center' id='process'>
        <div className="container">
            <h1>Process</h1>

            <Slider {...settings} data-aos='zoom-in' >
                {data.map((e,index)=>(
                    <div className="box" key={index}>
                        <div className="num"> <span> {index + 1} </span> <i className='bx bx-right-arrow-alt'></i> </div>
                        <h3> {e.h1} </h3>
                        <p> {e.p} </p>
                    </div>
                ))}
            </Slider>

        </div>
    </div>
  )
}

export default Process
