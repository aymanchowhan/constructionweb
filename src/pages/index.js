import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonial'
import Work from '@/components/Work'
import Image from 'next/image'
import React from 'react'

function index() {
  return (
    <Layout>
      <div className={`bg-[url('https://res.cloudinary.com/dxnecw20a/image/upload/v1717325691/Revital/m0hpa3tuosuosdgdyewy.png')] bg-cover bg-center bg-no-repeat w-full h-screen`}>
        <Hero />
      </div>

      <Services />
      <Work />
      <Skills />
      <Testimonial />
    </Layout>
  )
}

export default index
