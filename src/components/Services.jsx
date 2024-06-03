import React from 'react'
import { GiCargoCrane } from "react-icons/gi";
import { SiRenovatebot } from "react-icons/si";
import { FaHelmetSafety } from "react-icons/fa6";
import { BsBuildings } from "react-icons/bs";
function Services() {
    const data = [
        {
            icon: <GiCargoCrane className='m-auto' />,
            iconBgCol: '#1980FA',
            title: "Fast Operations",
            description: "Cobuild impresses you with fully responsiveness and highly customization."
        },
        {
            icon: <SiRenovatebot className='m-auto' />,
            iconBgCol: '#9919FA',
            title: "Renovation",
            description: "Cobuild impresses you with fully responsiveness and highly customization."
        },
        {
            icon: <FaHelmetSafety className='m-auto' />,
            iconBgCol: '#FAA719',
            title: "Construction",
            description: "Cobuild impresses you with fully responsiveness and highly customization."
        },
        {
            icon: <BsBuildings className='m-auto' />,
            iconBgCol: '#19B5FA',
            title: "Architecture",
            description: "In at iaculis lorem ipsum. Praesent tempor dictum"
        },
    ]
    return (
        <div id='services' className='h-fit m-auto container pt-14 lg:pt-[90px] pb-[70px]'>
            <div className='flex justify-center text-[30px] lg:text-[36px]'>
                Our Services
            </div>
            <div className='text-center px-2 text-[14px] lg:w-1/2 mx-auto text-gray-500 pt-5'>
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 w-fit lg:w-[70%] mx-auto gap-0 lg:pb-16 pb-5 '>
                {
                    data.map((item, index) => (
                        <div className=' p-[20px] mt-14'>
                            <div className={`h-[70px] w-[70px] mx-auto  flex text-[#F5AF00] text-5xl mb-[0px] lg:mb-[30px]`}>
                                {item.icon}
                            </div>
                            <div className='text-[18px] font-bold text-center  text-[#0F1D46] mb-[10px] lg:mb-[15px]'>
                                {item.title}
                            </div>
                            <div className='text-center text-[14px] text-base p-subtitle text-[#999999]'>
                                {item.description}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services
