'use client'
import Link from 'next/link'
import React from 'react'
import dots from '@/assets/dots.png'
const Footer = () => {
  const routes = ["about" , "articles" , "projects" , "speaking" , "contact"]

  return (
    <footer id='footer' style={{backgroundImage:`url('${dots.src}')`}}>
        <div className='container'>
        <ul>
            <h3 > Portfolio  </h3>
            <p >Where Your Success is my Priority</p>
            <ul  >
                <a data-aos="fade-left"  target='_blank' href="https://github.com/Shtya" > <i className='bx bxl-github' ></i> </a>
                <a data-aos="fade-left"  target='_blank' href="https://www.facebook.com/profile.php?id=100008364883535" > <i  className='bx bxl-facebook'></i> </a>
                <a data-aos="fade-left"  target='_blank' href="https://www.linkedin.com/in/ahmed-abdelrhman-78bb18230/" > <i  className='bx bxl-linkedin' ></i> </a>
            </ul>
        </ul>

        <ul>
            <h3 > Navigation</h3>
            <a  href="#hero"> Home </a>
            <a  href="#contact"> contact us </a>
            <a  href="#about"> about us </a>
            <a  href="#services"> services </a>
        </ul>

        <ul>
            <h3  > Quick Link</h3>
            <a href="#projects"> projects </a>
            <a href="#skills"> Skills </a>
            <a href="#test"> Testimonials </a>
            <a href="#process"> process </a>
        </ul>

        <ul>
            <h3 >Information</h3>
            <li > <i className='bx bxs-envelope' ></i> <span style={{textTransform:'lowercase' }}> shtya54@gmail.com </span> </li>
            <li > <i className='bx bxs-phone' ></i> <span> +201551495772 </span> </li>
            <li > <i className='bx bxl-whatsapp' ></i> <span> +201551495772 </span> </li>
            <li > <i className='bx bxs-business'></i>  <span> North-Sina Egypt </span> </li>
        </ul>


    </div>
        <div className="last">
        <p>&copy; 2024 SHTYA. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer