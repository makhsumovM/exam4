import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../../../App.css"
import { Pagination, Navigation } from 'swiper/modules';

import homeSwiperBg1 from "../../../assets/homeSwiperBg1.png"
import  homeSwiperBg2 from "../../../assets/homeSwiperBg2.png"
import homeSwiperBg3 from "../../../assets/homeSwiperBg3.png"
import homeSwiperIcon from "../../../assets/homeSwiper1Icon.png"


const HomeSwiper1 = () => {
    return (
        <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
           
            1000: {
                slidesPerView: 3, // Показывать четыре слайда
                spaceBetween: 30,
              },
          }}
        >
          <SwiperSlide>
            <div className='flex flex-col items-center w-[100%] bg-cover bg-no-repeat bg-center h-[400px] gap-[20px] justify-around' style={{backgroundImage:`url(${homeSwiperBg1})`}}>
                <div><img src={homeSwiperIcon} alt="" className='' /></div>
                <h1 className='text-white font-bold text-[48px]'>Flexible time</h1>
                <p className='text-white text-[24px] w-[45%]  '>We work wherever you ready to builds. Work fast and profesional</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[100%] bg-cover bg-no-repeat bg-center h-[400px] gap-[20px] justify-around' style={{backgroundImage:`url(${homeSwiperBg1})`}}>
                <div><img src={homeSwiperIcon} alt="" className='' /></div>
                <h1 className='text-white font-bold text-[48px]'>Flexible time</h1>
                <p className='text-white text-[24px] w-[45%]  '>We work wherever you ready to builds. Work fast and profesional</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex flex-col items-center w-[100%] bg-cover bg-no-repeat bg-center h-[400px] gap-[20px] justify-around' style={{backgroundImage:`url(${homeSwiperBg1})`}}>
                <div><img src={homeSwiperIcon} alt="" className='' /></div>
                <h1 className='text-white font-bold text-[48px]'>Flexible time</h1>
                <p className='text-white text-[24px] w-[45%]  '>We work wherever you ready to builds. Work fast and profesional</p>
            </div>
          </SwiperSlide>

        </Swiper>
      </>
  )
}

export default HomeSwiper1