import React, { useState } from 'react'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'
import Image from 'next/image'

function Work() {
  const [tab, setTab] = useState('all')
  const [activeIndex, setActiveIndex] = useState(null)
  const data = [
    {
      img: img1,
      name: 'Tower Building',
      type: 'building'
    },
    {
      img: img2,
      name: 'Renovation',
      type: 'construction'
    },
    {
      img: img3,
      name: 'Hospital Building',
      type: 'planning'
    },
    {
      img: img4,
      name: 'Tower Building',
      type: 'construction'
    },
    {
      img: img5,
      name: 'Tower Renovation',
      type: 'building'
    },
    {
      img: img6,
      name: 'Planning',
      type: 'planning'
    },
  ]

  return (
    <div id='work' className='min-h-screen m-auto container pt-[90px] pb-[70px] relative '>
      <div className='text-center text-[36px]'>
        Featured Work
      </div>
      <div className='text-center px-2 text-[14px] lg:w-1/2 mx-auto pt-5 text-[#999999]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quam corporis, quis impedit architecto delectus voluptatum fugiat beatae nemo eaque.
      </div>
      <div className='flex justify-center mt-10 lg:gap-6'>
        <div onClick={() => setTab('all')} className={`${tab === 'all' && 'bg-yellow-400 rounded-full text-white'} px-5 py-2 cursor-pointer duration-500 my-auto`}>All</div>
        <div onClick={() => setTab('building')} className={`${tab === 'building' && 'bg-yellow-400 rounded-full text-white'} px-5 py-2 cursor-pointer duration-500 my-auto`}>Building</div>
        <div onClick={() => setTab('construction')} className={`${tab === 'construction' && 'bg-yellow-400 rounded-full text-white'} px-5 py-2 cursor-pointer duration-500 my-auto`}>Construction</div>
        <div onClick={() => setTab('planning')} className={`${tab === 'planning' && 'bg-yellow-400 rounded-full text-white'} px-5 py-2 cursor-pointer duration-500 my-auto`}>Planning</div>
      </div>
  

      <div className='flex flex-wrap mx-auto justify-center gap-3 mt-12 w-[70%]'>
      {data.map((item, index) => (
          <div
            key={index}
            onMouseOver={() => setActiveIndex(index)}
            onMouseOut={() => setActiveIndex(null)}
            className={`${tab === 'all' || tab === item.type ? 'block' : 'hidden'} w-[300px] h-[250px] m-auto rounded-xl overflow-hidden relative`}
          >
            <Image
              src={item.img}
              alt={item.name}
              className={`w-full h-full duration-700 object-cover ${activeIndex === index ? 'scale-125' : ''}`}
            />
            <div className={`${activeIndex === index ? 'absolute top-0 right-0 left-0 bottom-0 bg-[#f5af0070]' : ''}`}>
              <div className='text-white text-center text-[14px] py-28'>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work
