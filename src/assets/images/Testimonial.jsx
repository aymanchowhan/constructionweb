import React, { useState } from 'react'
import { SlEnergy } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../assets/img/testimonial-1.png';
import img2 from '../assets/img/testimonial-2.png';
import img3 from '../assets/img/testimonial-3.png';
import img4 from '../assets/img/testimonial-4.png';
import img5 from '../assets/img/testimonial-5.png';
import img6 from '../assets/img/testimonial-6.png';
import img7 from '../assets/img/testimonial-7.png';
import "swiper/css";

import { Pagination, Autoplay } from 'swiper/modules';
function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const data = [
    {
      test: "Lorem ipsum dolor sit, amet  iure unde, inventore repudiandae molestiae fugiat nihil.amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur",
      img: img1,
      name1: "Ayman Chowhan",
      desig: "Timepass",
    },
    {
      test: "Lorem ipsum dolor sit, amet  iure unde, inventore repudiandae molestiae fugiat nihil.amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur",
      img: img2,
      name1: "Ayman Chowhan",
      desig: "Timepass",
    },
    {
      test: "Lorem ipsum dolor sit, amet  iure unde, inventore repudiandae molestiae fugiat nihil.amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur",
      img: img3,
      name1: "Ayman Chowhan",
      desig: "Timepass",
    },
    {
      test: "Lorem ipsum dolor sit, amet  iure unde, inventore repudiandae molestiae fugiat nihil.amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur",
      img: img4,
      name1: "Ayman Chowhan",
      desig: "Timepass",
    },
    {
      test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur. Facilis harum laboriosam doloremque iure unde, inventore repudiandae molestiae fugiat nihil.",
      img: img5,
      name1: "Ayman Chowhan",
      desig: "Timepass",
    },
    {
      test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur. Facilis harum laboriosam doloremque iure unde, inventore repudiandae molestiae fugiat nihil.",
      img: img6,
      name1: "Ayman Chowhan",
      desig: "Timepass",
    },
    {
      test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur. Facilis harum laboriosam doloremque iure unde, inventore repudiandae molestiae fugiat nihil.",
      img: img7,
      name1: "Ayman Chowhan",
      desig: "Timepass",
    },
  ]
  return (
    <div id='testimonials' className='container m-auto lg:px-20'>
      <div className='pt-[150px] pb-[70px]'>
        <div className='bg-[#3c89e0] rounded-full h-[70px] w-[70px] flex mb-[40px] mx-auto text-center'>
          <SlEnergy className=' text-white text-3xl m-auto' />
        </div>

        <div className='text-center text-[34px] text-[#0f1d46] lg:text-[60px] h2-title font-bold lg:leading-[4rem] mb-[40px] px-[30px]'>People always loves our product
        
        </div>
      </div>
      <Swiper
        breakpoints={{
          // for mobile view 
          0: {
            slidesPerView: 1,
          },
          //for small tablet view
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },

        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={true}
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          data.map((item, index) => (
            <SwiperSlide key={index} className='mb-[15px]'>
              <div className='font-[16px] p-subtitle text-center mx-auto mb-[50px] px-[30px]'>
                {item.test}</div>
              <div>
                <img src={item.img} alt="" className='rounded-full h-[50px] w-[50px] mb-[40px] mx-auto text-center' />
              </div>
              <div className='text-center h2-title mb-[5px] text-[20px]'>
                {item.name1}</div>
              <div className='text-center'>
                {item.desig}</div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className='flex justify-center gap-3 mb-[50px]'>
        {
          data.map((item, i) =>
            <div key={i}>
              <div className={`${activeIndex == i ? 'h-1 w-12 bg-blue-500 rounded-full' : 'h-1 w-3 bg-gray-400 rounded-full'} duration-500 rounded-full`}/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Testimonial
