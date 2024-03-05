import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import AllItems from '../Pages/AllItems'

import NavItem2 from '../Pages/NavItem2'
import NavItem3 from '../Pages/NavItem3'
import NavItem5 from '../Pages/NavItem5'
import Php from '../Pages/Php'
import HeroSection from '../component/HeroSection'
import Main from '../component/Main'
import NavItem4 from '../Pages/NavItem4'



const Connection = () => {
  return (
    <div>

    <Routes>

    <Route path='/' element={<Navigate to='main'></Navigate>}></Route>
        <Route path='/home' element={<Main/>}></Route>
        <Route path='/all items' element={<AllItems/>}></Route>
        <Route path='/css' element={<NavItem2/>}></Route>
        <Route path='/javascript' element={<NavItem3/>}></Route>
        <Route path='/html' element={<NavItem4/>}></Route>
        <Route path='/php' element={<Php/>}></Route>
        <Route path='/react' element={<NavItem5/>}></Route>



      

        
    
    </Routes>
      
    </div>
  )
}

export default Connection
