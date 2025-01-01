import React from 'react'
import img1 from '@/assets/icon/11.png'
import img2 from '@/assets/icon/22.png'
import img3 from '@/assets/icon/33.png'
import img4 from '@/assets/icon/55.png'
import img5 from '@/assets/icon/66.png'
import Image from 'next/image'
import dots from '@/assets/dots.png'

import bg1 from '@/assets/services/1.jpg'
import bg2 from '@/assets/services/2.jpg'
import bg3 from '@/assets/services/3.jpg'
import bg4 from '@/assets/services/4.jpg'
import bg5 from '@/assets/services/5.jpg'



const Services = () => {
    const serv = [
        { img : img3 , bg: bg1 , name:"front-end" , list:['Next js' ,'React js' , 'JavaScript' , 'Blade' , 'BootStrap'] },
        { img : img2 , bg: bg2 , name:"back-end" , list:[ 'node js' , 'Express js' , 'nest js' , 'php' , 'laravel'] },
        { img : img5 , bg: bg3 , name:"seo" , list:['SEMrush' , 'screaming Frog' , 'write articles' , 'search console'] },
        { img : img1 , bg: bg4 , name:"DataBase" , list:['mySql' , 'mongodb'] },
        { img : img4 , bg: bg5 , name:"other" , list:['shopify' , 'wordpress' , 'landing'] },
    ]
  return (
    <div className='Services' id='services' style={{backgroundImage:`url('${dots.src}')`}} >
        <div className="container">
            <h1 data-aos='fade-up' > Services </h1>
            <div className="boxes ">
                
                {serv.map((e,index)=>(
                    <div className="box mb-[20px] " style={{backgroundImage:`url('${e.bg.src}')`}}  key={index} data-aos='zoom-in-down' data-aos-delay={`${index}00`}>
                        <Image src={e.img} alt={e.name} />
                        <span> {e.name} </span>
                        <ul>
                            {e.list.map((ele,idx)=>( <li key={idx}> {ele} </li> ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services