import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Product from './Product'
import Category from './Category'
import Feature from './Feature'
import About from './About'
import HeroSection from './HeroSection'

const Main = () => {
  return (
    <div>
    <div>
    <Navbar/>
    </div>

    <div>
    <HeroSection/>
    </div>

    <div>
    <About/>
    </div>

    <div>
    <Feature/>
    </div>

    <div>
    <Category/>
    </div>

    <div>
    <Product/>
    </div>

    <div>
    <Footer/>
    </div>
      
    </div>
  )
}

export default Main
