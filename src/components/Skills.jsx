import React from 'react'

const Skills = () => {
    const data = [
        {name:"HTML" , persent:"95%" , branch:[
            {name:"pug js" , persent : "80%"}
        ]},
        {name:"css" , persent:"95%" , branch:[
            {name:"sass" , persent : "90%"} ,
            {name:"tailwind" , persent : "70%"} ,
            {name:"bootstrap" , persent : "80%"} ,
        ]},
        {name:"javaScript" , persent:"80%", branch:[
            {name:"React js" , persent : "80%"},
            {name:"next js" , persent : "80%"},
            {name:"TypeScript" , persent : "70%"}
        ]},
        {name:"Node js" , persent:"85%", branch:[
            {name:"express" , persent : "80%"},
            {name:"nust" , persent : "80%"},
        ]},
        {name:"php" , persent:"75%" , branch:[
            {name:"laravel" , persent : "80%"},
            {name:"blade" , persent : "85%"},
        ]},
        {name:"database" , persent:"0%", branch:[
            {name:"mysql" , persent : "80%"},
            {name:"MongoDb" , persent : "80%"},
            {name:"firebase" , persent : "85%"},
        ]},
        {name:"other" , persent:"0%" , branch:[
            {name:"wordpress" , persent : "80%"},
            {name:"shopify" , persent : "80%"},
        ]},
        {name:"Github" , persent:"100%"},
    ]


  return (
    <div className='Skills' id='skills' >
        <div className="container">
            <h1>my skills</h1>
            <div className="boxes">
                {data.map((ele , index)=>(
                    <div className="box" key={index}>
                         {/* <b data-aos='slide-right'  style={{left: ele.persent  , display : ele.persent == "0%" ? 'none' : 'block' }}> {ele.persent} </b>  */}
                         <div className="group">
                            <div className="top"  >   <span>{ele.name} </span> </div>
                            <div className="line" style={{opacity : ele.persent == "0%" ? '0' : '1' }} >  
                                <span data-width={ele.persent}  >  </span>             
                                <b data-aos='slide-right'  data-width={ele.persent}  data-aos-delay='300' style={{width: ele.persent}} > </b> 
                            </div>
                         </div>

                        <ul>
                            {
                                ele.branch?.map((e,idx)=>(
                                    <li key={idx}>
                                        {/* <b data-aos='slide-right' style={{left: e.persent }} > {e.persent} </b>  */}
                                        <div className="top"> <span>{e.name} </span> </div>
                                        <div className="line">   
                                            <span data-width={e.persent} ></span>   
                                            <b data-aos='slide-right' data-width={e.persent}  data-aos-delay='300' style={{width: e.persent }} > </b> 
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills