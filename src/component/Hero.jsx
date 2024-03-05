import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import About from './About'
import Feature from './Feature'
import Category from './Category'
import Product from './Product'
import Footer from './Footer'

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Feature/>
      <Category/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default Hero
