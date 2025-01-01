'use client' 
import React , {useEffect, useState} from 'react'
import dots from '@/assets/dots.png'
const Preload = () => {
    const [disappear , setdisappear] = useState(true)

    useEffect(_=> {
        setTimeout(() => {
            setdisappear(false)
        }, 3000);
    } ,[])




  return (
    <div className={`preload ${disappear ? '' : 'disappear'}`} style={{ backgroundImage: `url("${dots.src}")` }} >

        <div className="device">
            <div className="device__a">
                <div className="device__a-1"></div>
                <div className="device__a-2"></div>
            </div>
            <div className="device__b"></div>
            <div className="device__c"></div>
            <div className="device__d"></div>
            <div className="device__e"></div>
            <div className="device__f"></div>
            <div className="device__g"></div>
        </div>

        
        {/* <div className="loading">
            <div className="icons">
            <i className='bx bxs-chevron-left'></i>
            <span>welcome</span>
            <i className='bx bxs-chevron-right'></i>
            </div>
        </div> */}



    </div>
  )
}

export default Preload