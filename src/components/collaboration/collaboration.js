import React from 'react';
import COLLAB1 from './collab1.png';
import COLLAB2 from './collab2.png';
import './collaboration.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

export default function Collab (){
return(
    <>
  <Swiper 
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper center"
      >
<div className="  swiper-wrapper center b " style={{ width: '30%' }}>
 
 <SwiperSlide className='center' style={{ width: '18rem' }}>
   <div  className='card1 ' style={{ width: '100%' , margin:'0'}}> 
   <div   className= 'card3'  >
      <div>
        <img   className='br4  image  ' alt='robots' src={COLLAB1 }/>
      </div>
      <div className=''>

        <div className='center h2' style={{ width: '100%' }}>title</div>
        <div className='center p mt2' style={{ width: '100%' }}>concept</div>
       </div>
      </div>
    </div>
     </SwiperSlide>
      <SwiperSlide className='center' style={{ width: '18rem' }}>
   <div  className='card1 ' style={{ width: '100%' , margin:'0'}}> 
   <div   className= 'card3'  >
      <div>
        <img   className='br4  image  ' alt='robots' src={COLLAB1 }/>
      </div>
<div className=''>
        <div className='center h2' style={{ width: '100%' }}>title</div>
        <div className='center p mt2' style={{ width: '100%' }}>concept</div>
      </div>
      </div>
    </div>
     </SwiperSlide>
      <SwiperSlide className='center' style={{ width: '18rem' }}>
   <div  className='card1 ' style={{ width: '100%' , margin:'0'}}> 
   <div   className= 'card3'  >
      <div>
        <img   className='br4  image  ' alt='robots' src={COLLAB2 }/>
     <div className=''>
        <div className='center h2' style={{ width: '100%' }}>title</div>
        <div className='center p mt2' style={{ width: '100%' }}>concept</div>
      </div>
      </div>
    </div>
    </div>
     </SwiperSlide>
     <SwiperSlide className='center' style={{ width: '18rem' }}>
   <div  className='card1 ' style={{ width: '100%' , margin:'0'}}> 
   <div   className= 'card3'  >
      <div>
        <img   className='br4  image  ' alt='robots' src={COLLAB2 }/>
      </div>
<div className=''>
        <div className='center h2' style={{ width: '100%' }}>title</div>
        <div className='center p mt2' style={{ width: '100%' }}>concept</div>
      </div>
      </div>
    </div>
     </SwiperSlide>


</div>
</Swiper>
</>
)}



