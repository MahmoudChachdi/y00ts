import React from 'react';
import { Outlet, Link } from "react-router-dom";
import MERCH from './MERCH.png';
import purple from './purple.png';
import morpho from './morpho.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { EffectCoverflow, Pagination } from "swiper";


import './home.css';

export default function Home (){
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
   <div  className='card5 ' style={{ width: '100%' , margin:'0'}}> 
   <div   className= 'card6'  >
      <div>
        <img   className='br4  image  ' alt='robots' src={MERCH }/>
      </div>
      <div  className='center mb1'  style={{width: '50%'}}>
        <h2 className='white bg '>MERCH</h2>
       </div>
       <div className='center' >
       <Link to="order" >
        <button type="button" >
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> CHECK IT</span>
        </button>
       </Link>
       </div>
     
       </div>
    </div>
    </SwiperSlide>
     <SwiperSlide className='center' style={{ width: '18rem'}}>
      <div className=' card5' style={{ width: '100%' , margin:'0'}} >
      <div className='  card6' >
      <div>
        <img  style={{ width: '100%' , height: '100%' }}  className='br4 image ' alt='robots' src={morpho }/>
      </div>
      <div className='center mb1' style={{width: '50%'}}>
        <h2 className='white bg '>ROADMAP</h2>
      </div>
      <div className='center mb1' >
       <Link to="collab">
       <button type="button" >
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> CHECK IT</span>
        </button>
       </Link>
       
    </div>
    </div>
      </div> 
      </SwiperSlide >
      <SwiperSlide className='center' style={{ width: '18rem' }}>
     <div className='  card5' style={{ width: '100%' , margin:'0'}} >
      <div className='  card6'>
      <div>
      <img  style={{ width: '100%' , height: '100%' }} className='br4 image ' alt='robots' src={purple }/>
      </div>
      <div className='center mb1' style={{width: '50%'}}>
        <h2 className='white bg'>ART</h2>
      </div>
      <div className='center mb1' >
       <Link to="art">
        <button type="button" >
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> CHECK IT</span>
        </button>
       </Link>
    </div>
    </div>
    </div>
  </SwiperSlide>



<Outlet/>
</div>
</Swiper>
</>
);
}


