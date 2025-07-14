'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Img1 from '@/assets/icon/1.webp'
import Img2 from '@/assets/icon/2.webp'
import Img3 from '@/assets/icon/3.webp'
import Image from 'next/image';
import dots from '@/assets/dots.png'


const Testimonials = () => {
  
  var settings = {
      dots: false,
      slidesToScroll: 1 ,
      infinite: true,
      slidesToShow: 1,
      arrows: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 7000,
      lazyload: true,
      pauseOnHover: false ,
      adaptiveHeight: true,
      responsive: [
          {
            breakpoint: 4000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
      {img : Img3 , h1:"hamza"             , p:  "Ahmed Abdelrhman has helped my team and I stay on the same page. Previously, we were all over the board. working with Ahmed Abdelrhman has definitely saved us time and money."      },
      {img : Img1 , h1 :"Eslam Abd Elazeem" , p:"Working with Ahmed Abdelrhman was a pleasure. Their expertise in both front-end and back-end development allowed us to create a seamless user experience for our project. Their attention to detail and problem-solving skills were invaluable."},
      {img : Img2 , h1 :"Mohamed Kamal"     , p:"I had the pleasure of collaborating with Ahmed Abdelrhman on a complex web application. Their ability to quickly grasp new concepts and technologies, coupled with their efficient coding practices, made them an indispensable member of our development team."},
      {img : Img3 , h1 :"Islam Abdel Radi"  , p:"As a full-stack developer, Ahmed Abdelrhman brought a wealth of knowledge and experience to our project. Their dedication to delivering high-quality code and meeting project deadlines was evident throughout our collaboration. I highly recommend Ahmed Abdelrhman for any web development project."},
      {img : Img1 , h1 :"KAREEM EL3SAWY"    , p:"I had the pleasure of working with Ahmed Abdelrhman on several projects, and I have always been impressed by their technical skills and professionalism. Their ability to architect scalable and robust solutions, coupled with their excellent communication skills, makes them an asset to any development team."},
      {img : Img2 , h1 :"Omar Fathy"        , p:"I cannot recommend Ahmed Abdelrhman highly enough. Their expertise in both front-end and back-end development, combined with their strong problem-solving skills, allowed us to overcome numerous challenges and deliver a successful project on time and within budget."},
      {img : Img3 , h1 :"hamza"             , p:"Working with Ahmed Abdelrhman was a fantastic experience. Their deep understanding of web technologies and their ability to write clean, maintainable code made them an invaluable member of our team. I look forward to collaborating with Ahmed Abdelrhman on future projects."},
      {img : Img1 , h1 :"Islam Hamza"       , p:"I had the pleasure of working closely with Ahmed Abdelrhman on a complex e-commerce platform. Their technical proficiency and attention to detail were instrumental in delivering a high-quality product that exceeded our client's expectations. I would not hesitate to work with [Your Name] again in the future."},
    ]

  return (
    <div className='Testimonials min-h-[90vh] flex items-center justify-center' id='test' style={{backgroundImage:`url('${dots.src}')`}} >
        <div className="container">
            <h1>Testimonials</h1>

            <Slider {...settings} data-aos='zoom-in' >
                {
                data.map((e , index )=>(
                        <div className="box"  key={index} >
                            <Image src={e.img} alt="" />
                            <h3> {e.h1} </h3>
                            <div className="start"> <i className='bx bxs-star' ></i> <i className='bx bxs-star' ></i> <i className='bx bxs-star' ></i> <i className='bx bxs-star' ></i> <i className='bx bxs-star' ></i> </div>
                            <p> {e.p} </p>
                        </div>
                ))
                }
            </Slider>

        </div>
    </div>
  )
}

export default Testimonials