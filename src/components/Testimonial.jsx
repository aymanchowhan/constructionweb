
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../assets/images/testimonial-1.png';
import img2 from '../assets/images/testimonial-2.png';
import img3 from '../assets/images/testimonial-3.png';
import img4 from '../assets/images/testimonial-4.png';
import img5 from '../assets/images/testimonial-5.png';
import "swiper/css";
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const data = [
    {
      test: "“Its just brilliant. I will recommend Cobuild to everyone I know! Im really glad to these guys got Cobuild out there.”",
      img: img1,
      name1: "Ayman Chowhan"
      
    },
    {
      test: "“We are so excited to launch our new company, By using Cobuild it has a great features, I think you are all about to make me happy.”",
      img: img2,
      name1: "Ayman Chowhan",
     
    },
    {
      test: "“Its just brilliant. I will recommend Cobuild to everyone I know! Im really glad to these guys got Cobuild out there.”",
      img: img3,
      name1: "Ayman Chowhan"
    },
    {
      test: "“We are so excited to launch our new company, By using Cobuild it has a great features, I think you are all about to make me happy.”",
      img: img4,
      name1: "Ayman Chowhan"
    },
    {
      test: "“Its just brilliant. I will recommend Cobuild to everyone I know! Im really glad to these guys got Cobuild out there.”",
      img: img5,
      name1: "Ayman Chowhan"
    },

  ]
  return (

    <div id='testimonial' className='min-h-screen container m-auto lg:px-20'>
      <div className='pt-[100px] pb-[70px] flex justify-center'>
        <div className='text-center text-[34px]  lg:text-[40px]  font-bold lg:leading-[4rem] mb-[40px] px-[30px]'>
          Our Clients Say
          <div className='text-[16px] px-0 lg:px-96 pt-3 leading-6 text-[#999999] ' >
            Duis aute irure dolor in reprehenderit volupte velit esse cillum fugiat pariature occaecat cupidatat proident culpa.
          </div>
        </div>
      </div>
      <Swiper
        breakpoints={{
          // for mobile view 
          0: {
            slidesPerView: 1,
          },
          //for small tablet view
          // 640: {
          //   slidesPerView: 2,
          // },
          1024: {
            slidesPerView: 2,
          },

        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          data.map((item, index) => (
            <SwiperSlide key={index} className='mb-[15px]'>
              <div className='text-[20px] text-[#999999] text-center mx-auto mb-[10px] px-28'>
                {item.test}</div>
              <div>
                <Image src={item.img} alt="" className='rounded-full h-[50px] w-[50px] mb-[40px] mx-auto text-center' />
              </div>
              <div className='text-center text-black mb-[5px] text-[14px]'>
                {item.name1}</div>
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
