'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Logo from '@/assets/fav.png'
import Image from "next/image";


const Nav = () => {


    useEffect(() => {
        AOS.init({
          delay: 50,
          offset: -10 ,
          duration: 700,
          easing: 'ease-in-out', 
        //   once:true 
        });
        AOS.refresh();
      }, [])
      
      useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('nav');
            const logo = document.querySelector('nav .logo');
            const container = document.querySelector('nav .container');

            if (window.scrollY > 0) {
                container.style.height = '70px';  
                navbar.style.background = "#222"               
                logo.style.height = '80px';
                logo.style.clipPath = 'unset';
            } else {
                container.style.height = '100px'; 
                navbar.style.background = "unset"               
                logo.style.height = '100px';
                logo.style.clipPath = 'unset';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 


    useEffect(_=> {
        let li = document.querySelectorAll("nav ul li")
        let ul = document.querySelector("nav .ul");
        let menu = document.querySelector("nav .menu");
        let container = document.querySelector("nav .container");

        li.forEach(ele=> {
            ele.addEventListener("click" , e=> {
                ul.classList.remove("show-ul");
            container.classList.remove("w-100");
            menu.classList.remove("bx-x");
            })
        })
    } ,[])


    const showHandle = ()=>{
        let menu = document.querySelector("nav .menu");
        let container = document.querySelector("nav .container");
        let ul = document.querySelector("nav .ul");

            ul.classList.toggle("show-ul");
            container.classList.toggle("w-100");
            menu.classList.toggle("bx-x");
    }

    return (
        <nav>
            <div className="container">
                <a data-aos="fade-right" href="/" className='logo'>  <Image className="!w-[80px]"  src={Logo} alt="" />  </a>
                <i className='bx bx-menu menu' onClick={showHandle}></i>
                <ul className="ul"  >

                    <li data-aos="fade-left" data-aos-delay="100"><a href="#hero">Home</a></li>
                    <li data-aos="fade-left" data-aos-delay="200"><a href="#services">Services</a></li>
                    <li data-aos="fade-left" data-aos-delay="200"><a href="#skills"> Skills </a></li>
                    <li data-aos="fade-left" data-aos-delay="400"><a href="#projects">projects</a></li>
                    <li data-aos="fade-left" data-aos-delay="300"><a href="#contact">Contact Us</a></li>
                    

                    <div className="social" >
                        <a data-aos="fade-left" data-aos-delay="500" target='_blank' href="https://github.com/Shtya" > <i className='bx bxl-github' ></i> </a>
                        <a data-aos="fade-left" data-aos-delay="600" target='_blank' href="https://www.facebook.com/profile.php?id=100008364883535" > <i  className='bx bxl-facebook'></i> </a>
                        <a data-aos="fade-left" data-aos-delay="700" target='_blank' href="https://www.linkedin.com/in/ahmed-abdelrhman-78bb18230/" > <i  className='bx bxl-linkedin' ></i> </a>
                    </div>

                </ul>
            </div>
        </nav>
    );
}

export default Nav;
