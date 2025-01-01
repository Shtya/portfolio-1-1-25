'use client'
import React , {useEffect , useState}    from   'react'
import Nav      from   "@/components/Nav";
import Whats    from   "@/components/Whats";
import Hero2    from   "@/components/Hero2";
import About    from   "@/components/Aboutus"
import Services from   "@/components/Services";
import Skills   from   "@/components/Skills";
import Projects from   "@/components/Projects";
import Process  from   "@/components/Process";
import Testimonials from '@/components/Testimonials' 
import Contact  from   "@/components/Contact";
import Footer   from   "@/components/Footer"
import Preload from '@/components/Preload';
import Gallery from '@/components/Gallery';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Home = () => {
  

  useEffect(() => {
		AOS.init({
			offset: 0,
		  duration: 1000, 
		  easing: 'ease-in-out', 
		  once: true, 
		});
	  }, []);


        
  
  return (
    <main className="" >
        {/* <Preload /> */}
        {/* <Projects /> */}
        <Nav />
        <Whats />
        <Hero2 />
        <About  />
        <Services />
        <Skills />
        <Gallery />
        <Process />
        <Testimonials />
        <Contact />
        <Footer /> 
        
    </main>
  )
}

export default Home







