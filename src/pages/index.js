import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonial'
import Work from '@/components/Work'
import React from 'react'

function index() {
  return (
    <div>
      <Header/>
      <Hero/>
      <div>
      <Services/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Contact/>
      </div>

    </div>
  )
}

export default index
