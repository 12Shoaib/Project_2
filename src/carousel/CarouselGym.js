import React from 'react';
import style from './Gym.module.css';
import Carousel from 'better-react-carousel';
import {imgStore} from './images';
import { useState } from 'react';
import { useEffect } from 'react';

function CarouselGym(){
  const [isMobile, setIsMobile] = useState(false)


function HadleClick(){
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
}

useEffect(() => {
  window.addEventListener("resize", HadleClick)
})
return(
     <>  <div className={style.mainComponent}>  
         <div className={style.carou} >
           <h1 className={style.heading2}>Training Program</h1>
        <Carousel  onChange={HadleClick} cols={isMobile?-3:3} rows={1} gap={5} loop={true}  >
           {imgStore.map(([img,text])=>{
                return(<Carousel.Item >
                  <div className={style.item}>
                  <p className={style.imgtext}>{text}</p>
                <img className={style.img1} src={img}/>
                </div>
              </Carousel.Item>) 
           })}
    </Carousel>   
    </div>
    </div>
    </>
      
    )
}
export default CarouselGym;