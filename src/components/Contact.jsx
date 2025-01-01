'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import Img from "@/assets/forest.jpeg"


const Contact = () => {
const [Status , setStatus] = useState(false) 

const handleSubmit = async (e) => {
  e.preventDefault();
  let name = e.target[0].value
  let phone = e.target[1].value
  let email = e.target[2].value
  let message = e.target[3].value

  const res = await fetch('/api/sendEmail' , {
    method:"POST" , 
    headers:{ 'content-type' : "application/json" },
    body : JSON.stringify({name , email , phone , message})
  })
  
  await res.json().then(e => setStatus(true)) 

  setTimeout(() => {
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = ''
    e.target[3].value = ''
    setStatus(false)
  }, 4000);
};


return (
  <div className=' relative min-h-screen py-[60px] flex justify-center items-center ' id='contact'>
    <Image data-aos="slide-left" className="absolute right-0 h-full opacity-80 w-[500px] object-cover " src={Img} width={400} height={600} alt="" />
    <div data-aos="slide-left" className="absolute right-0 h-full w-[500px] bg-black bg-opacity-60  " />
    
    <div className="container grid grid-cols-2 max-md:grid-cols-1  gap-[100px] z-[10] ">
      <div className=" box py-[20px] ">
        <h1 data-aos="slide-right" className="!mr-auto text-left w-full " >Contact me  </h1>
        <p data-aos="slide-right" className='p mb-[50px] '>contact me for more information and get notified when i publich something new .</p>
        
        <div data-aos="slide-right" className="flex flex-col pb-[5px] pt-[20px]  border-b-[1px] border-b-[#cdcdcd] ">  
          <div className="flex items-center gap-[10px] capitalize text-[#fafafa] text-[18px] " >  <i className=' text-primary text-[25px]  bx bx-home' ></i>      Office </div>
          <span className="text-[25px] pl-[30px] " >22 Abour - North-Sina - Egypt</span> 
        </div>

        <div data-aos="slide-right" className="flex flex-col pb-[5px] pt-[20px]  border-b-[1px] border-b-[#cdcdcd] ">  
          <div className="flex items-center gap-[10px] capitalize text-[#fafafa] text-[18px] " >  <i className=' text-primary text-[25px]  bx bx-envelope' ></i>  Email </div>
          <span className="text-[25px] pl-[30px] " > shtya54@gmail.com </span>           
        </div>

        <div data-aos="slide-right" className="flex flex-col pb-[5px] pt-[20px]  border-b-[1px] border-b-[#cdcdcd] ">  
          <div className="flex items-center gap-[10px] capitalize text-[#fafafa] text-[18px] " >  <i className=' text-primary text-[25px]  bx bx-phone-call' ></i>Phone </div>
          <span className="text-[25px] pl-[30px] " > 01551495772 </span>                 
        </div>

        <div data-aos="slide-right" className="flex flex-col pb-[5px] pt-[20px]  border-b-[1px] border-b-[#cdcdcd] ">  
          <div className="flex items-center gap-[10px] capitalize text-[#fafafa] text-[18px] " >  <i className=' text-primary text-[25px]  bx bxl-whatsapp' ></i> whatsapp </div>
          <span className="text-[25px] pl-[30px] " > 01551495772 </span>                 
        </div>

      </div>
      

      <form data-aos="slide-left" className="flex max-md:max-w-full max-w-[500px] w-full  flex-col gap-[20px] p-[30px] bg-white text-black " method='POST' onSubmit={handleSubmit} >
        <div className="text-[30px] font-[600] "> Send Message </div>
        <input  className="border-[1px] border-[#cdcdcd] bg-[#fafafa] !text-black px-[10px] py-[5px]  " name='name' type="text"  placeholder='name' />
        <input  className="border-[1px] border-[#cdcdcd] bg-[#fafafa] !text-black px-[10px] py-[5px]  " name='phone' type='tel'  placeholder='Your E-mail' />
        <input  className="border-[1px] border-[#cdcdcd] bg-[#fafafa] !text-black px-[10px] py-[5px]  " name='email' type="email"  placeholder='Email Address' />
        <textarea className="border-[1px] border-[#cdcdcd] bg-[#fafafa] !text-black px-[10px] py-[5px] min-h-[100px]  " name='text'   placeholder='Message' />
        <input  type="submit" value="Send Message" className="cursor-pointer "  />
      </form>
    </div>
  </div>

  )
}

export default Contact
