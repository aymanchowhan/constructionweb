import Link from 'next/link';
import HashLink from 'next/link'
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
function Header({ changeHeaderColor }) {
  const menu = [
    {
      name: 'HOME',
      path: '/#home'
    },
    {
      name: 'SERVICES',
      path: '/#services'
    },
    {
      name: 'WORK',
      path: '/#work'
    },
    {
      name: 'SKILLS',
      path: '/#skills'
    },
    {
      name: 'TESTIMONIAL',
      path: '/#testimonial'
    },
    {
      name: 'CONTACT',
      path: '/#contact'
    },


  ]
  const [IsOpen, setIsOpen] = useState(false)


  return (
    <div className={`${changeHeaderColor ? 'bg-white text-black' : 'bg-transparent text-white'} duration-300`}>
      <div className='container m-auto relative bg-transparent'>
        <div className='flex h-fit justify-between gap-8 px-2 py-5'>
          <div className={`my-auto`}>COBUILD</div>
          <div className='my-auto flex'>
            <div className='cursor-pointer' onClick={() => setIsOpen(!IsOpen)}>
              {
                IsOpen ?
                  <IoIosCloseCircleOutline className='lg:hidden text-3xl' />
                  :
                  <CiMenuFries className='lg:hidden text-3xl' />
              }
            </div>
            <div className='hidden lg:block'>
              <div className='flex gap-10'>
                {

                  menu.map((item, index) =>
                    <Link className='my-auto' key={index} href={item.path}>
                      <div className='hover:border-b border-[#F5AF00] hover:text-[#F5AF00] text-[12px]'> {item.name} </div>
                    </Link>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        {
          IsOpen &&
          <div className='lg:hidden absolute left-0 bg-white top-[78px] right-0 px-5 border-b-2 border-[#52657d] pb-4'>
            <div className='h-full gap-8 '>
              {

                menu.map((item, index) =>
                  <Link className='my-auto' key={index} href={item.path}>
                    <div className='hover:bg-[#F5AF00] hover:text-white px-5 rounded-lg py-2 my-2'> {item.name} </div>
                  </Link>
                )
              }

            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Header