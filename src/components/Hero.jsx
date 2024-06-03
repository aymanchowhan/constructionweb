import React from 'react'

export default function Hero() {
    return (
        <>
            <div id='home' className=' container m-auto flex h-full px-[10%]'>
                <div className='m-auto lg:justify-center'>
                    <div className='text-center lg:text-lef text-[35px] lg:text-[70px] lg:mt-36 text-white'>
                        We`&apos;`re Building Your Future
                        <div className='text-center text-[14px] lg:text-[18px] mt-2'>
                            Take a step towards the future of construction with Cobuild
                            <div className='flex justify-center lg:mt-16 mt-7 '>
                                <button className='px-[40px] py-[18px] rounded-full hover:bg-gray-500 bg-[#F5AF00] text-[12px] duration-500 font-bold m-auto lg:m-0'>
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

