import React from 'react'

function Skills() {
  const data = [
    {
      name: 'buildings',
      value: 85
    },
    {
      name: 'Architectural',
      value: 60
    },
    {
      name: 'construction',
      value: 70
    },
    {
      name: 'Planning',
      value: 40
    }
  ]
  return (
    <div>

      <div id='skills' className='grid grid-cols-1 lg:grid-cols-2 gap-x-5   pt-28 container mx-auto '>
        <div className=' text-black px-10' >
          <div className='font-bold lg:leading-[4rem] text-center lg:text-left leading-[2.5rem] text-[34px] lg:text-[40px] mb-[30px]'>
            We are expert in this field since almost 20 years.
          </div>
          <div className="leading-8 mb-[40px] text-center lg:text-left text-[20px] text-[#999999]">
            Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor, nisi elit cuat ipsum, nec sagittis sem nibh id elit duis sed odio sit nibh vulputate cursus a sit amet mauris morbi accumsan
          </div>
        </div>
        <div className='my-auto mt-6'>
          {
            data.map((item, index) =>
              <div key={index} className='px-5 mb-5 '>
                <div className="flex justify-between  ">
                  <div className='my-auto uppercase '>{item.name}</div>
                  <div>{item.value}%</div>
                </div>
                <div className='bg-gray-400 h-1 w-full mt-1 rounded-full '>
                  <div style={{ width: `${item.value}%` }} className={`rounded-full h-full bg-yellow-400`}></div>
                </div>
              </div>
            )
          }
        </div>

      </div>
      <div className='h-[250px] bg-[#F5AF00] mt-10 text-white'>
        {/* An innovative company working on latest technologies */}
        <div>
        {/* <button className='px-[40px] py-[18px] rounded-full hover:bg-white hover:text-black border border-white bg-[#F5AF00] text-[12px] duration-500 font-bold m-auto lg:m-0'>
          Get a Quote
        </button> */}
        </div>
        
      </div>
    </div>
  )
}

export default Skills
