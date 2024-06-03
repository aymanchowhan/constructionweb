import Image from 'next/image';
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoWhatsapp } from 'react-icons/io';
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link';

function Contact() {
  const data = [
    {
      img: <IoHomeOutline />,
      title: "Address",
      desc: "220 Petersham town, Wardell street, Australia PA 6550"
    },
    {
      img: <MdOutlinePhoneAndroid />,
      title: "Phone",
      desc: "Phone: (04) 491 570 110 Fax: +04 642 021 332"
    },
    {
      img: <TfiEmail />,
      title: "Email",
      desc: "support@zytheme.com Twitter: @zytheme"
    },
  ];
  const data2 = [
    {
      icon: <IoLogoWhatsapp />,
      path:"https://web.whatsapp.com/"
    },

    {
      icon: <GrInstagram />,
      path: 'https://www.instagram.com/'
    },
    {
      icon: <FaFacebookF />,
      path: 'https://www.facebook.com/'
    },
  ]

  return (
    <div id='contact' className='h-fit m-auto container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[70%] mx-auto pb-24'>
        {
          data.map((item, index) => (
            <div key={index} className='py-10 sm:py-16 gap-6 sm:gap-12'>
              <div className='flex justify-center text-6xl mb-4 sm:mb-6 text-[#F5AF00]'>
                {item.img}
              </div>
              <div className='text-xl sm:text-2xl font-bold text-center h2-title text-[#0F1D46] mb-3 sm:mb-4'>
                {item.title}
              </div>
              <div className='text-center text-[#999999] mb-3 sm:mb-4 px-4 sm:px-8 lg:px-16'>
                {item.desc}
              </div>
            </div>
          ))
        }
      </div>
      <div className=' text-[#0F1D46] py-4 text-center grid lg:grid-cols-2 grid-cols-1'>
       <div className='text-[14px] mb-5 text-[#999999]'>
        © Zytheme 2016, All Rights Reserved.
       </div>
       <div className='flex justify-center gap-4'> 
       {
          data2.map((item,index)=>
            <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer">
              <div className='text-[#999999] text-lg hover:bg-[#F5AF00]'> 
              {item.icon}
              </div>
              </Link>
          )
        }
        </div>
        
      </div>
    </div>
    
    
    
  )
}

export default Contact;
