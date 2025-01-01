"use client"
import React, { useState } from 'react' ;
import Data from "@/ProjectsData" ;
import Image from 'next/image';
import Link from 'next/link';
import dots from '@/assets/dots.png'


const Projects = () => {
  const [current , setCurrent] = useState("all")
  const [data , setdata] = useState(Data)
  
  let btn = [
    {name:'all'   ,  type:"all"},
    {name:"javaScript"    ,  type:"javaScript"},
    {name:"React.Js"      ,  type:"React.js"},
    {name:"Next.Js"       ,  type:"next"},
    {name:"Node & Express",  type:"Node"} ,
    {name:"Shopify",  type:"shopify"} ,
    {name:"WordPress",  type:"wordpress"} ,
    {name:"Laravel",  type:"laravel"} ]

    const handleHeader = (ele)=>{
      setCurrent(ele.name)
      setdata(Data.filter(e => e.type.includes(ele.type )))
    }

  return (
    <section  id="projects" style={{backgroundImage:`url('${dots.src}')`}}>
      <div className="container">
      <h1> My Projects </h1>
      <p> Check out my latest projects </p>

      <div className='header'>
        {btn.map((e,idx)=>(  <h4  onClick={_=>handleHeader(e)}  className={current == e.name? "active" : ""}  key={idx}>{e.name == 'all' ? <i className='bx bxs-heart'></i>  : e.name}  </h4> ))}
      </div>
      
      <section> {
          data?.map((e,idx)=>(
            <div  className="card" key={idx}>
                <div className="img-wrap"><Image src={e.img} alt="" /></div>
                <h2 className='h2'>{e.title}</h2>
                  <Link target='_blank' href={e.visit} > <i className='bx bx-show-alt'></i> </Link>
              </div>
          )) }
        
      </section>
      </div>
    </section>
  )
}

export default Projects