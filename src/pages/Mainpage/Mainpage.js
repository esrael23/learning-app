import React from 'react'
import Courses from '../../components/Corses/Courses'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/hero/Hero'
import Team from '../../components/Team/Team'
import WhyUs from '../../components/Whyus/WhyUs'

const Portfolio = () => {
  return (
    <div>
      
      <Hero/>
      <WhyUs/>
      <Courses/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default Portfolio