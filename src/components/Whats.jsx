'use client'
import React, { useEffect , useState } from 'react'


const Whats = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(50);
    const [showWhats , SetshowWhats] = useState(false)
    const [height , Setheight] = useState(700)

    useEffect(_=>{
        const handelScroll =  _=> {
            window.scrollY > height ? SetshowWhats(true) : SetshowWhats(false)
            
        }
        window.addEventListener("scroll" , handelScroll)
        
        return _=> window.removeEventListener("scroll" , handelScroll)
    
    } ,[ ])

    const handleScroll = ()=> window.scrollTo({top:0 , behavior: "smooth"})




  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect();
        footerPosition.top < window.innerHeight ?  setIsFooterVisible(300) :setIsFooterVisible(30);
      } 
    }
    window.addEventListener('scroll', handleScroll);
    return () =>  window.removeEventListener('scroll', handleScroll); 
  }, []);


  return (
    <div  className='whats' style={{  bottom: isFooterVisible }}>
      <a  target='_black' href="https://api.whatsapp.com/send?phone=+201551495772&text=Hello!" style={{top : showWhats? '0' : "50px" }} > <i  className={`fa-brands fa-whatsapp `}></i> </a>
      <a  href='#' style={{clipPath : showWhats? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}  > <i onClick={handleScroll} className={`bx bx-up-arrow-alt`}></i> </a>
    </div>
  )
}

export default Whats