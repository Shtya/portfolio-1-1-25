'use client';
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import dots from '@/assets/dots.png'
import Link from 'next/link';


export default function Gallery() {
    const supabase = createClient('https://ktgjwbyaplnvspfwsvno.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0Z2p3YnlhcGxudnNwZndzdm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2MjUxODgsImV4cCI6MjA1MTIwMTE4OH0.rXAwCi8jPX4s8CiSD2iSxMyni06tdJQk8eYOpkOecqI');
    const [projects, setProjects] = useState([]);
    const [loading, setisLoading] = useState(true);

    useEffect(() => {
        (async function getProjects() {
            setisLoading(true);
            await supabase
                .from('projects')
                .select('*')
                .order('id', { ascending: true })
                .then(res => {
                    setProjects(res.data);
                    settemp(res.data);
                });
            setisLoading(false);
        })();
    }, []);

    const tabs = [
        { name: 'All', value: 'all' },
        { name: 'Front end', value: 'front' },
        { name: 'Back end', value: 'back' },
        { name: 'shopify', value: 'shopify' },
    ];

    const [filter, setFilter] = useState('all');
    const [length, setlength] = useState(9);

    const [temp, settemp] = useState();
	const [effect , seteffect ] = useState("zoom-in-down")

    const handleFilter = tab => {
		settemp(null)
		setTimeout(() => {
			setFilter(tab);
			if (tab === 'all') {
				settemp(projects);
			} else {
				settemp(projects.filter(e => e.type.includes(tab)));
			}
			
		}, 0);
    };

    return (
        <div id="projects" className='py-[80px]' style={{backgroundImage:`url('${dots.src}')`}}>
            <div className='container px-[20px] '>
                <div className='my-4'>
                    <h1 >My Projects</h1>
					<p className='text-center mb-[30px] mx-auto ' > Check out my latest projects </p>

                    <div className='flex max-sm:grid max-sm:grid-cols-2 mb-[50px] border-b-primary border-t-primary border-t-[1px] border-b-[1px] text-white w-fit py-[10px] px-[15px] gap-[10px] rounded-[40px] mx-auto'>
                        {tabs.map(tab => (
                            <button key={tab.value} onClick={() => handleFilter(tab.value)} className={`after after:bg-white after:left-0 after:top-[-100%] hover:after:top-0 hover:after:bg-gradient-to-b  from-primary to-white after:z-[-1] z-[1] overflow-hidden relative capitalize px-4 py-[6px] rounded-[30px] text-[18px] hover:text-black duration-300 font-[500] ${filter === tab.value ? 'bg-gradient-to-b text-black' : ''}`}>
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='rows grid grid-cols-3 gap-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1 '>
                    {loading
                        ? Array.from({ length: 9 }).map((_, i) => <div key={i} className='relative shadow-sm shadow-gray-100 h-[300px] cursor-pointer border-white border-[1px] overflow-hidden group bg-gray-300 animate-pulse'></div>)
                        : temp?.slice(0, length)?.map((e, i) => (
							<div data-aos="zoom-in-down" > 
                              <div  key={i} className='relative group  h-[300px] cursor-pointer border-[#000] border-double border-[2px] overflow-hidden '>
								  <Image
										className={`h-full w-full object-cover object-top hover:object-bottom`}
										src={e.img}
										alt={e.name}
										width={300}
										height={200}
										onLoadingComplete={(img) => {
											const realHeight = img.naturalHeight;
											const animationSpeed = Math.max(realHeight / 300, 1); // Ensure a minimum speed
											document.documentElement.style.setProperty(
											`--animation-duration-${i}`,
											`${animationSpeed}s`
											);
										}}
										style={{
											transition: `var(--animation-duration-${i}, 1s) ease-in-out`,
										}}
										/>
									<span  className=' pointer-events-none absolute inset-0 w-full h-full bg-black bg-opacity-10'></span>
									<Link target="_blank" href={e.visite} className={` opacity-0 rounded-[50px] pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-300 transition-all border-t-primary border-b-primary border-t-[1px] border-b-[1px]  flex items-center justify-between absolute w-[96%] mb-[6px]  h-fit bottom-0 left-[2%] bg-black px-[20px] p-[10px] text-center uppercase  `} > 
										{e.name} 
										<div className="hover:text-black duration-300 " > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-view"><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/><circle cx="12" cy="12" r="1"/><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/></svg> </div>
									</Link>
							  </div>
							</div>
                          ))}
                </div>

                {!loading && ( <button onClick={() => { setlength(length + 9); }} className='after after:bg-white after:left-0 after:top-[-100%] hover:after:top-0 hover:after:bg-primary hover:text-white after:z-[-1] z-[1] overflow-hidden relative flex items-center gap-[10px] border-primary border-[2px] text-primary mx-auto mt-[80px] px-[20px] py-[10px]'> {'Show More'} <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-circle-arrow-down'> <circle cx='12' cy='12' r='10' /> <path d='M12 8v8' /> <path d='m8 12 4 4 4-4' /> </svg> </button>)}
            </div>
        </div>
    );
}
